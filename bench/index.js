const { Suite } = require('benchmark')
const { analyticsScript, page1, page2 } = require('./fixtures/index')
const { cleanHTML } = require('../dist/html-cleanser.umd.min.js')

const runner = groups => {
  console.log(`\Sources:`)
  const bench = new Suite().on('cycle', e => {
    console.log('  ' + e.target)
  })
  for (const [label, source] of groups) {
    console.log(`  - "${label}" (length = ${source.length})`)
    bench.add(label, () => cleanHTML(source))
  }
  console.log(`\nRunning 🐇...\n\n`)
  bench.run()
}

const groups = [
  ['Short Page', page1],
  ['Large Page', page2],
  ['GA <script>', analyticsScript]
]

runner(groups)
