export const EditInNavbarMenu = {
  flow: 'y',
  gap: 'A',
  theme: 'navbar',
  padding: 'Y Z1',
  onClick: (ev, el) => {
    el.lookup('TextNavbarButtonDropdown').update()
  },
};