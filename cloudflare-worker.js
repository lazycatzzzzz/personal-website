export default {
  async fetch(request, env, ctx) {
    const targetUrl = "https://lazycatzzzzz.github.io/personal-website/";

    const url = new URL(request.url);
    const path = url.pathname + url.search;

    const response = await fetch(targetUrl + path, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    const modifiedResponse = new Response(response.body, response);
    modifiedResponse.headers.set("Access-Control-Allow-Origin", "*");

    return modifiedResponse;
  },
};