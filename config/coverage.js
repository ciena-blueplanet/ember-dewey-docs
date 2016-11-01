module.exports = {
  coverageEnvVar: 'COVERAGE',
  coverageFolder: 'coverage',
  excludes: [
    '*/tests/**/*',
    '*/app/**/*'
  ],
  useBabelInstrumenter: true,
  reporters: [
    'html',
    'lcov',
    'text-summary'
  ]
}
