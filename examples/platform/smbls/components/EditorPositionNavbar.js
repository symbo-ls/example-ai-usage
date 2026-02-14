export const EditorPositionNavbar = {
  extends: 'NavbarButtonSet',
  Expand: {
    hide: el => {
      const EditorPanels = el.getEditorPanels()
      return EditorPanels?.props.isExpanded
    },
    onClick: (ev, el) => {
      const EditorPanels = el.getEditorPanels()
      EditorPanels.setProps({
        isExpanded: true
      })
    },
  },
  Minimize: {
    hide: el => {
      const EditorPanels = el.getEditorPanels()
      return !EditorPanels?.props.isExpanded
    },
    onClick: (ev, el) => {
      const EditorPanels = el.getEditorPanels()
      EditorPanels.setProps({
        isExpanded: false
      })
    },
  },
  Left: {
    onClick: (ev, el) => {
      const EditorPanels = el.getEditorPanels()
      el.call('setUserSettings', 'editorPanelsAtRight', false)
      EditorPanels.update()
    },
  },
  Right: {
    onClick: (ev, el) => {
      const EditorPanels = el.getEditorPanels()
      el.call('setUserSettings', 'editorPanelsAtRight', true)
      EditorPanels.update()
    },
  },
};