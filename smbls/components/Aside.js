export const Aside = {
  InputField: {
    Icon: {
      name: 'search',
      fontSize: 'Z',
      minWidth: 'A',
      margin: '- -B2 - Z2',
      opacity: '.35',
    },
    Input: {
      theme: 'transparent',
      placeholder: 'Filter...',
      fontWeight: '300',
      value: '{{ search }}',
      onInput: (ev, el, s) => s.update({
          search: el.node.value,
          activeIndex: null
        }),
      padding: 'Y Z Y B2',
      width: 'F3',
      flex: 1,
    },
    flexFlow: 'x',
    flexAlign: 'center',
    margin: '- - - -Z2',
  },
  FilterSidebar_validators: {
    Button: {
      text: (el, s) => s.validators || 'All Validators',
    },
    Dropdown: {
      childProps: {
        '.isActive': {
          background: 'white .1',
        },
        isActive: (el, s) => s.validators === el.text,
        onClick: (ev, el, s) => {
            s.update({
              validators: el.text,
              activeIndex: null
            })
          },
      },
      All: {
        text: 'All Validators',
      },
      Mainnet: {
        text: 'Mainnet',
      },
      Testnet: {
        text: 'Testnet',
      },
      None: {
        text: 'None',
      },
    },
  },
  FilterSidebar_rpc: {
    Button: {
      text: (el, s) => s.rpc || 'All RPC',
    },
    Dropdown: {
      childProps: {
        '.isActive': {
          background: 'white .1',
        },
        isActive: (el, s) => s.rpc === el.text,
        onClick: (ev, el, s) => {
            s.update({
              rpc: el.text,
              activeIndex: null
            })
          },
      },
      All: {
        text: 'All RPC',
      },
      Mainnet: {
        text: 'Mainnet',
      },
      Testnet: {
        text: 'Testnet',
      },
      None: {
        text: 'None',
      },
    },
  },
  FilterSidebar_update: {
    Button: {
      text: (el, s) => s.lastUpdate || 'Last update',
    },
    Dropdown: {
      childProps: {
        '.isActive': {
          background: 'white .1',
        },
        isActive: (el, s) => s.lastUpdate === el.text,
        onClick: (ev, el, s) => {
            s.update({
              lastUpdate: el.text,
              activeIndex: null
            })
          },
      },
      All: {
        text: 'All Time',
      },
      Today: {
        text: 'Today',
      },
      Last2Days: {
        text: 'Last 2 Days',
      },
      Last3Days: {
        text: 'Last 3 Days',
      },
      LastWeek: {
        text: 'Last Week',
      },
      LastMonth: {
        text: 'Last Month',
      },
    },
  },
  FilterSidebar_status: {
    Button: {
      text: (el, s) => s.status || 'Status',
    },
    Dropdown: {
      childProps: {
        '.isActive': {
          background: 'white .1',
        },
        isActive: (el, s) => s.status === el.text,
        onClick: (ev, el, s) => {
            s.update({
              status: el.text,
              activeIndex: null
            })
          },
      },
      All: {
        text: 'Live',
      },
      Today: {
        text: 'Off',
      },
    },
  },
  props: {
    flexFlow: 'y',
    gap: 'B2',
    fontSize: 'Z2+V',
    margin: 'Z2 - -',
  },
};