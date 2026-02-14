export const getMe = async (path = '/api/fleet', opts = {}) => {
  const endpointUrl = 'https://bigbrother.symbo.ls/auth/me'
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibmlrYUBzeW1ib2xzLmFwcCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1MjAxMjU3MiwiZXhwIjoxNzUyNjE3MzcyfQ.jw2-gNSFdOL3qpHBgRzSSlV6Kas0p15UTCJhDwRNvCo'
    },
    params: {},
    auth: {}
  }

  return await window.fetch(endpointUrl, options).then(r => r.json())
}