export const giveMeAnswer = async function giveMeAnswer(text) {
    const apiUrl = 'https://bigbrother.symbo.ls/api/mcp/query'
    const requestBody = {
      prompt: text
    }
    let responseHtml =
      '<p>Apologies, something went wrong while contacting the assistant.</p>'

    try {
      console.log('Sending request to API:', JSON.stringify(requestBody, null, 2))
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })

      const responseText = await response.text() // Get raw response text for debugging
      console.log('Raw API Response:', responseText)

      if (!response.ok) {
        let errorDetail = 'Unknown error'
        try {
          const errorData = JSON.parse(responseText)
          errorDetail = errorData.detail || errorData.error || response.statusText
        } catch (e) {
          errorDetail = response.statusText || 'Failed to parse error response'
        }
        console.error('API Error:', response.status, errorDetail)
        responseHtml = `<p>Error from assistant: ${errorDetail}</p>`
        return responseHtml
      }

      try {
        const data = JSON.parse(responseText)
        return data
      } catch (e) {
        console.error('Error parsing API response:', e)
        return responseText // Return raw response if parsing fails
      }
    } catch (error) {
      console.error('Failed to fetch from API or process response:', error)
      return `<p>Failed to connect to the assistant: ${error.message}</p>`
    }
  }