import Breed from '../../domain/breed'
import Dog from '../../domain/dog'

const API_BASE = 'https://dog.ceo/api'

export async function getAllDogs(): Promise<Dog[]> {
  return fetch(API_BASE + '/breeds/list/all')
    .then((res) => res.json())
    .then((data) => {
      const breeds = Object.keys(data.message).map(
        (breed) => new Breed(breed, data.message[breed])
      )

      return breeds
        .map((breed) => {
          if (breed.subBreeds.length === 0) return new Dog(breed.name)
          return breed.subBreeds.map((subBreed) => {
            return new Dog(breed.name, subBreed)
          })
        })
        .flat()
    })
}

export async function getDogImage(breed: string, subBreed?: string) {
  return fetch(
    subBreed
      ? `${API_BASE}/breed/${breed}/${subBreed}/images/random`
      : `${API_BASE}/breed/${breed}/images/random`
  )
    .then((res) => res.json())
    .then((data) => data.message)
}
