export const SettingsFooter = {
  gap: 'B2',
  margin: 'A2 -X2 B2',
  align: 'center space-between',
  ContinueButton: {
    show: (el) => !el.getUserSettings('autoSaveSettings'),
    hide: (el) => el.getUserSettings('autoSaveSettings'),
    text: 'Update',
    onClick: async (ev, el) => {
      await el.call('closeModal')
      const Canvas = el.getCanvas()
      Canvas.Iframe.update()
      el.getEditorPanels().update()
      el.call('openNotification', {
        title: 'Settings are saved',
        message: `Project settings are updated`,
        type: 'success'
      })
    },
  },
  CheckboxField: {
    margin: '- auto - -',
    checked: (el) => el.getUserSettings('autoSaveSettings'),
    onChange: (ev, el) => {
      el.setUserSettings(
        'autoSaveSettings',
        Boolean(ev.target.checked)
        // {
        //   preventUpdate: val ? ['CanvasModal'] : ['Modal', 'Canvas']
        // }
      )
      el.parent.update()
    },
    Icon: {},
    Span: {
      text: 'Auto update canvas',
    },
  },
  Flex: {
    ConvertToDomql3: {
      color: 'inactive',
      text: 'Convert to DOMQL3',
      onClick: async (ev, el) => {
        await el.convertToDomql3()
      },
    },
    RestoreTypes: {
      color: 'inactive',
      text: 'Restore missing types',
      onClick: async (ev, el) => {
        await el.restoreMissingTypes()
      },
    },
    RestoreComponents: {
      color: 'inactive',
      text: 'Restore missing components',
      onClick: async (ev, el) => {
        await el.restoreMissingComponents()
      },
    },
    ResetSettings: {
      color: 'inactive',
      text: 'Reset settings',
      onClick: (ev, el) => {
        el.setAllUserSettings({
          optimizedMode: false,
          thumbnailPreview: false,
          allowInitialSelection: false,
          openOnDblClick: true,
          showGrid: true,
          allowTabs: true,
          allowZoombar: true,
          allowAutoPosition: true,
          allowTabPreview: true,
          useAnimations: true
        }, {
          message: 'Reset settings'
        })
      },
    },
    ClearCookies: {
      color: 'inactive',
      text: 'Clean settings cookies',
      onClick: (ev, el) => {
        el.call('removeCookie', 'topNavbarActive')
        el.call('removeCookie', 'bottomNavbarActive')
        el.call('removeCookie', 'globalTheme')
        el.call('removeCookie', 'sceneTheme')
        el.call('removeCookie', 'globalTheme')
        el.call('removeCookie', 'framework')
        el.call('removeCookie', 'pkgManager')
        el.call('removeCookie', 'language')
        el.call('removeCookie', 'activeProject')
        el.call('removeCookie', 'installTab')
        el.call('removeCookie', 'isSidebarSticky')
        el.call('removeCookie', 'componentShowFilter')
        el.call('removeCookie', 'navbarPlacement')
        el.call('removeCookie', 'presentMode')
        el.call('removeCookie', 'showErrorBanner')
        el.call('removeCookie', 'thumbnailPreview')
        el.call('removeCookie', 'optimizedMode')
        el.call('removeCookie', 'showGrid')
        el.call('removeCookie', 'explorerAutoscroll')
        el.call('removeCookie', 'debuggingMode')
        el.call('removeCookie', 'allowCanvasReplaceRouter')
        el.call('removeCookie', 'useDomql3')
        el.call('removeCookie', 'useGlassmorphism')
        el.call('removeCookie', 'allowAutoPosition')
        el.call('removeCookie', 'allowInitialSelection')
        el.call('removeCookie', 'openOnDblClick')
        el.call('removeCookie', 'allowTabs')
        el.call('removeCookie', 'showReferences')
        el.call('removeCookie', 'allowTeamCursors')
        el.call('removeCookie', 'allowFilesidebarPreview')
        el.call('removeCookie', 'allowTabPreview')
        el.call('removeCookie', 'useAnimations')
        el.call('removeCookie', 'allowZoombar')
        el.call('removeCookie', 'previewSize')
        el.call('removeCookie', 'zoomLevel')
        el.call('removeCookie', 'userId')
        el.call('removeCookie', 'name')
        el.call('removeCookie', 'email')
        el.call('openNotification', {
          title: 'Cookies are cleared',
          message: `Cleared all project related cookies from browser`,
          type: 'success'
        })
      },
    },
    ClearCache: {
      color: 'inactive',
      text: 'Clean project cache',
      fontWeight: 400,
      onClick: async (ev, el) => {
        await el.clearCache()
      },
    },
    gap: 'B2',
    childExtends: [
      'IconText',
      'DocsLink',
    ],
  },
};