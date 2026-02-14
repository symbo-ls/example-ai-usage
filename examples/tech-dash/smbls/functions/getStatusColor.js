export const getStatusColor = function getStatusColor(status) {
  const MAP = {
    'Live': 'green',
    'Stable/Maintenance': 'green',
    'Onboarding': 'yellow',
    'Off': 'gray'
  }

  return MAP[status]
}