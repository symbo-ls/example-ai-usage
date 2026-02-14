export const install = {
  extends: [
    'Page',
  ],
  flow: 'y',
  maxWidth: 'none',
  padding: 'D3+Z D3',
  Flex: {
    IfNotCdn: {
      TerminalWithTitle: {
        Terminal: {
          value: el => el.getActivePkgManager() === 'npm' ? {
            domql: 'npm i smbls --save',
            react: 'npm i @symbo.ls/react --save'
          } : el.getActivePkgManager() === 'yarn' ? {
            domql: 'yarn add smbls',
            react: 'yarn add @symbo.ls/react'
          } : el.getActivePkgManager() === 'pnpm' ? {
            domql: 'pnpm add smbls',
            react: 'pnpm add @symbo.ls/react'
          } : '// bash',
        },
      },
    },
  },
};