// Accent colors - only for status (what matters most)
export const getStatusColor = function getStatusColor(status) {
  const MAP = {
    'Live': '#22c55e',
    'Stable/Maintenance': '#22c55e',
    'Onboarding': '#eab308',
    'Off': '#ef4444'
  }
  return MAP[status] || '#6b7280'
}

// Muted earth tones (Stripe/Linear style)
export const getCloudColor = function getCloudColor(cloud) {
  return '#a8a29e' // stone
}

export const getLayerColor = function getLayerColor(layer) {
  return '#a8a29e' // stone
}

export const getNodeTypeColor = function getNodeTypeColor(type) {
  return '#a1a1aa' // zinc
}

export const getEnvColor = function getEnvColor(env) {
  return '#94a3b8' // slate
}