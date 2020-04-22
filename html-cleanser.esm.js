const disallowedTags = [
  'script',
  'img',
  'a',
  'object',
  'iframe',
  'embed',
  'input',
  'textarea',
  'button',
  'link',
  'style',
  'base'
]
const comments = /<!--[\s\S]*?-->/gi
const xssLocator = /javascript:\/\*-->/gi
const ecmaSet = /Set\.constructor`/gi
const xml = /<\?xml/gi
const cssUrlProperty = /url\s?\(.*?\)/gi
const documentWrite = /document\.write/gi

const datasrcAttribute = /(datasrc="?(.*?)"?)>/gi
const useAttribute = /(use="?(.*?)"?)>/gi
const srcAttribute = /(src="?(.*?)"?)>/gi

const tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi

const removeRules = new RegExp(
  `(${[comments, xssLocator, ecmaSet, xml, cssUrlProperty, documentWrite]
    .map(({ source }) => source)
    .join('|')})`,
  'gi'
)

// Edited from https://github.com/MyBibHQ/mybib-ui/blob/0d11a5af7f620fc3a663a79b4b57f9c59c6157e3/src/components/RichTextarea.vue#L32-L55

/**
 * @param {string} input - text to sanitize
 * @param {string} [allowed] - tags to allow
 */
export const cleanHTML = (input, allowed = '<i><em><span><p>') => {
  if (!input) return ''
  const hasUnsafeTag = disallowedTags.some(tag => allowed.includes(`<${tag}>`))
  if (hasUnsafeTag) throw new Error('Disallowed tags: ' + allowed)
  // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  allowed = ((allowed + '').toLowerCase().match(/<[a-z]+>/g) || []).join('')

  let output = input
  // removes the '<' char at the end of the string to replicate PHP's behaviour
  output = output.replace(/<$/, '')
  // recursively remove tags to ensure that the returned string
  // doesn't contain forbidden tags after previous passes (e.g. '<<bait/>switch/>')
  while (true) {
    const current = output
    output = current
      .replace(removeRules, '')
      .replace(datasrcAttribute, ($0, $1) => {
        return $0.replace($1, '') // return match keeping the '>' delimiter
      })
      .replace(srcAttribute, ($0, $1) => {
        return $0.replace($1, '') // return match keeping the '>' delimiter
      })
      .replace(useAttribute, ($0, $1) => {
        return $0.replace($1, '') // return match keeping the '>' delimiter
      })
      .replace(tags, (fullTag, tagName) => {
        return allowed.includes(`<${tagName.toLowerCase()}>`) ? fullTag : ''
      })
    // return once no more tags are removed
    if (current === output) {
      return output
    }
  }
}
