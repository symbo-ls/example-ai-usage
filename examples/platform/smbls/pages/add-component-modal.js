export const addComponentModal = {
  extends: 'ModalWindow',
  overflow: 'hidden',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    const obj = s.parse()
    const {
      type,
      key
    } = obj

    if (!key) {
      el.call('openNotification', {
        title: 'Validation message',
        message: 'Key is required',
        type: 'warning'
      })
      return
    }

    const exists = el.getDataItem(key, type) || el.getSchemaItem(key, type)
    if (exists) {
      el.call('openNotification', {
        title: `${el.getSingular(s.type)} already exists`,
        message: `"${s.key}" ${el.getSingular(s.type)} already exists`,
        type: 'error'
      })
      return
    }

    const res = await el.call('createItem', s.type, s.key, obj)
    if (res?.success) {
      el.call('closeModal')
    } else {
      el.call('openNotification', {
        title: 'Error message',
        message: `Could not create ${s.type} ${s.title}`,
        type: 'error'
      })
    }
  },
  tag: 'form',
  state: {
    type: 'components',
    key: '',
    value: {},
    title: '',
    description: '',
    category: '',
    code: '',
    tags: [
    ],
    state: '',
    props: {},
    settings: {
      gridOptions: {
        w: 2,
        h: 1,
      },
    },
    interactivity: [
    ],
    dataTypes: [
    ],
  },
  ModalHeader: {
    title: 'Add a new component',
    p: 'Fill initial settings and choose a template',
  },
  Flex: {
    overflow: 'auto',
    padding: 'A C3 0',
    minHeight: 'G3',
    minWidth: '100%',
    flow: 'column',
    flexAlign: 'flex-start space-between',
    gap: 'C1',
    'Flex.info': {
      width: '100%',
      flow: 'column',
      gap: 'B3',
      childProps: {
        width: '50%',
      },
      'InputField.key': {
        Title: {
          text: 'Key',
        },
        Input: {
          required: true,
          value: '{{ key }}',
          placeholder: 'CardSidebar',
          onKeydown: (e, el) => {
            const val = el.node.value
            const preventChars = el.call('stringIncludesAny', val, [
              '&',
              '*',
              '-',
              ':',
              '@',
              '.',
              '/',
              '!',
              ' '
            ])
            if (preventChars) {
              e.preventDefault()
              return false
            }
            return true
          },
          onKeyup: (e, el, s) => {
            const val = el.node.value
            s.update({
              touched: true,
              key: val.replace(/[^a-zA-Z]/gu, '')
            })
          },
        },
      },
      'GroupField.draft': {
        margin: 'A - -',
        align: 'start',
        Title: {
          text: 'Is a  draft?',
        },
        SwitchFieldWithCaption: {
          align: 'start start',
          onChange: (ev, el, s) => {
            s.update({
              draft: !s.draft
            })
          },
          Input: {
            checked: ({
              state
            }) => state.draft,
          },
          SwitchField: {},
          Caption: {
            padding: '0',
            opacity: '.65',
            color: 'gray7',
            text: 'Draft',
          },
        },
      },
    },
    'Button.showAdvanced': {
      margin: '- -Z2',
      gap: 'X',
      background: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      theme: 'common-card-outline-interactive',
      icon: (el, s) => `arrow angle ${s.advanced ? 'up' : 'down'}`,
      text: (el, s) => `${s.advanced ? 'Hide' : 'Show'} advanced settings`,
      onClick: (ev, el, s) =>
        s.update({
          advanced: !s.advanced
        }),
    },
    'Flex.advanced': {
      hide: ({
        state
      }) => !state.advanced,
      flow: 'column',
      align: 'flex-start space-between',
      gap: 'C1',
      width: '100%',
      'InputField.title': {
        Title: {
          text: 'Descriptive title',
        },
        Input: {
          value: '{{ title }}',
          placeholder: 'Card with Sidebar',
          autofocus: true,
          onKeyup: (e, el, s) => {
            const val = el.node.value
            const canApplyKey = !s.touched && window.location.pathname.includes('/add-component')
            const obj = {
              title: val
            }
            if (canApplyKey) {
              obj.key = el.call('toTitleCase', val).replace(/[^a-zA-Z]/gu, '')
            }
            s.update(obj)
          },
        },
      },
      'GroupField.value': {
        minWidth: '100%',
        Title: {
          text: 'Initial code',
        },
        CodePreviewWidget: {
          props: (el, s) => ({
            minWidth: '100%',
            widthRange: null,
            theme: 'field-static',
            round: 'X2',
            padding: 'X2 X2 X2 -',
            minHeight: 'G1',
            Monaco: {
              foldLevel: false,
              opacity: 1,
              fileTab: {
                code: s.code ?
                  el.call('decodeNewlines', s.code) : s.value ?
                  el.stringifyCode(s.value) : 'export default {}',
                type: 'javascript',
                filename: 'value.js',
                fileTabKey: 'value'
              },
              onCodeEditCallback: (editor) => {
                const code = editor.getValue()
                const value = el.call('evalStringCodeUnsafe', code)
                s.quietReplace({
                  code: el.call('encodeNewlines', code),
                  value
                })
              }
            }
          }),
        },
      },
      'GroupField.description': {
        width: '100%',
        Title: {
          text: 'Description',
        },
        TextareaField: {
          width: '100%',
          Textarea: {
            variant: 'simple',
            height: 'auto',
            minWidth: '100%',
            placeholder: 'Component Description',
            text: '{{ description }}',
            onKeyup: (e, el, s) => {
              s.update({
                description: el.node.value
              })
            },
          },
        },
      },
      'InputField.tags': {
        width: '50%',
        Title: {
          text: 'Tags',
        },
        Span: {
          color: 'paragraph',
          text: 'For multiple tags divide by comma (,)',
        },
        Input: {
          placeholder: 'Landing, Survey',
          value: (el, s) =>
            el.call('isArray', s.tags) ? s.tags.join(', ') : s,
          onKeyup: (e, el, s) => {
            s.tags = el.node.value.split(',').map((v) => v.trim())
            s.update({
              tags: s.tags
            })
          },
        },
      },
      'InputField.figmaUrl': {
        width: '50%',
        Title: {
          text: 'Figma embed URL:',
        },
        Input: {
          value: '{{ figmaUrl }}',
          placeholder: 'https://figma.com/...',
          onChange: (e, el, s) => {
            const {
              value
            } = el.node
            s.update({
              figmaUrl: value
            })
          },
        },
      },
      'InputField.stateStr': {
        if: (el, s, ctx) =>
          s.stateStr || (s.state && ctx.utils.isString(s.state)),
        width: '50%',
        Title: {
          text: 'Path in state',
        },
        Input: {
          placeholder: 'about/team',
          value: (el, s) => s.state,
          onKeyup: (e, el, s) =>
            s.update({
              state: el.node.value
            }),
        },
      },
      'Group.state': {
        if: (el, s, ctx) =>
          !s.stateStr || !s.state || (s.state && !ctx.utils.isString(s.state)),
        props: {
          minWidth: '100%',
        },
        Title: {
          text: 'Mockup state:',
        },
        CodePreviewWidget: {
          props: (el, s) => ({
            minWidth: '100%',
            widthRange: null,
            theme: 'field-static',
            round: 'X2',
            padding: 'X2 X2 X2 -',
            minHeight: 'G1',
            Monaco: {
              foldLevel: false,
              opacity: 1,
              fileTab: {
                code: s.state ?
                  el.stringifyCode(s.state, el, s) : 'export default {}',
                type: 'javascript',
                filename: 'state.js',
                fileTabKey: 'state'
              },
              onCodeEditCallback: (editor) => {
                const state = el.call('evalStringCodeUnsafe', editor.getValue())
                s.quietReplace({
                  state
                })
              }
            }
          }),
        },
      },
      'SurveyIconicOptions.interactivity': {
        multiple: true,
        width: '100%',
        lowercase: true,
        margin: '0',
        Title: {
          text: 'Select interactivity types',
        },
        options: {
          'Option.Hover': {
            icon: 'hover outline',
          },
          'Option.Click': {
            icon: 'click outline',
          },
          'Option.Choose': {
            icon: 'choose outline',
          },
          'Option.Drag': {
            icon: 'drag outline',
          },
          'Option.Input': {
            icon: 'input outline',
          },
          'Option.Focus': {
            icon: 'focus outline',
          },
          Other: null,
        },
      },
      'SurveyIconicOptions.dataTypes': {
        multiple: true,
        width: '100%',
        lowercase: true,
        margin: '0',
        Title: {
          text: 'Select types of values',
        },
        options: {
          'Option.Boolean': {
            icon: 'boolean outline',
          },
          'Option.Int': {
            icon: 'int outline',
          },
          'Option.String': {
            icon: 'string outline',
          },
          'Option.Object': {
            icon: 'object outline',
          },
          'Option.Array': {
            icon: 'array outline',
          },
          'Option.Date': {
            icon: 'date outline',
          },
          Other: null,
        },
      },
      'Group.props': {
        props: {
          minWidth: '100%',
        },
        Title: {
          text: 'Frame properties:',
        },
        CodePreviewWidget: {
          props: (el, s) => ({
            minWidth: '100%',
            widthRange: null,
            theme: 'field-static',
            round: 'X2',
            padding: 'X2 X2 X2 -',
            minHeight: 'G1',
            Monaco: {
              foldLevel: false,
              opacity: 1,
              fileTab: {
                code: el.stringifyCode(s.props),
                type: 'javascript',
                filename: 'props.js',
                fileTabKey: 'props'
              },
              onCodeEditCallback: (editor) => {
                const props = el.call('evalStringCodeUnsafe', editor.getValue())
                if (props?.[s.key]) {
                  props.demoComponent = props[s.key]
                }
                s.quietReplace({
                  props
                })
              }
            }
          }),
        },
      },
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      icon: 'arrow right',
      text: 'Next',
    },
  },
};