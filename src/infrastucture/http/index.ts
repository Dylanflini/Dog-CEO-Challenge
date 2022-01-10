const headers = {
  'Content-Type': 'application/json',
}

export const get = async (url: string) => {
  return fetch(url, {
    headers,
  }).then((response) => response.json())
}
