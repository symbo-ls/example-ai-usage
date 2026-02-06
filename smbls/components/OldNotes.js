export const OldNotes = {
  extend: 'Flex',
  Flex: {
    flow: 'y',
    children: (el, s) => s.logs,
    childrenAs: 'state',
    padding: 'Z2',
    childExtends: 'Flex',
    childProps: {
      flow: 'y',
      padding: 'Z2',
      gap: 'Z',
      ':not(:last-child)': {
        border: '0 0 1px 0, dashed, gray',
      },
      Notes: {
        order: 0,
        text: '{{ status_notes }}',
      },
      Date: {
        order: 1,
        fontWeight: '300',
        fontSize: 'Z1',
        opacity: '0.5',
        margin: 'X2 - -',
        text: '{{ created_at }}',
      },
      width: '100%',
      ':hover .buttons': {
        opacity: 1,
      },
      Flex: {
        class: 'buttons',
        position: 'absolute',
        top: 'X2',
        right: 'X2',
        childExtends: 'IconButton',
        Add: {
          icon: 'plus',
          onClick: (ev, el, s) => s.parent.toggle('adding'),
        },
        Edit: {
          icon: 'moreHorizontal',
          onClick: (ev, el, s) => window.alert('Edit soon'),
        },
        Remove: {
          icon: 'x',
          onClick: (ev, el, s) => window.confirm('You sure want to remove this log?'),
        },
        opacity: 0,
        childProps: {
          theme: 'transparent',
        },
        gap: 'X2',
      },
      position: 'relative',
      Title: {
        order: '-1',
        text: '{{ action_items }}',
      },
    },
  },
  props: {
    flow: 'y',
    hide: (el, s) => !s.logs?.length,
    background: 'black .15',
    round: 'B',
    margin: '0 -A',
  },
  Addnew: {
    Notes: {
      placeholder: 'Status notes',
      value: (el, s) => s.status_notes,
    },
    childExtends: 'Textarea',
    extends: 'Flex',
    align: 'stretch start',
    childProps: {
      width: '100%',
      maxWidth: 'none',
      heightRange: 'D1',
    },
    Actions: {
      placeholder: 'Action items',
      value: (el, s) => s.action_items,
    },
    flow: 'y',
    gap: 'Z2',
    padding: 'Z2',
    hide: (el, s) => !s.adding,
  },
};