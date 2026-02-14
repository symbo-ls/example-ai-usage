export const OptionToggle = {
  extends: 'SwitchFieldWithCaption',
  borderWidth: '1px 0 0 0',
  borderStyle: 'solid',
  padding: 'B1 - -',
  cursor: 'pointer',
  '@dark': {
    borderColor: '--color-line-dark',
  },
  '@light': {
    borderColor: '--color-line-light',
  },
  onChange: (ev, el) => {
    const {
      key
    } = el.props
    const val = ev.target.checked
    el.setUserSettings(key, val, {
      message: `Set ${key} settings to ${val}`
    })
  },
};