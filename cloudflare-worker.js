const targetUrl = "https://lazycatzzzzz.github.io/personal-website";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname + url.search + url.hash;

    const target = new URL(path, targetUrl);

    const headers = new Headers();

    for (const [key, value] of request.headers) {
      if (key.toLowerCase() !== "host") {
        headers.set(key, value);
      }
    }

    headers.set("Host", target.host);
    headers.set("X-Forwarded-Host", url.host);
    headers.set("X-Forwarded-Proto", url.protocol.slice(0, -1));

    const response = await fetch(target.toString(), {
      method: request.method,
      headers: headers,
      body: request.body,
      redirect: "manual",
    });

    const modifiedHeaders = new Headers(response.headers);

    for (const [key, value] of modifiedHeaders) {
      if (key.toLowerCase() === "location" && value.startsWith(targetUrl)) {
        modifiedHeaders.set(key, value.replace(targetUrl, url.origin));
      }
    }

    const modifiedResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: modifiedHeaders,
    });

    return modifiedResponse;
  },
};