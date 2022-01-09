import type { FilterDog } from './filterDogEntity'

const create = (
  breeds: FilterDog['breedList'],
  subBreeds: FilterDog['subBreedList']
): FilterDog => ({
  breeds: {},
  breedList: breeds,
  subBreedList: ['all', ...subBreeds],
  currentBreed: breeds[0],
  currentSubBreed: 'all',
  photoList: [],
})

const addPhotos = (filterDog: FilterDog, photos: FilterDog['photoList']) => ({
  ...filterDog,
  ...{ photoList: photos },
})

const selectBreed = (filterDog: FilterDog, breed: string) => ({
  ...filterDog,
  ...{ currenBreed: breed },
})

// const decrement = (counter: Counter) => ({
//   value: Math.max(counter.value - 1, 0),
// })
// const increment = (counter: Counter) => ({ value: counter.value + 1 })

export { create, addPhotos }
