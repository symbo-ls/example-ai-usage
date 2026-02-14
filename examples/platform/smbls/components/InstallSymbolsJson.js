export const InstallSymbolsJson = {
  P: {
    color: 'gray8',
    margin: '0 - Z2',
    childProps: {
      display: 'inline',
    },
    children: [
      '2. Create ',
      {
        Labeled: {
          text: 'symbols.json',
        },
      },
      ' file in your project:',
    ],
  },
  Code: {
    margin: 'Z1 0 0',
    Title: null,
    value: el => `{
  "key": "${el.getAppKey()}",
  "framework": "${el.getRootState().framework}",
  "packageManager": "${el.getRootState().pkgManager}"
}`,
  },
};