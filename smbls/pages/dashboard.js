import { getActiveNetworks, getInactiveNetworks } from '../components/Table.js'

export const dashboard = {
  extends: [
    'Page',
  ],
  width: '100%',
  padding: 'X',
  flexFlow: 'y',
  gap: 'X',
  onRender: (el, s) => {
    window.requestAnimationFrame(async () => {
      const [fleet, chartData] = await Promise.all([
        el.call('read'),
        el.call('readShortSummary')
      ])
      el.call('setInitialData', {
        fleet,
        chartData
      })
    })
  },
            "Flex": {
                "width": "100%",
                "align": "stretch start",
                "theme": "dialog",
                "round": "A",
                "flex": 1,
                "position": "relative",
                "Box": {
                    "position": "relative",
                    "flex": 1,
                    "Overflow": {
                        "overflow": "hidden auto",
                        "position": "absolute",
                        "inset": "0",
                        "PageHead": {
                            "flexFlow": "x",
                            "padding": "A A2 Z",
                            "width": "100%",
                            "flexAlign": "center start",
                            "gap": "A",
                            "Title": {
                                "fontSize": "Z2",
                                "Strong": {
                                    "fontWeight": "700",
                                    "text": "Network "
                                },
                                "Span": {
                                    "fontWeight": "100",
                                    "text": (el, s) => {
                                        if (!s.fleet || !s.fleet.length) return ''
                                        const active = getActiveNetworks(s.fleet, s.filter)
                                        return `(${active.length})`
                                    }
                                }
                            },
                            "FilterTags": {
                                "if": (el, s) => s.filter,
                                "extends": "Flex",
                                "flexAlign": "center",
                                "gap": "Z",
                                "TypeTag": {
                                    "if": (el, s) => s.filter?.type,
                                    "extends": "Flex",
                                    "flexAlign": "center",
                                    "gap": "X2",
                                    "padding": "X2 Z",
                                    "background": "nodeType .2",
                                    "round": "Z",
                                    "fontSize": "Z1",
                                    "color": "nodeType",
                                    "Label": {
                                        "tag": "span",
                                        "text": (el, s) => s.filter?.type
                                    },
                                    "CloseBtn": {
                                        "tag": "button",
                                        "background": "transparent",
                                        "border": "none",
                                        "cursor": "pointer",
                                        "padding": "0",
                                        "color": "nodeType",
                                        "fontSize": "Z1",
                                        "lineHeight": "1",
                                        "text": "×",
                                        "onClick": (ev, el, s) => {
                                            const f = { ...s.filter }
                                            delete f.type
                                            s.update({ filter: Object.keys(f).length ? f : null })
                                            setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
                                        }
                                    }
                                },
                                "EnvTag": {
                                    "if": (el, s) => s.filter?.env,
                                    "extends": "Flex",
                                    "flexAlign": "center",
                                    "gap": "X2",
                                    "padding": "X2 Z",
                                    "background": "env .2",
                                    "round": "Z",
                                    "fontSize": "Z1",
                                    "color": "env",
                                    "Label": {
                                        "tag": "span",
                                        "text": (el, s) => s.filter?.env
                                    },
                                    "CloseBtn": {
                                        "tag": "button",
                                        "background": "transparent",
                                        "border": "none",
                                        "cursor": "pointer",
                                        "padding": "0",
                                        "color": "env",
                                        "fontSize": "Z1",
                                        "lineHeight": "1",
                                        "text": "×",
                                        "onClick": (ev, el, s) => {
                                            const f = { ...s.filter }
                                            delete f.env
                                            s.update({ filter: Object.keys(f).length ? f : null })
                                            setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
                                        }
                                    }
                                },
                                "CloudTag": {
                                    "if": (el, s) => s.filter?.cloud,
                                    "extends": "Flex",
                                    "flexAlign": "center",
                                    "gap": "X2",
                                    "padding": "X2 Z",
                                    "background": "cloudProvider .2",
                                    "round": "Z",
                                    "fontSize": "Z1",
                                    "color": "cloudProvider",
                                    "Label": {
                                        "tag": "span",
                                        "text": (el, s) => s.filter?.cloud
                                    },
                                    "CloseBtn": {
                                        "tag": "button",
                                        "background": "transparent",
                                        "border": "none",
                                        "cursor": "pointer",
                                        "padding": "0",
                                        "color": "cloudProvider",
                                        "fontSize": "Z1",
                                        "lineHeight": "1",
                                        "text": "×",
                                        "onClick": (ev, el, s) => {
                                            const f = { ...s.filter }
                                            delete f.cloud
                                            s.update({ filter: Object.keys(f).length ? f : null })
                                            setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
                                        }
                                    }
                                },
                                "RewardClaimTag": {
                                    "if": (el, s) => s.filter?.rewardClaim,
                                    "extends": "Flex",
                                    "flexAlign": "center",
                                    "gap": "X2",
                                    "padding": "X2 Z",
                                    "background": "rewardClaim .2",
                                    "round": "Z",
                                    "fontSize": "Z1",
                                    "color": "rewardClaim",
                                    "Label": {
                                        "tag": "span",
                                        "text": (el, s) => s.filter?.rewardClaim
                                    },
                                    "CloseBtn": {
                                        "tag": "button",
                                        "background": "transparent",
                                        "border": "none",
                                        "cursor": "pointer",
                                        "padding": "0",
                                        "color": "rewardClaim",
                                        "fontSize": "Z1",
                                        "lineHeight": "1",
                                        "text": "×",
                                        "onClick": (ev, el, s) => {
                                            const f = { ...s.filter }
                                            delete f.rewardClaim
                                            s.update({ filter: Object.keys(f).length ? f : null })
                                            setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
                                        }
                                    }
                                },
                                "ClearAllBtn": {
                                    "tag": "button",
                                    "background": "transparent",
                                    "border": "none",
                                    "cursor": "pointer",
                                    "padding": "X2 Z",
                                    "color": "caption",
                                    "fontSize": "Z1",
                                    ":hover": {
                                        "color": "white"
                                    },
                                    "text": "Clear all",
                                    "onClick": (ev, el, s) => {
                                        s.update({ filter: null })
                                        setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
                                    }
                                }
                            },
                            "NavButton": {
                                "theme": "button",
                                "flow": "row-reverse",
                                "margin": "-Y1 -Z2 - auto",
                                "icon": "plus",
                                "text": "Add network",
                                "onClick": (ev, el, s) => {
                                    s.update({ modal: '/add-network' })
                                    setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
                                }
                            },
                            "NavButton_node": {
                                "theme": "button",
                                "flow": "row-reverse",
                                "margin": "-Y1 -Z2 - -",
                                "icon": "plus",
                                "text": "Deploy node",
                                "opacity": () => window.location.hostname === 'localhost' ? 1 : 0.4,
                                "filter": () => window.location.hostname === 'localhost' ? 'none' : 'blur(1px)',
                                "pointerEvents": () => window.location.hostname === 'localhost' ? 'auto' : 'none',
                                "cursor": () => window.location.hostname === 'localhost' ? 'pointer' : 'not-allowed',
                                "title": () => window.location.hostname === 'localhost' ? 'Deploy a new node' : 'Coming soon - Development only',
                                "onClick": (ev, el, s) => {
                                    if (window.location.hostname !== 'localhost') return
                                    s.update({ modal: '/deploy-node' })
                                    setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
                                }
                            }
                        },
                        "Tr": {
                            "extends": "Grid",
                            "zIndex": 3,
                            "position": "sticky",
                            "background": "black .001",
                            "backdropFilter": "blur(10px)",
                            "top": "0",
                            "padding": "A A2",
                            "templateColumns": "3fr 2fr 2fr 2fr 1fr",
                            "color": "#94a3b8",
                            "childProps": {
                                "fontSize": "Z1"
                            },
                            "children": [
                                "Network",
                                "Environment",
                                "Node types",
                                "Cloud provider",
                                "Status"
                            ]
                        },
                        "Hr": {
                            "margin": "0",
                            "opacity": ".035"
                        },
                        "Table": {
                            "round": "C1"
                        },
                        "InactiveSection": {
                            "if": (el, s) => getInactiveNetworks(s.fleet, s.filter)?.length > 0,
                            "flexFlow": "y",
                            "margin": "B 0 0 0",
                            "InactiveHeader": {
                                "flexFlow": "x",
                                "padding": "A A2 Z",
                                "width": "100%",
                                "flexAlign": "center start",
                                "gap": "A",
                                "Title": {
                                    "fontSize": "Z2",
                                    "color": "caption",
                                    "Strong": {
                                        "fontWeight": "700",
                                        "text": "Inactive "
                                    },
                                    "Span": {
                                        "fontWeight": "100",
                                        "text": (el, s) => {
                                            const inactive = getInactiveNetworks(s.fleet, s.filter)
                                            return `(${inactive?.length || 0})`
                                        }
                                    }
                                }
                            },
                            "InactiveTr": {
                                "extends": "Grid",
                                "zIndex": 3,
                                "position": "sticky",
                                "background": "black .001",
                                "backdropFilter": "blur(10px)",
                                "top": "0",
                                "padding": "A A2",
                                "templateColumns": "3fr 2fr 2fr 2fr 1fr",
                                "color": "#94a3b8",
                                "childProps": {
                                    "fontSize": "Z1"
                                },
                                "children": [
                                    "Network",
                                    "Environment",
                                    "Node types",
                                    "Cloud provider",
                                    "Status"
                                ]
                            },
                            "InactiveHr": {
                                "margin": "0",
                                "opacity": ".035"
                            },
                            "InactiveTable": {
                                "round": "C1",
                                "opacity": "0.6"
                            }
                        }
                    },
                    "Modal": {}
                },
                "MetaSectionCharts": {
                    "minWidth": "G3"
                }
            }
};