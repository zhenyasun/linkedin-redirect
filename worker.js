export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname
    const apiUrl = 'https://api.openai.com' + path

    const init = {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + env.OPENAI_API_KEY
      },
      body: request.body,
    }

    const response = await fetch(apiUrl, init)
    return response
  },
}
