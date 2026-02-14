export const InstallProvider = {
  P: {
    color: 'gray8',
    margin: '0 - Z2',
    children: [
      '4. Wrap your root app within ',
      {
        extend: 'Labeled',
        text: '<SymbolsProvider>',
      },
    ],
  },
  Code: {
    margin: 'Z1 0 0',
    Title: null,
    value: `import React from 'react'
import ReactDOM from 'react-dom'
import { SymbolsProvider } from '@symbo.ls/react'

ReactDOM.render(
  <SymbolsProvider>
    // ... your app
  </SymbolsProvider>
, document.body)`,
  },
};