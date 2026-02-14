export const InstallSync = {
  P: {
    color: 'gray8',
    margin: '0',
    text: '3. Run CLI tool to synchronize:',
  },
  Terminal: {
    width: 'fit-content',
    margin: 'A 0 Z -Y',
    value: (el) => el.getRootState().pkgManager === 'npm' ? 'npm i @symbo.ls/cli -g' : el.getRootState().pkgManager === 'yarn' ? 'yarn add smbls global' : el.getRootState().pkgManager === 'pnpm' ? 'pnpm add smbls global' : '// bash',
  },
  Flex: {
    gap: 'C1',
    TerminalWithTitle_fetch: {
      margin: 'A - -',
      Title: {
        text: 'One-time fetch:',
      },
      Terminal: {
        margin: '0 0 0 -Y',
        value: 'smbls fetch',
      },
    },
    TerminalWithTitle_sync: {
      margin: 'A - -',
      Title: {
        text: 'Listening changes:',
      },
      Terminal: {
        margin: '0 0 0 -Y',
        value: 'smbls sync',
      },
    },
  },
};