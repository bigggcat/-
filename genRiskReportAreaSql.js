const fs = require('fs')
const path = require('path')

// eslint-disable-next-line import/no-dynamic-require
const GB2260 = require('./GB2260')

function escSqlStr(s) {
  // MySQL single-quote escaping: ' -> ''
  return String(s).replace(/'/g, "''")
}

const entries = Object.entries(GB2260).map(([areaId, areaName]) => [
  String(areaId),
  String(areaName),
])

if (!entries.length) {
  throw new Error(
    'GB2260 is empty. Please paste your data into scripts/GB2260.js first.'
  )
}

// Optional: keep deterministic order
entries.sort((a, b) => Number(a[0]) - Number(b[0]))

const chunkSize = 1000
const parts = []

for (let i = 0; i < entries.length; i += chunkSize) {
  const chunk = entries.slice(i, i + chunkSize)

  const values = chunk
    .map(([areaId, areaName]) => `('${escSqlStr(areaId)}','${escSqlStr(areaName)}')`)
    .join(',\n  ')

  parts.push(
    `INSERT INTO risk_report_area (area_id, area_name)\nVALUES\n  ${values};`
  )
}

const sql = parts.join('\n\n') + '\n'
const outPath = path.join(__dirname, 'insert_risk_report_area.sql')
fs.writeFileSync(outPath, sql, 'utf8')

console.log(`OK: ${outPath}`)
console.log(`rows = ${entries.length}, inserts = ${parts.length}, chunkSize = ${chunkSize}`)

