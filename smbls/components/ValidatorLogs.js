export const ValidatorLogs = {
  props: {
    gap: 'B2',
    columns: 'repeat(3, 1fr)',
    margin: '0 -Y',
    padding: 'A2 Z2+X',
    onClick: (ev, el, s) => {
        ev.stopPropagation()
        ev.preventDefault()
      },
  },
  extends: 'Grid',
  childExtends: 'LogItem',
  RAM: {
    Title: {
      text: 'Client Version',
    },
    Strong: {
      text: '{{ client_version }}',
    },
  },
  Reward_address: {
    Title: {
      text: 'Reward Address',
    },
    Strong: {
      text: '{{ reward_address }}',
    },
  },
  CloudProvider: {
    Title: {
      text: 'Cloud Provider',
    },
    Strong: {
      text: '{{ cloud_provider }}',
    },
  },
  Owner: {
    Title: {
      text: 'Owner',
    },
    Strong: {
      text: '{{ owner }}',
    },
  },
  Monkier: {
    Title: {
      text: 'Monkier',
    },
    Strong: {
      text: '{{ moniker }}',
    },
  },
};