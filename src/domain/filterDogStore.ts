import type { FilterDog } from './filterDogEntity'

interface FilterDogStore {
  // State
  filter: FilterDog | undefined
  isLoading: boolean
  isLoadingImages: boolean
  // isUpdating: boolean

  // Actions
  loadInitialData(): Promise<FilterDog>
  selectBreed(breed: FilterDog['currentBreed']): FilterDog
  selectSubBreed(subBreed: FilterDog['currentSubBreed']): FilterDog
  //   - filtrar por raza
  // - filtrar por sub raza
  // setCounter(counter: Counter): void
  // updateCounter(counter: Counter): Promise<Counter | undefined>
}

export type { FilterDogStore }
