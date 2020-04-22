const page1 = `
<head>
  <meta charset="utf-8">
  <title>Benchmark.js</title>
  <meta name="viewport" content="width=device-width">
  <meta name="description" content="A benchmarking library that supports high-resolution timers &amp; returns statistically significant results.">
  <link rel="stylesheet" href="/_css/main.css">
  <link rel="feed alternate" type="application/atom+xml" href="https://github.com/bestiejs/benchmark.js/commits/master.atom">
  <!--[if lt IE 9]><script src="/_js/html5.js"></script><![endif]-->
 </head>
 <body>
  <hgroup>
   <h1>Benchmark.js <span>v2.1.2</span></h1>
   <h2>A benchmarking library that supports high-resolution timers &amp; returns statistically significant results.</h2>
  </hgroup>

  <pre class="intro"><code><span class="kw2">var</span> suite <span class="sy0">=</span> <span class="kw2">new</span> Benchmark.<span class="me1">Suite</span><span class="sy0">;</span><br><br><span class="co1">// add tests</span><br>suite.<span class="me1">add</span><span class="br0">(</span><span class="st0">'RegExp#test'</span><span class="sy0">,</span> <span class="kw2">function</span><span class="br0">(</span><span class="br0">)</span> <span class="br0">{</span><br>  <span class="co2">/o/</span>.<span class="me1">test</span><span class="br0">(</span><span class="st0">'Hello World!'</span><span class="br0">)</span><span class="sy0">;</span><br><span class="br0">}</span><span class="br0">)</span><br>.<span class="me1">add</span><span class="br0">(</span><span class="st0">'String#indexOf'</span><span class="sy0">,</span> <span class="kw2">function</span><span class="br0">(</span><span class="br0">)</span> <span class="br0">{</span><br>  <span class="st0">'Hello World!'</span>.<span class="me1">indexOf</span><span class="br0">(</span><span class="st0">'o'</span><span class="br0">)</span> <span class="sy0">&gt;</span> <span class="nu0">-1</span><span class="sy0">;</span><br><span class="br0">}</span><span class="br0">)</span><br>.<span class="me1">add</span><span class="br0">(</span><span class="st0">'String#match'</span><span class="sy0">,</span> <span class="kw2">function</span><span class="br0">(</span><span class="br0">)</span> <span class="br0">{</span><br>  <span class="sy0">!!</span><span class="st0">'Hello World!'</span>.<span class="me1">match</span><span class="br0">(</span><span class="co2">/o/</span><span class="br0">)</span><span class="sy0">;</span><br><span class="br0">}</span><span class="br0">)</span><br><span class="co1">// add listeners</span><br>.<span class="me1">on</span><span class="br0">(</span><span class="st0">'cycle'</span><span class="sy0">,</span> <span class="kw2">function</span><span class="br0">(</span>event<span class="br0">)</span> <span class="br0">{</span><br>  console.<span class="me1">log</span><span class="br0">(</span>String<span class="br0">(</span>event.<span class="me1">target</span><span class="br0">)</span><span class="br0">)</span><span class="sy0">;</span><br><span class="br0">}</span><span class="br0">)</span><br>.<span class="me1">on</span><span class="br0">(</span><span class="st0">'complete'</span><span class="sy0">,</span> <span class="kw2">function</span><span class="br0">(</span><span class="br0">)</span> <span class="br0">{</span><br>  console.<span class="me1">log</span><span class="br0">(</span><span class="st0">'Fastest is '</span> <span class="sy0">+</span> <span class="kw1">this</span>.<span class="me1">filter</span><span class="br0">(</span><span class="st0">'fastest'</span><span class="br0">)</span>.<span class="me1">map</span><span class="br0">(</span><span class="st0">'name'</span><span class="br0">)</span><span class="br0">)</span><span class="sy0">;</span><br><span class="br0">}</span><span class="br0">)</span><br><span class="co1">// run async</span><br>.<span class="me1">run</span><span class="br0">(</span><span class="br0">{</span> <span class="st0">'async'</span><span class="sy0">:</span> <span class="kw2">true</span> <span class="br0">}</span><span class="br0">)</span><span class="sy0">;</span></code></pre>

  <h2 id="docs">Documentation</h2>
  <ul>
   <li><a href="/docs">API Documentation</a></li>
  </ul>

  <h2 id="download">Download</h2>
  <ul>
   <li><a href="https://raw.github.com/bestiejs/benchmark.js/2.1.2/benchmark.js">Development source</a></li>
  </ul>

  <h2>Installation</h2>
  <p>Benchmark.js’ only hard dependency is <a href="https://lodash.com/">lodash</a>. Include <a href="https://mths.be/platform">platform.js</a> to populate <a href="/docs#platform">Benchmark.platform</a>.</p>
  <p>In a browser:</p>
  <pre><code><span class="sy0">&lt;</span>script src<span class="sy0">=</span><span class="st0">"lodash.js"</span><span class="sy0">&gt;&lt;/</span>script<span class="sy0">&gt;</span><br><span class="sy0">&lt;</span>script src<span class="sy0">=</span><span class="st0">"platform.js"</span><span class="sy0">&gt;&lt;/</span>script<span class="sy0">&gt;</span><br><span class="sy0">&lt;</span>script src<span class="sy0">=</span><span class="st0">"benchmark.js"</span><span class="sy0">&gt;&lt;/</span>script<span class="sy0">&gt;</span></code></pre>
  <p>Using npm:</p>
  <pre><code>$ {sudo -H} npm i -g npm<br>$ npm i --save benchmark</code></pre>
  <p>In Node.js:</p>
  <pre><code><span class="kw2">var</span> Benchmark <span class="sy0">=</span> require<span class="sy0">(</span><span class="st0">'benchmark'</span><span class="sy0">)</span><span class="sy0">;</span></code></pre>
  <p>Optionally, use <a href="https://github.com/wadey/node-microtime">the microtime module for Node.js</a> by Wade Simmons:</p>
  <pre><code>$ npm i --save microtime</code></pre>

  <h2 id="support">Support</h2>
  <p>Tested in Chrome 46-47, Firefox 42-43, IE 9-11, Edge 13, Safari 8-9, Node.js 0.10.x, 0.12.x, 4.x, &amp; 5.x, &amp; PhantomJS 1.9.8.</p>
  <a href="https://github.com/bestiejs/benchmark.js" class="github"><img src="/_img/github.png" alt="Fork me on GitHub"></a>
  <footer>Benchmark.js by <a href="https://mathiasbynens.be/">Mathias Bynens</a> and <a href="http://allyoucanleet.com/">John-David Dalton</a><br>Twitter: <a href="https://twitter.com/benchmarkjs" rel="nofollow">@benchmarkjs</a></footer>
  <script src="https://www.google-analytics.com/ga.js"></script><script>window._gaq=[['_setAccount','UA-6065217-50'],['_trackPageview']];(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='https://www.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s)}(document,'script'))</script>
</body>
`

