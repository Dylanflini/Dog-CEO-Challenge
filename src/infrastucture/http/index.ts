const headers = {
  'Content-Type': 'application/json',
}

export const get = async <T>(url: string) => {
  return fetch(url, {
    headers,
  }).then((response) => response.json())
}

// export const http = {
//   get,
// }
