export interface Breed {
  name: string
  subBreeds: string[]
  images: string[]
}

export const createBreed = (
  breed: string,
  subBreeds: string[] = []
): Breed => ({
  name: breed,
  subBreeds,
  images: [],
})
