export const KeyValueColumnFields = {
  extends: [
    'DropdownItem',
    'Button',
  ],
  textAlign: 'start',
  align: 'center flex-start',
  padding: 'A',
  fontSize: 'Z1',
  href: '{{ href }}',
  onClick: async (ev, el, s, ctx) =>
    await el.call('dropdownClick', ev, el, s, ctx),
};