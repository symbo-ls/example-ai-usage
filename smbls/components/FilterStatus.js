export const FilterStatus = {
  extend: 'Flex',
  Stable: {
    Box: {
      background: 'green',
      round: 'C',
      boxSize: 'Y2',
    },
    padding: 'Z2',
    ':hover': {
      theme: 'field',
    },
    round: 'C1',
    onClick: (ev, el, s) => s.update({
        status: s.status === 'Stable/Maintenance' ? null : 'Stable/Maintenance'
      }),
    '.isInactive': {
      opacity: '0.35',
    },
    isInactive: (el, s) => s.status && s.status !== 'Stable/Maintenance',
    isActive: (el, s) => s.status === 'Stable/Maintenance',
    '.isActive': {
      theme: 'field',
    },
  },
  Off: {
    Box: {
      background: 'gray',
      round: 'C',
      boxSize: 'Y2',
    },
    padding: 'Z2',
    ':hover': {
      theme: 'field',
    },
    round: 'C1',
    onClick: (ev, el, s) => s.update({
        status: s.status === 'Off' ? null : 'Off'
      }),
    '.isInactive': {
      opacity: '0.35',
    },
    isInactive: (el, s) => s.status && s.status !== 'Off',
    isActive: (el, s) => s.status === 'Off',
    '.isActive': {
      theme: 'field',
    },
  },
};