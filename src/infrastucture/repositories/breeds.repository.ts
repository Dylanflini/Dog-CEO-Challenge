import { Breed, createBreed } from '../../domain/breed'
// import { http } from '../http'

export async function getAllBreeds(): Promise<Breed[]> {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((data) => {
      return Object.keys(data.message).map((breed) =>
        createBreed(breed, data.message[breed])
      )
    })
}

export async function getImages(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((data) => data.message)
}

// .get<{ message:{} }>('https://dog.ceo/api/breeds/list/all')
