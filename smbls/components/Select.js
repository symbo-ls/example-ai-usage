export const Select = {
  tag: 'label',
  extends: 'Flex',
  props: {
    theme: 'transparent',
    position: 'relative',
    round: '0',
    align: 'center flex-start',
  },
  Selects: {
    tag: 'select',
    extends: 'Flex',
    fontSize: 'A',
    fontWeight: '500',
    boxSize: '100%',
    border: 'none',
    padding: '- B - -',
    cursor: 'pointer',
    outline: 'none',
    pointerEvents: 'All',
    appearance: 'none',
    height: '100%',
    background: 'none',
    color: 'title',
    lineHeight: 1,
    zIndex: '2',
    flex: '1',
    ':focus-visible': {
      outline: 'none',
    },
    childExtends: {
      tag: 'option',
    },
    onInit: (el, s) => {
        el.attr.name = el.call('exec', el.props.name)
        el.attr.value = el.call('exec', el.props.value)
      },
    childProps: {
      onInit: (el, s) => {
          el.attr.disabled = el.call('exec', el.props.disabled)
          el.attr.selected = el.call('exec', el.props.selected)
          el.attr.value = el.call('exec', el.props.value)
        },
    },
    children: () => [{
          text: 'Please select',
          disabled: 'disabled',
          selected: true
        }, {
          text: 'One',
          value: 'One',
        },
        {
          text: 'Two',
          value: 'Two',
        },
        {
          text: 'Three',
          value: 'Three',
        },
      ],
  },
  Icon: {
    name: 'chevronDown',
    position: 'absolute',
    fontSize: 'B',
    right: '0',
  },
};