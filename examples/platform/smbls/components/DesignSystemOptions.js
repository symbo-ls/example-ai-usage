export const DesignSystemOptions = {
  extends: 'SettingsSection',
  Title: {
    QuestionMarkTooltip: {
      onClick: (ev, el, s) => {
        s.update({
          useReset: true,
          useVariable: true,
          useDocumentTheme: true,
          useFontImport: true,
          useIconSprite: true,
          useSvgSprite: true,
          useDefaultConfig: true,
          verbose: false
        }, {
          preventShModalUpdate: true
        })
      },
    },
  },
  Grid: {
    childExtends: {
      props: {
        onChange: async (ev, el, s) => {
          const {
            key
          } = el.props
          const val = s[key]
          await el.updateDesignSystem(null, key, !val, {
            message: `Set ${key} design system settings to ${!val}`
          })
          el.call('setCookie', key, !val)
        },
      },
    },
    children: [
      {
        key: 'useReset',
        QuestionMarkTooltip: {
          TooltipHidden: {
            shapeDirection: 'top',
            tip: 'Reset CSS browser defaults and matching Symbols Design System',
          },
        },
        Caption: {
          text: 'Apply Symbols normalizing:',
        },
      },
      {
        key: 'useVariable',
        QuestionMarkTooltip: {
          TooltipHidden: {
            shapeDirection: 'top',
            tip: 'Apply CSS values as variables',
          },
        },
        Caption: {
          text: 'Use CSS variables:',
        },
      },
      {
        key: 'useDocumentTheme',
        QuestionMarkTooltip: {
          TooltipHidden: {
            shapeDirection: 'top',
            tip: 'Apply global @dark @light, and other themes to the document',
          },
        },
        Caption: {
          text: 'Apply Global Themes:',
        },
      },
      {
        key: 'useFontImport',
        QuestionMarkTooltip: {
          TooltipHidden: {
            shapeDirection: 'top',
            tip: 'Import fonts via @font-face from Symbols cdn',
          },
        },
        Caption: {
          text: 'Import Fonts:',
        },
      },
      {
        key: 'useIconSprite',
        QuestionMarkTooltip: {
          TooltipHidden: {
            shapeDirection: 'top',
            tip: 'Bundle icons as SVG sprites',
          },
        },
        Caption: {
          text: 'Use Sprite for Icons:',
        },
      },
      {
        key: 'useSvgSprite',
        QuestionMarkTooltip: {
          TooltipHidden: {
            shapeDirection: 'top',
            tip: 'Bundle SVGs as SVG sprites',
          },
        },
        Caption: {
          text: 'Use Sprite for SVG:',
        },
      },
      {
        key: 'useDefaultConfig',
        QuestionMarkTooltip: {
          TooltipHidden: {
            shapeDirection: 'top',
            tip: 'Use default config as fallback for components',
          },
        },
        Caption: {
          text: 'Use default config:',
        },
      },
      {
        key: 'verbose',
        QuestionMarkTooltip: {
          TooltipHidden: {
            shapeDirection: 'top',
            tip: 'Design System verbose mode in console',
          },
        },
        Caption: {
          text: 'Verbose mode:',
        },
      },
      {
        extends: 'SelectDropdownWithTitle',
        ignoreChildExtend: true,
        borderWidth: '1px 0 0 0',
        borderStyle: 'solid',
        padding: 'B1 - -',
        '@dark': {
          borderColor: '--color-line-dark',
        },
        '@light': {
          borderColor: '--color-line-light',
        },
        Title: {
          opacity: '.65',
          color: 'gray7',
          text: 'Default global theme',
        },
        SelectDropdown: {
          Value: {
            Text: {
              text: (el) =>
                el.call(
                  'toDescriptionCase',
                  el.getDesignSystem('globalTheme')
                ) || 'Auto',
            },
          },
          Dropdown: {
            top: '121%',
            options: [
              {
                key: 'auto',
                text: 'Auto',
              },
              {
                key: 'dark',
                text: 'Dark',
              },
              {
                key: 'light',
                text: 'Light',
              },
              {
                key: 'custom',
                text: 'Custom',
              },
            ],
            onChoose: async (ev, el, s, ctx, calleeElement) => {
              const globalTheme = calleeElement.state.key

              this.sdk.updateData(
                [
                  ['update', ['designSystem', 'globaltheme'], globalTheme]
                ], {
                  message: `Updating globalTheme to ${globalTheme}`
                }
              )

              el.getRootState().update({
                globalTheme
              })

              el.call(
                'setCookie',
                'globalTheme',
                el.getDesignSystem('globalTheme')
              )
            },
            DropdownHeader: {
              text: 'Global theme',
            },
            ListInDropdown: {
              childExtends: {
                extend: 'KeyValueColumnFields',
                props: (el, s) => ({
                  isActive: el.getDesignSystem('globalTheme') === s.key,
                  text: s.text,
                  fontWeight: '400'
                }),
              },
            },
          },
        },
      },
    ],
  },
};