export const InstallTabs = {
  childExtends: 'Button',
  align: 'end',
  gap: 'B1',
  margin: 'C1 - -',
  childProps: {
    isActive: (el, s) => s.installTab === el.key,
    theme: 'transparent',
    border: '0, solid, --document-dark-background',
    round: '0',
    padding: '0 0 A',
    align: 'end',
    '.isActive': {
      color: 'title',
      fontWeight: 'bold',
      borderWidth: '0 0 3px',
    },
    onClick: (ev, el, s) => {
      s.update({
        installTab: el.key
      })
      el.call('setCookie', 'installTab', el.key)
    },
  },
};