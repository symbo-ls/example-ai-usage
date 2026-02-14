export const CheckParagraph = {
  extends: 'IconText',
  text: (el, s) => s.value || s.text,
  gap: 'Y',
  color: 'title',
  width: 'fit-content',
  icon: 'checkmark',
  Icon: {
    order: '-1',
    color: 'paragraph',
  },
};