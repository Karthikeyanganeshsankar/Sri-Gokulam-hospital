module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'postcss-nested',
    'postcss-flexbugs-fixes',
    'postcss-color-function',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}
