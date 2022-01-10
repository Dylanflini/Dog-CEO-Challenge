import { createServer, Response } from 'miragejs'

export function createMockServer() {
  createServer({
    routes() {
      this.get(
        'https://dog.ceo/api/breeds/list/all',
        () => new Response(200, undefined, allBreedResponse)
      )
      this.get(
        'https://dog.ceo/api/breed/:breed/images/random',
        () => new Response(200, undefined, { message: '' })
      )
      this.get(
        'https://dog.ceo/api/breed/:breed/:subBreed/images/random',
        () => new Response(200, undefined, { message: '' })
      )
    },
  })
}

const allBreedResponse = {
  message: {
    african: [],
    australian: ['shepherd'],
    husond: ['afghan', 'spanish', 'ibizan', 'walker'],
    husky: ['spanish'],
  },
  status: 'succes',
}
