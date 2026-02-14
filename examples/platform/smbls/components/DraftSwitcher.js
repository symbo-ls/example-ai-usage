export const DraftSwitcher = {
  extends: 'SwitchFieldWithCaption',
  onChange: (ev, el, s) => {
    s.update({
      draft: !s.draft
    })
  },
};