import { Breed } from '../domain/breed'

export const getBreedsList = (breeds?: Breed[]): string[] => {
  return breeds ? breeds.map((breed) => breed.name) : []
}

export const getBreed = (breeds: Breed[], currentBreed: string) => {
  return breeds.find((breed) => breed.name === currentBreed)
}

export const getSubBreedsList = (
  breeds: Breed[],
  currentBreed: string
): string[] => {
  const subBreedsFilter =
    breeds && currentBreed
      ? breeds.find((breed) => breed.name === currentBreed).subBreeds
      : []

  return subBreedsFilter.length > 0 ? ['all', ...subBreedsFilter] : []
}

export const setImages = (breed: Breed, images: string[]): Breed => {
  return { ...breed, images }
}

export const AddImages = (
  breeds: Breed[],
  currentBreed: string,
  images: string[]
) => {
  const breed = {...getBreed(breeds, currentBreed), images} 

  return breeds.map((currentBreed) => {
    if (currentBreed.name === breed.name) {
      return breed
    }
    return currentBreed
  })
}

export const getImagesFiltered = (
  breeds: Breed[],
  currentBreed: string,
  currentSubBreed: string
) => {
  if (!breeds || !currentBreed) return []
  const breed = getBreed(breeds, currentBreed)
  if (currentSubBreed && currentSubBreed !== 'all') {
    return breed.images.filter((url: string) =>
      url.includes(`${currentBreed}-${currentSubBreed}`)
    )
  }
  return breed.images
}