const page2 = `
<!--<![endif]--><head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>Quality is value to some person at some time | Markus Gärtner</title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="http://www.shino.de/blog/xmlrpc.php">
	<!--[if lt IE 9]>
	<script src="http://www.shino.de/blog/wp-content/themes/twentyfourteen/js/html5.js"></script>
	<![endif]-->
	<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//s.w.org">
<link href="https://fonts.gstatic.com" crossorigin="" rel="preconnect">
<link rel="alternate" type="application/rss+xml" title="Markus Gärtner » Feed" href="http://www.shino.de/feed/">
<link rel="alternate" type="application/rss+xml" title="Markus Gärtner » Comments Feed" href="http://www.shino.de/comments/feed/">
<link rel="alternate" type="application/rss+xml" title="Markus Gärtner » Quality is value to some person at some time Comments Feed" href="http://www.shino.de/2010/07/22/quality-is-value-to-some-person-at-some-time/feed/">
<!-- This site uses the Google Analytics by MonsterInsights plugin v7.10.4 - Using Analytics tracking - https://www.monsterinsights.com/ -->
<script async="" src="//www.google-analytics.com/analytics.js"></script><script type="text/javascript" data-cfasync="false">
	var mi_version         = '7.10.4';
	var mi_track_user      = true;
	var mi_no_track_reason = '';
	
	var disableStr = 'ga-disable-UA-17245929-2';

	/* Function to detect opted out users */
	function __gaTrackerIsOptedOut() {
		return document.cookie.indexOf(disableStr + '=true') > -1;
	}

	/* Disable tracking if the opt-out cookie exists. */
	if ( __gaTrackerIsOptedOut() ) {
		window[disableStr] = true;
	}

	/* Opt-out function */
	function __gaTrackerOptout() {
	  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
	  window[disableStr] = true;
	}
	
	if ( mi_track_user ) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','__gaTracker');

		__gaTracker('create', 'UA-17245929-2', 'auto');
		__gaTracker('set', 'forceSSL', true);
		__gaTracker('set', 'anonymizeIp', true);
		__gaTracker('require', 'displayfeatures');
		__gaTracker('send','pageview');
	} else {
		console.log( "" );
		(function() {
			/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
			var noopfn = function() {
				return null;
			};
			var noopnullfn = function() {
				return null;
			};
			var Tracker = function() {
				return null;
			};
			var p = Tracker.prototype;
			p.get = noopfn;
			p.set = noopfn;
			p.send = noopfn;
			var __gaTracker = function() {
				var len = arguments.length;
				if ( len === 0 ) {
					return;
				}
				var f = arguments[len-1];
				if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
					console.log( 'Not running function __gaTracker(' + arguments[0] + " ....) because you are not being tracked. " + mi_no_track_reason );
					return;
				}
				try {
					f.hitCallback();
				} catch (ex) {

				}
			};
			__gaTracker.create = function() {
				return new Tracker();
			};
			__gaTracker.getByName = noopnullfn;
			__gaTracker.getAll = function() {
				return [];
			};
			__gaTracker.remove = noopfn;
			window['__gaTracker'] = __gaTracker;
					})();
		}
</script>
<!-- / Google Analytics by MonsterInsights -->
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/www.shino.de\/blog\/wp-includes\/js\/wp-emoji-release.min.js?ver=f06a217923df41fe4f69a2e3ed068fb9"}};
			!function(e,a,t){var r,n,o,i,p=a.createElement("canvas"),s=p.getContext&&p.getContext("2d");function c(e,t){var a=String.fromCharCode;s.clearRect(0,0,p.width,p.height),s.fillText(a.apply(this,e),0,0);var r=p.toDataURL();return s.clearRect(0,0,p.width,p.height),s.fillText(a.apply(this,t),0,0),r===p.toDataURL()}function l(e){if(!s||!s.fillText)return!1;switch(s.textBaseline="top",s.font="600 32px Arial",e){case"flag":return!c([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])&&(!c([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!c([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]));case"emoji":return!c([55357,56424,55356,57342,8205,55358,56605,8205,55357,56424,55356,57340],[55357,56424,55356,57342,8203,55358,56605,8203,55357,56424,55356,57340])}return!1}function d(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(i=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},o=0;o<i.length;o++)t.supports[i[o]]=l(i[o]),t.supports.everything=t.supports.everything&&t.supports[i[o]],"flag"!==i[o]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[i[o]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(r=t.source||{}).concatemoji?d(r.concatemoji):r.wpemoji&&r.twemoji&&(d(r.twemoji),d(r.wpemoji)))}(window,document,window._wpemojiSettings);
		</script><script src="http://www.shino.de/blog/wp-includes/js/wp-emoji-release.min.js?ver=f06a217923df41fe4f69a2e3ed068fb9" type="text/javascript" defer=""></script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel="stylesheet" id="wp-block-library-css" href="http://www.shino.de/blog/wp-includes/css/dist/block-library/style.min.css?ver=f06a217923df41fe4f69a2e3ed068fb9" type="text/css" media="all">
<link rel="stylesheet" id="wp-block-library-theme-css" href="http://www.shino.de/blog/wp-includes/css/dist/block-library/theme.min.css?ver=f06a217923df41fe4f69a2e3ed068fb9" type="text/css" media="all">
<link rel="stylesheet" id="cookie-consent-style-css" href="http://www.shino.de/blog/wp-content/plugins/uk-cookie-consent/assets/css/style.css?ver=f06a217923df41fe4f69a2e3ed068fb9" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-lato-css" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all">
<link rel="stylesheet" id="genericons-css" href="http://www.shino.de/blog/wp-content/themes/twentyfourteen/genericons/genericons.css?ver=3.0.3" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-style-css" href="http://www.shino.de/blog/wp-content/themes/twentyfourteen/style.css?ver=f06a217923df41fe4f69a2e3ed068fb9" type="text/css" media="all">
<link rel="stylesheet" id="twentyfourteen-block-style-css" href="http://www.shino.de/blog/wp-content/themes/twentyfourteen/css/blocks.css?ver=20181230" type="text/css" media="all">
<!--[if lt IE 9]>
<link rel='stylesheet' id='twentyfourteen-ie-css'  href='http://www.shino.de/blog/wp-content/themes/twentyfourteen/css/ie.css?ver=20131205' type='text/css' media='all' />
<![endif]-->
<link rel="stylesheet" id="sociable3-css" href="http://www.shino.de/blog/wp-content/plugins/sociable-30/sociable.css?ver=5.13" type="text/css" media="all">
<script type="text/javascript">
/* <![CDATA[ */
var monsterinsights_frontend = {"js_events_tracking":"true","download_extensions":"doc,pdf,ppt,zip,xls,docx,pptx,xlsx","inbound_paths":"[]","home_url":"http:\/\/www.shino.de","hash_tracking":"false"};
/* ]]> */
</script>
<script type="text/javascript" src="http://www.shino.de/blog/wp-content/plugins/google-analytics-for-wordpress/assets/js/frontend.min.js?ver=7.10.4"></script>
<script type="text/javascript" src="http://www.shino.de/blog/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp"></script>
<script type="text/javascript" src="http://www.shino.de/blog/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1"></script>
<script type="text/javascript" src="http://www.shino.de/blog/wp-content/plugins/jquery-image-lazy-loading/js/jquery.lazyload.min.js?ver=1.7.1"></script>
<link rel="https://api.w.org/" href="http://www.shino.de/wp-json/">
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.shino.de/blog/xmlrpc.php?rsd">
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://www.shino.de/blog/wp-includes/wlwmanifest.xml"> 
<link rel="prev" title="Answers to an interview questionnaire" href="http://www.shino.de/2010/07/19/answers-to-an-interview-questionnaire/">
<link rel="next" title="Quality, Value, and how all of this might help" href="http://www.shino.de/2010/07/31/quality-value-and-how-all-of-this-might-help/">

<link rel="canonical" href="http://www.shino.de/2010/07/22/quality-is-value-to-some-person-at-some-time/">
<link rel="shortlink" href="http://www.shino.de/?p=805">
<link rel="alternate" type="application/json+oembed" href="http://www.shino.de/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F">
<link rel="alternate" type="text/xml+oembed" href="http://www.shino.de/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F&amp;format=xml">
<style type="text/css">
img.lazy { display: none; }
</style>

<!-- Subscribe Sidebar widget -->
<link rel="stylesheet" href="http://www.shino.de/wp-content/plugins/subscribe-sidebar/subscribe_sidebar.css" type="text/css" media="screen">
<style id="ctcc-css" type="text/css" media="screen">
				#catapult-cookie-bar {
					box-sizing: border-box;
					max-height: 0;
					opacity: 0;
					z-index: 99999;
					overflow: hidden;
					color: #ddd;
					position: fixed;
					left: 0;
					top: 0;
					width: 100%;
					background-color: #464646;
				}
				#catapult-cookie-bar a {
					color: #fff;
				}
				#catapult-cookie-bar .x_close span {
					background-color: ;
				}
				button#catapultCookie {
					background:;
					color: ;
					border: 0; padding: 6px 9px; border-radius: 3px;
				}
				#catapult-cookie-bar h3 {
					color: #ddd;
				}
				.has-cookie-bar #catapult-cookie-bar {
					opacity: 1;
					max-height: 999px;
					min-height: 30px;
				}</style><script type="text/javascript">
(function(url){
	if(/(?:Chrome\/26\.0\.1410\.63 Safari\/537\.31|WordfenceTestMonBot)/.test(navigator.userAgent)){ return; }
	var addEvent = function(evt, handler) {
		if (window.addEventListener) {
			document.addEventListener(evt, handler, false);
		} else if (window.attachEvent) {
			document.attachEvent('on' + evt, handler);
		}
	};
	var removeEvent = function(evt, handler) {
		if (window.removeEventListener) {
			document.removeEventListener(evt, handler, false);
		} else if (window.detachEvent) {
			document.detachEvent('on' + evt, handler);
		}
	};
	var evts = 'contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop keydown keypress keyup mousedown mousemove mouseout mouseover mouseup mousewheel scroll'.split(' ');
	var logHuman = function() {
		if (window.wfLogHumanRan) { return; }
		window.wfLogHumanRan = true;
		var wfscr = document.createElement('script');
		wfscr.type = 'text/javascript';
		wfscr.async = true;
		wfscr.src = url + '&r=' + Math.random();
		(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(wfscr);
		for (var i = 0; i < evts.length; i++) {
			removeEvent(evts[i], logHuman);
		}
	};
	for (var i = 0; i < evts.length; i++) {
		addEvent(evts[i], logHuman);
	}
})('//www.shino.de/?wordfence_lh=1&hid=26C6189EE822C11B52E9EFA90E797129');
</script><style data-context="foundation-flickity-css">/*! Flickity v2.0.2
http://flickity.metafizzy.co
---------------------------------------------- */.flickity-enabled{position:relative}.flickity-enabled:focus{outline:0}.flickity-viewport{overflow:hidden;position:relative;height:100%}.flickity-slider{position:absolute;width:100%;height:100%}.flickity-enabled.is-draggable{-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.flickity-enabled.is-draggable .flickity-viewport{cursor:move;cursor:-webkit-grab;cursor:grab}.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down{cursor:-webkit-grabbing;cursor:grabbing}.flickity-prev-next-button{position:absolute;top:50%;width:44px;height:44px;border:none;border-radius:50%;background:#fff;background:hsla(0,0%,100%,.75);cursor:pointer;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.flickity-prev-next-button:hover{background:#fff}.flickity-prev-next-button:focus{outline:0;box-shadow:0 0 0 5px #09f}.flickity-prev-next-button:active{opacity:.6}.flickity-prev-next-button.previous{left:10px}.flickity-prev-next-button.next{right:10px}.flickity-rtl .flickity-prev-next-button.previous{left:auto;right:10px}.flickity-rtl .flickity-prev-next-button.next{right:auto;left:10px}.flickity-prev-next-button:disabled{opacity:.3;cursor:auto}.flickity-prev-next-button svg{position:absolute;left:20%;top:20%;width:60%;height:60%}.flickity-prev-next-button .arrow{fill:#333}.flickity-page-dots{position:absolute;width:100%;bottom:-25px;padding:0;margin:0;list-style:none;text-align:center;line-height:1}.flickity-rtl .flickity-page-dots{direction:rtl}.flickity-page-dots .dot{display:inline-block;width:10px;height:10px;margin:0 8px;background:#333;border-radius:50%;opacity:.25;cursor:pointer}.flickity-page-dots .dot.is-selected{opacity:1}</style><style data-context="foundation-slideout-css">.slideout-menu{position:fixed;left:0;top:0;bottom:0;right:auto;z-index:0;width:256px;overflow-y:auto;-webkit-overflow-scrolling:touch;display:none}.slideout-menu.pushit-right{left:auto;right:0}.slideout-panel{position:relative;z-index:1;will-change:transform}.slideout-open,.slideout-open .slideout-panel,.slideout-open body{overflow:hidden}.slideout-open .slideout-menu{display:block}.pushit{display:none}</style><style>.ios7.web-app-mode.has-fixed header{ background-color: rgba(3,122,221,.88);}</style><!-- ## NXS/OG ## --><!-- ## NXSOGTAGS ## --><!-- ## NXS/OG ## -->

<script type="text/javascript" async="" src="//www.shino.de/?wordfence_lh=1&amp;hid=26C6189EE822C11B52E9EFA90E797129&amp;r=0.04397259854915958"></script></head>

<body class="post-template-default single single-post postid-805 single-format-standard wp-embed-responsive masthead-fixed full-width singular">
<div id="page" class="hfeed site">
	
	<header id="masthead" class="site-header" role="banner">
		<div class="header-main">
			<h1 class="site-title"><a href="http://www.shino.de/" rel="home">Markus Gärtner</a></h1>

			<div class="search-toggle">
				<a href="#search-container" class="screen-reader-text" aria-expanded="false" aria-controls="search-container">Search</a>
			</div>

			<nav id="primary-navigation" class="site-navigation primary-navigation" role="navigation">
				<button class="menu-toggle">Primary Menu</button>
				<a class="screen-reader-text skip-link" href="#content">Skip to content</a>
				<div id="primary-menu" class="nav-menu"><ul>
<li class="page_item page-item-3333"><a href="http://www.shino.de/cookie-policy/">Cookie Policy</a></li>
<li class="page_item page-item-896 current_page_parent"><a href="http://www.shino.de/blog/">Blog</a></li>
<li class="page_item page-item-865 page_item_has_children"><a href="http://www.shino.de/">Markus Gärtner</a>
<ul class="children">
	<li class="page_item page-item-867"><a href="http://www.shino.de/main/curriculum-vitae/">Curriculum vitae</a></li>
	<li class="page_item page-item-863"><a href="http://www.shino.de/main/publications/">Publications</a></li>
	<li class="page_item page-item-859"><a href="http://www.shino.de/main/projects/">Projects</a></li>
	<li class="page_item page-item-875"><a href="http://www.shino.de/main/links/">Links</a></li>
	<li class="page_item page-item-751"><a href="http://www.shino.de/main/about-me/">About me</a></li>
</ul>
</li>
<li class="page_item page-item-1181"><a href="http://www.shino.de/imprint/">Imprint</a></li>
</ul></div>
			</nav>
		</div>

		<div id="search-container" class="search-box-wrapper hide">
			<div class="search-box">
				<form role="search" method="get" class="search-form" action="http://www.shino.de/">
				<label>
					<span class="screen-reader-text">Search for:</span>
					<input type="search" class="search-field" placeholder="Search …" value="" name="s">
				</label>
				<input type="submit" class="search-submit" value="Search">
			</form>			</div>
		</div>
	</header><!-- #masthead -->

	<div id="main" class="site-main">

	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
			
<article id="post-805" class="post-805 post type-post status-publish format-standard hentry category-agile-testing category-leadership category-testing category-weekend-testing">
	
	<header class="entry-header">
				<div class="entry-meta">
			<span class="cat-links"><a href="http://www.shino.de/category/testing/agile-testing/" rel="category tag">Agile Testing</a>, <a href="http://www.shino.de/category/leadership/" rel="category tag">Leadership</a>, <a href="http://www.shino.de/category/testing/" rel="category tag">Testing</a>, <a href="http://www.shino.de/category/testing/weekend-testing/" rel="category tag">Weekend Testing</a></span>
		</div>
			<h1 class="entry-title">Quality is value to some person at some time</h1>
		<div class="entry-meta">
			<span class="entry-date"><a href="http://www.shino.de/2010/07/22/quality-is-value-to-some-person-at-some-time/" rel="bookmark"><time class="entry-date" datetime="2010-07-22T10:28:37+02:00">22. July 2010</time></a></span> <span class="byline"><span class="author vcard"><a class="url fn n" href="http://www.shino.de/author/shin0/" rel="author">Markus Gärtner</a></span></span>			<span class="comments-link"><a href="http://www.shino.de/2010/07/22/quality-is-value-to-some-person-at-some-time/#comments">5 Comments</a></span>
						</div><!-- .entry-meta -->
	</header><!-- .entry-header -->

		<div class="entry-content">
		<p>Recently a discussion on the famous quote from <a href="http://www.geraldmweinberg.com">Jerry Weinberg</a> on</p>
<blockquote><p>
Quality is value to some person.
</p></blockquote>
<p>arose. I already mentioned it <a href="http://www.shino.de/2010/07/13/quality-is-ambiguous/">some time earlier</a> restating that quality is ambiguous as different people understand different things when they hear the word quality.</p>
<p><span id="more-805"></span></p>
<p>In fact, the ambiguity of the word quality has been mentioned by Jerry Weinberg at an audience, where he asked participants to raise their hands, if they like quality, they’re neutral for quality, or whether they dislike quality. The whole audience raised their hands. As Jerry started to doubt the statistical representation of the audience, he asked a control question: “What about apple pie?” The answers to this questions showed the statistical distribution of the audience. Thereby Jerry concluded that the word quality means different things to different people. So, the word quality is at least ambiguous in the sense that everyone may have a different understanding about it.</p>
<p><a href="http://www.developsense.com/blog/">Michael Bolton</a> introduced me to an abstraction of the popular Weinberg statement:</p>
<blockquote><p>X is X to some person</p></blockquote>
<p>that is the Relative Rule. The Relative Rule holds for quality (“quality is quality to some person”) as well as for several other things, like complexity (“complexity is complexity to some person” especially if there is a lack of simplifying mental model), beauty (“beauty is beauty to some person” or more popular “beauty is in the eye of the beholder”), difficulty (“difficulty is difficulty to some person” especially if you lack the skills. Try explaining computer to an ancient knight.), and even apple pie (“apple pie is apple pie to some person” as you might find out at your next birthday party serving apple pie).</p>
<p>But as Michael Bolton recently inspired in an Weekend Testing discussion, there is also a time dimension to it. Here is the chat excerpt holding the relevant parts (published with permission from Michael Bolton):</p>
<blockquote><p>
<b>Michael Bolton:</b>“Relevance” is subject to The Relative Rule.</p>
<p><b>Anne-Marie Charrett</b> Michael, can you share what you mean by the Relative Rule?</p>
<p><b>Michael Bolton</b> I coined The Relative Rule, inspired by Jerry Weinberg’s definition of quality as “value to some person”.  The Relative Rule goes like this: For any abstract X, X is X <em>to some person</em>.</p>
<p><b>Markus Gärtner</b> Relevance is relevance <em>to some person</em>, just like quality is quality <em>to some person</em> and hot weather is hot weather <em>to some person</em>.</p>
<p><b>Michael Bolton</b> What this means is that “irrelevant”, for example, means “irrelevant to some person, for some purpose, at this time.”  Which leaves open the idea that it might be relevant to some other person, for<br>
some other purpose, or even to you at some other time.</p>
<p><b>Markus Gärtner</b> You just put in the time dimension there.  Could be quality be to quality <em>to some person at some time</em>?</p>
<p><b>Michael Bolton</b> Absolutely.  People change. In many ways you’re the same person that you were ten years ago, but it many ways you’re not. You’re the same person you were yesterday, too, but in some ways you’re not (you’ve got a day’s more life experience than that person.  So when I say “to some person”, I mean a certain person at a certain point in time.
</p></blockquote>
<p>This opens the time dimension to the Relative Rule. Since X is X to some person, and that person’s perception may change over time, especially if market conditions or global economy changes, X is also X to some person at some time. This means that our perception of quality may change over time based upon releases of competitors (compare OpenOffice before MS Office 2007 was released with the time after that release; how do you perceive it? did it change?). This also holds when we learn new tools and techniques. Reflecting back on a recent project I noticed that pairwise testing could have helped us reduce the amount of tests to run. May perception about that initially changed when <a href="http://www.hexawise.com">Justin Hunter</a> gave me a live online presentation and we drifted into some discussion around it, and it especially changed while reading a book from Lee Copeland most recently. So, my perception about the problem one year ago compared to one month compared to today greatly varies based on the knowledge I acquired in the meantime.</p>
<p>Interestingly the Time Trigger (as I started to call it) also holds for other applications of the Relative Rule. Complexity is complexity to some person at some time may change with new skills we acquire. Beauty may change over time, just as difficulty, and finally our perception of apple pie may change when we taste a particular piece of an awful or awesome pie.</p>
<p>Even more interestingly, the Time Trigger makes the human factor in software development even more transparent. Since the code I’m looking at today may be pretty awkward to deal with in maintenance tomorrow or even half a year in the future, I may want to prepare myself for this. This is the essence of <a href="http://alistair.cockburn.us/">Alistair Cockburn</a>‘s <a href="http://alistair.cockburn.us/Cooperative+game+manifesto+for+software+development">Cooperative Game</a>. We leave behind markers during our development efforts so that we can remind them in the future, that is at a different time. For quality we may leave markers so that we remember what we perceived to be high quality at this time. We can then revisit these markers and either abandon them or appreciate them. Since software development is a human activity, we need to remember the human aspects of our very nature. Since our understanding of a situation is heavily influence by the time we are faced with it, it’s vital to understand the Time Trigger in company of the Relative Rule.</p>
<p>Finally, Jerry Weinberg opens to think about the quality as being value to some person in terms of questions. Whenever someone says something about quality, we should ask who is the person behind the quality statement, and what does the individual value. We expand the Time Trigger to these questions, and conclude that we should ask ourselves who the person behind the quality statement is, what does the person value, and at what time? If the project shall deliver a quality product in one year, that perception may be different than a quality product for ten years ago was.</p>
<p>Putting all together Political/Emotional Dimension of Quality, Bolton’s Relative Rule, and the Time Trigger (which I would like to attribute to Bolton as well) explain the impossibility of testing quality into a product. Since quality for a person today may be vastly different to quality for the same person in a year, we are unlikely to build quality into a product and leave it there. Quality needs to be firstly understood (who is the person behind the quality statement?), incorporated into the product, and maintained there. Putting it a different way: Software is under development until it is abandoned.</p>
<div class="sociable"><div><span class="sociable-tagline"></span></div><ul><li><a rel="nofollow" target="_blank" href="http://www.printfriendly.com/print/new?url=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F"><img src="http://www.shino.de/blog/wp-content/plugins/sociable-30/images/default/16/printfriendly.png" class="sociable-img sociable-hovers" title="Print" alt="Print"></a></li><li><a rel="nofollow" target="_blank" href="http://digg.com/submit?phase=2&amp;url=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F&amp;title=Quality%20is%20value%20to%20some%20person%20at%20some%20time&amp;bodytext=Recently%20a%20discussion%20on%20the%20famous%20quote%20from%20Jerry%20Weinberg%20on%0D%0A%0D%0AQuality%20is%20value%20to%20some%20person.%0D%0A%0D%0Aarose.%20I%20already%20mentioned%20it%20some%20time%20earlier%20restating%20that%20quality%20is%20ambiguous%20as%20different%20people%20understand%20different%20things%20when%20they%20hear"><img src="http://www.shino.de/blog/wp-content/plugins/sociable-30/images/default/16/digg.png" class="sociable-img sociable-hovers" title="Digg" alt="Digg"></a></li><li><a rel="nofollow" target="_blank" href="http://www.stumbleupon.com/submit?url=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F&amp;title=Quality%20is%20value%20to%20some%20person%20at%20some%20time"><img src="http://www.shino.de/blog/wp-content/plugins/sociable-30/images/default/16/stumbleupon.png" class="sociable-img sociable-hovers" title="StumbleUpon" alt="StumbleUpon"></a></li><li><a rel="nofollow" target="_blank" href="http://delicious.com/post?url=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F&amp;title=Quality%20is%20value%20to%20some%20person%20at%20some%20time&amp;notes=Recently%20a%20discussion%20on%20the%20famous%20quote%20from%20Jerry%20Weinberg%20on%0D%0A%0D%0AQuality%20is%20value%20to%20some%20person.%0D%0A%0D%0Aarose.%20I%20already%20mentioned%20it%20some%20time%20earlier%20restating%20that%20quality%20is%20ambiguous%20as%20different%20people%20understand%20different%20things%20when%20they%20hear"><img src="http://www.shino.de/blog/wp-content/plugins/sociable-30/images/default/16/delicious.png" class="sociable-img sociable-hovers" title="del.icio.us" alt="del.icio.us"></a></li><li><a rel="nofollow" target="_blank" href="http://www.facebook.com/share.php?u=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F&amp;t=Quality%20is%20value%20to%20some%20person%20at%20some%20time"><img src="http://www.shino.de/blog/wp-content/plugins/sociable-30/images/default/16/facebook.png" class="sociable-img sociable-hovers" title="Facebook" alt="Facebook"></a></li><li><a rel="nofollow" target="_blank" href="http://twitter.com/home?status=Quality%20is%20value%20to%20some%20person%20at%20some%20time%20-%20http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F"><img src="http://www.shino.de/blog/wp-content/plugins/sociable-30/images/default/16/twitter.png" class="sociable-img sociable-hovers" title="Twitter" alt="Twitter"></a></li><li><a rel="nofollow" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F&amp;title=Quality%20is%20value%20to%20some%20person%20at%20some%20time&amp;source=Markus+G%C3%A4rtner+Software+Testing%2C+Craftsmanship%2C+Leadership+and+beyond&amp;summary=Recently%20a%20discussion%20on%20the%20famous%20quote%20from%20Jerry%20Weinberg%20on%0D%0A%0D%0AQuality%20is%20value%20to%20some%20person.%0D%0A%0D%0Aarose.%20I%20already%20mentioned%20it%20some%20time%20earlier%20restating%20that%20quality%20is%20ambiguous%20as%20different%20people%20understand%20different%20things%20when%20they%20hear"><img src="http://www.shino.de/blog/wp-content/plugins/sociable-30/images/default/16/linkedin.png" class="sociable-img sociable-hovers" title="LinkedIn" alt="LinkedIn"></a></li><li><a rel="nofollow" target="_blank" href="http://www.google.com/bookmarks/mark?op=edit&amp;bkmk=http%3A%2F%2Fwww.shino.de%2F2010%2F07%2F22%2Fquality-is-value-to-some-person-at-some-time%2F&amp;title=Quality%20is%20value%20to%20some%20person%20at%20some%20time&amp;annotation=Recently%20a%20discussion%20on%20the%20famous%20quote%20from%20Jerry%20Weinberg%20on%0D%0A%0D%0AQuality%20is%20value%20to%20some%20person.%0D%0A%0D%0Aarose.%20I%20already%20mentioned%20it%20some%20time%20earlier%20restating%20that%20quality%20is%20ambiguous%20as%20different%20people%20understand%20different%20things%20when%20they%20hear"><img src="http://www.shino.de/blog/wp-content/plugins/sociable-30/images/default/16/googlebookmark.png" class="sociable-img sociable-hovers" title="Google Bookmarks" alt="Google Bookmarks"></a></li></ul></div>	</div><!-- .entry-content -->
	
	</article><!-- #post-805 -->
		<nav class="navigation post-navigation" role="navigation">
		<h1 class="screen-reader-text">Post navigation</h1>
		<div class="nav-links">
			<a href="http://www.shino.de/2010/07/19/answers-to-an-interview-questionnaire/" rel="prev"><span class="meta-nav">Previous Post</span>Answers to an interview questionnaire</a><a href="http://www.shino.de/2010/07/31/quality-value-and-how-all-of-this-might-help/" rel="next"><span class="meta-nav">Next Post</span>Quality, Value, and how all of this might help</a>			</div><!-- .nav-links -->
		</nav><!-- .navigation -->
		
<div id="comments" class="comments-area">

	
	<h2 class="comments-title">
		5 thoughts on “Quality is value to some person at some time”	</h2>

		
	<ol class="comment-list">
				<li id="comment-627" class="comment even thread-even depth-1">
			<article id="div-comment-627" class="comment-body">
				<footer class="comment-meta">
					<div class="comment-author vcard">
						<img alt="" src="http://0.gravatar.com/avatar/0d857b3bbca6ee9f63a4c832fedc264d?s=34&amp;d=mm&amp;r=g" srcset="http://0.gravatar.com/avatar/0d857b3bbca6ee9f63a4c832fedc264d?s=68&amp;d=mm&amp;r=g 2x" class="avatar avatar-34 photo" width="34" height="34">						<b class="fn"><a href="http://pro-testing.arabuusimiehet.com/" rel="external nofollow ugc" class="url">Petteri Lyytinen</a></b> <span class="says">says:</span>					</div><!-- .comment-author -->

					<div class="comment-metadata">
						<a href="http://www.shino.de/2010/07/22/quality-is-value-to-some-person-at-some-time/#comment-627">
							<time datetime="2010-07-26T14:57:53+02:00">
								26. July 2010 at 14:57							</time>
						</a>
											</div><!-- .comment-metadata -->

									</footer><!-- .comment-meta -->

				<div class="comment-content">
					<p>Interesting blog post and a good read. I’m a big fan of these contemplative posts. :)</p>
<p>I once wrote an essay titled “What Is Lying?” in school. In the essay, I pointed out to the reader how truth can be time-related (This sentence is the last sentence in this reply – true at the time of writing, but when you’re reading this reply you would call me a liar). Quality is about as good a word as Truth here – sounds nice, but doesn’t really mean anything. Or, rather, it CAN mean ANYTHING.</p>
<p>An application that is generally considered high-quality at the time of its release will most likely be considered lacking in many ways a few years later. A top-of-the-line computer with absolutely amazing computing powers is likely to be considered a useless piece of crap in 10 years with its computing powers already surpassed by contemporary wrist watches.</p>
<p>The subjective and relative nature of testing (and, especially, anything with the word “quality” in it) seems to be one of the hardest things for a lot of people (in the IT world) to grasp. Personally, in many cases, I see this as a sort of a character flaw since, based on a number of discussions with people, the feeling that I get is that this is often caused by simple stubbornness (read: the person has formed an opinion and is not willing to change it even when faced with arguments the person can not deny), in addition to simple ignorance on the subject.</p>
				</div><!-- .comment-content -->

				<div class="reply"><a rel="nofollow" class="comment-reply-link" href="http://www.shino.de/2010/07/22/quality-is-value-to-some-person-at-some-time/?replytocom=627#respond" data-commentid="627" data-postid="805" data-belowelement="div-comment-627" data-respondelement="respond" aria-label="Reply to Petteri Lyytinen">Reply</a></div>			</article><!-- .comment-body -->
		</li><!-- #comment-## -->
		<li id="comment-638" class="pingback odd alt thread-odd thread-alt depth-1">
			<div class="comment-body">
				Pingback: <a href="http://www.testalways.com/2010/07/28/another-post-about-what-is-quality/" rel="external nofollow ugc" class="url">Eusebiu Blindu's Blog » Blog Archive » Another post about what is quality</a> 			</div>
		</li><!-- #comment-## -->
		<li id="comment-5841" class="pingback even thread-even depth-1">
			<div class="comment-body">
				Pingback: <a href="http://www.shino.de/2011/08/30/an-experiment-on-quality-and-time/" rel="external nofollow ugc" class="url">An experiment on Quality and Time | Markus Gärtner</a> 			</div>
		</li><!-- #comment-## -->
		<li id="comment-6049" class="pingback odd alt thread-odd thread-alt depth-1">
			<div class="comment-body">
				Pingback: <a href="http://www.shino.de/2010/07/31/quality-value-and-how-all-of-this-might-help/" rel="external nofollow ugc" class="url">Quality, Value, and how all of this might help | Markus Gärtner</a> 			</div>
		</li><!-- #comment-## -->
		<li id="comment-6892" class="pingback even thread-even depth-1">
			<div class="comment-body">
				Pingback: <a href="http://www.huibschoots.nl/wordpress/?p=1173" rel="external nofollow ugc" class="url">What testing can learn from social science – Part 1 | Magnifiant: exploring software testing</a> 			</div>
		</li><!-- #comment-## -->
	</ol><!-- .comment-list -->

		
		
	
		<div id="respond" class="comment-respond">
		<h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/2010/07/22/quality-is-value-to-some-person-at-some-time/#respond" style="display:none;">Cancel reply</a></small></h3><form action="http://www.shino.de/blog/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate=""><p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span></p><p class="comment-form-comment"><label for="comment">Comment</label> <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea></p><p class="comment-form-author"><label for="author">Name <span class="required">*</span></label> <input id="author" name="author" type="text" value="" size="30" maxlength="245" required="required"></p>
<p class="comment-form-email"><label for="email">Email <span class="required">*</span></label> <input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" required="required"></p>
<p class="comment-form-url"><label for="url">Website</label> <input id="url" name="url" type="url" value="" size="30" maxlength="200"></p>
<p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Post Comment"> <input type="hidden" name="comment_post_ID" value="805" id="comment_post_ID">
<input type="hidden" name="comment_parent" id="comment_parent" value="0">
</p><p style="display: none;"><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="dbed243ecf"></p><p style="display: none;"></p><input type="hidden" id="ak_js" name="ak_js" value="1583469572879"></form>	</div><!-- #respond -->
	
</div><!-- #comments -->
		</div><!-- #content -->
	</div><!-- #primary -->

<div id="secondary">
		<h2 class="site-description">Software Testing, Craftsmanship, Leadership and beyond</h2>
	
	
		<div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
				<aside id="recent-posts-2" class="widget widget_recent_entries">		<h1 class="widget-title">Recent Posts</h1>		<ul>
											<li>
					<a href="http://www.shino.de/2018/06/20/what-would-you-do/">What would you do?</a>
									</li>
											<li>
					<a href="http://www.shino.de/2016/08/01/informed-consent-workshop-on-less-with-craig-larman/">Informed-consent workshop on LeSS with Craig Larman</a>
									</li>
											<li>
					<a href="http://www.shino.de/2016/07/02/data-driven-tests-in-junit5-0-0-snapshot/">Data-driven tests in Junit5.0.0-SNAPSHOT</a>
									</li>
											<li>
					<a href="http://www.shino.de/2016/06/16/state-of-testing-2016-my-view/">State of Testing 2016 – My view</a>
									</li>
											<li>
					<a href="http://www.shino.de/2016/02/10/testing-inside-one-sprints-time/">Testing inside one sprint’s time</a>
									</li>
					</ul>
		</aside><!-- Start Subscribe Sidebar widget -->
<aside id="subscribe" class="widget widget_subscribe_sidebar"><h1 class="widget-title">Subscribe</h1><div id="subscribe_sidebar">	<ul id="subscribe_sidebar_list">
		<li><a href="http://www.shino.de/feed/" title="RSS Feed"><img src="http://www.shino.de/blog/wp-content/plugins/subscribe-sidebar/dropshadow/feed.png" alt="RSS Feed"></a><a href="http://www.shino.de/feed/" title="RSS Feed">RSS Feed</a></li>
		<li><a href="http://www.shino.de/feed/atom/" title="Atom Feed"><img src="http://www.shino.de/blog/wp-content/plugins/subscribe-sidebar/dropshadow/feed.png" alt="Atom Feed"></a><a href="http://www.shino.de/feed/atom/" title="Atom Feed">Atom Feed</a></li>
		<li><a href="http://fusion.google.com/add?feedurl=http%3A%2F%2Fwww.shino.de%2Ffeed%2F" title="Add to Google Reader/Homepage"><img src="http://www.shino.de/blog/wp-content/plugins/subscribe-sidebar/dropshadow/google.png" alt="Add to Google Reader/Homepage"></a><a href="http://fusion.google.com/add?feedurl=http%3A%2F%2Fwww.shino.de%2Ffeed%2F" title="Add to Google Reader/Homepage">Add to Google</a></li>
		<li><a href="http://twitter.com/mgaertne" title="Twitter"><img src="http://www.shino.de/blog/wp-content/plugins/subscribe-sidebar/dropshadow/twitter.png" alt="Twitter"></a><a href="http://twitter.com/mgaertne" title="Twitter">Twitter</a></li>
		<li><a href="http://www.google.com/profiles/105294925721985500590" title="Google Profile"><img src="http://www.shino.de/blog/wp-content/plugins/subscribe-sidebar/dropshadow/google_profile.png" alt="Google Profile"></a><a href="http://www.google.com/profiles/105294925721985500590" title="Google Profile">Google Profile</a></li>
		<li><a href="http://www.facebook.com/mgaertne" title="Facebook Fan Page"><img src="http://www.shino.de/blog/wp-content/plugins/subscribe-sidebar/dropshadow/facebook.png" alt="Facebook Fan Page"></a><a href="http://www.facebook.com/mgaertne" title="Facebook Fan Page">Facebook</a></li>
	</ul>
</div></aside>	<!-- End Subscribe Sidebar widget -->
<aside id="text-2" class="widget widget_text"><h1 class="widget-title">Copyright</h1>			<div class="textwidget"><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/de/deed.en"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-nd/3.0/de/88x31.png"></a><br><span xmlns:dc="http://purl.org/dc/elements/1.1/" href="http://purl.org/dc/dcmitype/Text" property="dc:title" rel="dc:type">Markus Gärtner's blog</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.shino.de" property="cc:attributionName" rel="cc:attributionURL">Markus Gärtner</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/de/deed.en">Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 Germany License</a>.<br>Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="mailto:mgaertne@googlemail.com" rel="cc:morePermissions">mgaertne@googlemail.com</a>.</div>
		</aside><aside id="text-4" class="widget widget_text"><h1 class="widget-title">Community Links</h1>			<div class="textwidget"><a href="http://www.mgaertne.de">German Blog</a><br>
<a href="http://www.testingdojo.org">Testing Dojo.org</a><br>
<a href="http://www.testing-challenges.org">Testing Challenges.org</a><br>
<a href="http://gate-workshop.de">GATE Workshop</a><br>
<a href="http://www.softwaretestingclub.com/group/germany">German Testers Group on Software Testing Club</a><br>
<a href="http://www.stughh.de">Software Testing User Group Hamburg, Germany</a><br>
</div>
		</aside><aside id="calendar-2" class="widget widget_calendar"><div id="calendar_wrap" class="calendar_wrap"><table id="wp-calendar">
	<caption>July 2010</caption>
	<thead>
	<tr>
		<th scope="col" title="Monday">M</th>
		<th scope="col" title="Tuesday">T</th>
		<th scope="col" title="Wednesday">W</th>
		<th scope="col" title="Thursday">T</th>
		<th scope="col" title="Friday">F</th>
		<th scope="col" title="Saturday">S</th>
		<th scope="col" title="Sunday">S</th>
	</tr>
	</thead>

	<tfoot>
	<tr>
		<td colspan="3" id="prev"><a href="http://www.shino.de/2010/06/">« Jun</a></td>
		<td class="pad">&nbsp;</td>
		<td colspan="3" id="next"><a href="http://www.shino.de/2010/08/">Aug »</a></td>
	</tr>
	</tfoot>

	<tbody>
	<tr>
		<td colspan="3" class="pad">&nbsp;</td><td><a href="http://www.shino.de/2010/07/01/" aria-label="Posts published on July 1, 2010">1</a></td><td>2</td><td>3</td><td>4</td>
	</tr>
	<tr>
		<td><a href="http://www.shino.de/2010/07/05/" aria-label="Posts published on July 5, 2010">5</a></td><td><a href="http://www.shino.de/2010/07/06/" aria-label="Posts published on July 6, 2010">6</a></td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
	</tr>
	<tr>
		<td>12</td><td><a href="http://www.shino.de/2010/07/13/" aria-label="Posts published on July 13, 2010">13</a></td><td>14</td><td>15</td><td><a href="http://www.shino.de/2010/07/16/" aria-label="Posts published on July 16, 2010">16</a></td><td>17</td><td><a href="http://www.shino.de/2010/07/18/" aria-label="Posts published on July 18, 2010">18</a></td>
	</tr>
	<tr>
		<td><a href="http://www.shino.de/2010/07/19/" aria-label="Posts published on July 19, 2010">19</a></td><td>20</td><td>21</td><td><a href="http://www.shino.de/2010/07/22/" aria-label="Posts published on July 22, 2010">22</a></td><td>23</td><td>24</td><td>25</td>
	</tr>
	<tr>
		<td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td><a href="http://www.shino.de/2010/07/31/" aria-label="Posts published on July 31, 2010">31</a></td>
		<td class="pad" colspan="1">&nbsp;</td>
	</tr>
	</tbody>
	</table></div></aside><aside id="archives-2" class="widget widget_archive"><h1 class="widget-title">Archives</h1>		<ul>
				<li><a href="http://www.shino.de/2018/06/">June 2018</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2016/08/">August 2016</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2016/07/">July 2016</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2016/06/">June 2016</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2016/02/">February 2016</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2016/01/">January 2016</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2015/08/">August 2015</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2015/07/">July 2015</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2015/06/">June 2015</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2015/05/">May 2015</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2014/11/">November 2014</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2014/08/">August 2014</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2014/05/">May 2014</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2014/04/">April 2014</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2014/03/">March 2014</a>&nbsp;(18)</li>
	<li><a href="http://www.shino.de/2014/02/">February 2014</a>&nbsp;(20)</li>
	<li><a href="http://www.shino.de/2014/01/">January 2014</a>&nbsp;(20)</li>
	<li><a href="http://www.shino.de/2013/11/">November 2013</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2013/10/">October 2013</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2013/09/">September 2013</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2013/08/">August 2013</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2013/07/">July 2013</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2013/05/">May 2013</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2013/04/">April 2013</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2013/03/">March 2013</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2013/02/">February 2013</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2013/01/">January 2013</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2012/12/">December 2012</a>&nbsp;(8)</li>
	<li><a href="http://www.shino.de/2012/11/">November 2012</a>&nbsp;(6)</li>
	<li><a href="http://www.shino.de/2012/09/">September 2012</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2012/08/">August 2012</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2012/07/">July 2012</a>&nbsp;(13)</li>
	<li><a href="http://www.shino.de/2012/06/">June 2012</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2012/05/">May 2012</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2012/04/">April 2012</a>&nbsp;(5)</li>
	<li><a href="http://www.shino.de/2012/03/">March 2012</a>&nbsp;(12)</li>
	<li><a href="http://www.shino.de/2012/02/">February 2012</a>&nbsp;(5)</li>
	<li><a href="http://www.shino.de/2012/01/">January 2012</a>&nbsp;(6)</li>
	<li><a href="http://www.shino.de/2011/12/">December 2011</a>&nbsp;(10)</li>
	<li><a href="http://www.shino.de/2011/11/">November 2011</a>&nbsp;(4)</li>
	<li><a href="http://www.shino.de/2011/10/">October 2011</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2011/09/">September 2011</a>&nbsp;(6)</li>
	<li><a href="http://www.shino.de/2011/08/">August 2011</a>&nbsp;(13)</li>
	<li><a href="http://www.shino.de/2011/07/">July 2011</a>&nbsp;(8)</li>
	<li><a href="http://www.shino.de/2011/06/">June 2011</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2011/05/">May 2011</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2011/04/">April 2011</a>&nbsp;(4)</li>
	<li><a href="http://www.shino.de/2011/03/">March 2011</a>&nbsp;(6)</li>
	<li><a href="http://www.shino.de/2011/02/">February 2011</a>&nbsp;(7)</li>
	<li><a href="http://www.shino.de/2011/01/">January 2011</a>&nbsp;(6)</li>
	<li><a href="http://www.shino.de/2010/12/">December 2010</a>&nbsp;(17)</li>
	<li><a href="http://www.shino.de/2010/11/">November 2010</a>&nbsp;(11)</li>
	<li><a href="http://www.shino.de/2010/10/">October 2010</a>&nbsp;(20)</li>
	<li><a href="http://www.shino.de/2010/09/">September 2010</a>&nbsp;(7)</li>
	<li><a href="http://www.shino.de/2010/08/">August 2010</a>&nbsp;(6)</li>
	<li><a href="http://www.shino.de/2010/07/">July 2010</a>&nbsp;(9)</li>
	<li><a href="http://www.shino.de/2010/06/">June 2010</a>&nbsp;(12)</li>
	<li><a href="http://www.shino.de/2010/05/">May 2010</a>&nbsp;(13)</li>
	<li><a href="http://www.shino.de/2010/04/">April 2010</a>&nbsp;(9)</li>
	<li><a href="http://www.shino.de/2010/03/">March 2010</a>&nbsp;(12)</li>
	<li><a href="http://www.shino.de/2010/02/">February 2010</a>&nbsp;(8)</li>
	<li><a href="http://www.shino.de/2010/01/">January 2010</a>&nbsp;(9)</li>
	<li><a href="http://www.shino.de/2009/12/">December 2009</a>&nbsp;(15)</li>
	<li><a href="http://www.shino.de/2009/11/">November 2009</a>&nbsp;(7)</li>
	<li><a href="http://www.shino.de/2009/10/">October 2009</a>&nbsp;(15)</li>
	<li><a href="http://www.shino.de/2009/09/">September 2009</a>&nbsp;(5)</li>
	<li><a href="http://www.shino.de/2009/08/">August 2009</a>&nbsp;(11)</li>
	<li><a href="http://www.shino.de/2009/07/">July 2009</a>&nbsp;(11)</li>
	<li><a href="http://www.shino.de/2009/06/">June 2009</a>&nbsp;(7)</li>
	<li><a href="http://www.shino.de/2009/05/">May 2009</a>&nbsp;(7)</li>
	<li><a href="http://www.shino.de/2009/04/">April 2009</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2009/03/">March 2009</a>&nbsp;(9)</li>
	<li><a href="http://www.shino.de/2009/02/">February 2009</a>&nbsp;(7)</li>
	<li><a href="http://www.shino.de/2009/01/">January 2009</a>&nbsp;(4)</li>
	<li><a href="http://www.shino.de/2008/11/">November 2008</a>&nbsp;(3)</li>
	<li><a href="http://www.shino.de/2008/10/">October 2008</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2008/09/">September 2008</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2008/08/">August 2008</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2008/07/">July 2008</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2008/06/">June 2008</a>&nbsp;(1)</li>
	<li><a href="http://www.shino.de/2008/05/">May 2008</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2008/04/">April 2008</a>&nbsp;(2)</li>
	<li><a href="http://www.shino.de/2008/03/">March 2008</a>&nbsp;(7)</li>
		</ul>
			</aside>	</div><!-- #primary-sidebar -->
	</div><!-- #secondary -->

		</div><!-- #main -->

		<footer id="colophon" class="site-footer" role="contentinfo">

			
			<div class="site-info">
												<a href="https://wordpress.org/" class="imprint">
					Proudly powered by WordPress				</a>
			</div><!-- .site-info -->
		</footer><!-- #colophon -->
	</div><!-- #page -->

	<!-- Powered by WPtouch: 4.3.37 --><script type="text/javascript">
/* <![CDATA[ */
var ctcc_vars = {"expiry":"30","method":"1","version":"1"};
/* ]]> */
</script>
<script type="text/javascript" src="http://www.shino.de/blog/wp-content/plugins/uk-cookie-consent/assets/js/uk-cookie-consent-js.js?ver=2.3.0"></script>
<script type="text/javascript" src="http://www.shino.de/blog/wp-includes/js/comment-reply.min.js?ver=f06a217923df41fe4f69a2e3ed068fb9"></script>
<script type="text/javascript" src="http://www.shino.de/blog/wp-content/themes/twentyfourteen/js/functions.js?ver=20150315"></script>
<script type="text/javascript" src="http://www.shino.de/blog/wp-includes/js/wp-embed.min.js?ver=f06a217923df41fe4f69a2e3ed068fb9"></script>
<script async="async" type="text/javascript" src="http://www.shino.de/blog/wp-content/plugins/akismet/_inc/form.js?ver=4.1.3"></script>
			
				<script type="text/javascript">
					jQuery(document).ready(function($){
												if(!catapultReadCookie("catAccCookies")){ // If the cookie has not been set then show the bar
							$("html").addClass("has-cookie-bar");
							$("html").addClass("cookie-bar-top-bar");
							$("html").addClass("cookie-bar-bar");
															// Wait for the animation on the html to end before recalculating the required top margin
								$("html").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
									// code to execute after transition ends
									var barHeight = $('#catapult-cookie-bar').outerHeight();
									$("html").css("margin-top",barHeight);
									$("body.admin-bar").css("margin-top",barHeight-32); // Push the body down if the admin bar is active
								});
													}
																			ctccFirstPage();
											});
				</script>
			
			<div id="catapult-cookie-bar" class=""><div class="ctcc-inner "><span class="ctcc-left-side">This site uses cookies:  <a class="ctcc-more-info-link" tabindex="0" target="_blank" href="http://www.shino.de/cookie-policy/">Find out more.</a></span><span class="ctcc-right-side"><button id="catapultCookie" tabindex="0" onclick="catapultAcceptCookies();">Okay, thanks</button></span></div><!-- custom wrapper class --></div><!-- #catapult-cookie-bar -->





</body>`

const analyticsScript = `<script src="https://www.google-analytics.com/ga.js"></script><script>window._gaq=[['_setAccount','UA-6065217-50'],['_trackPageview']];(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='https://www.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s)}(document,'script'))</script>`

module.exports = {
  page1,
  page2,
  analyticsScript
}
