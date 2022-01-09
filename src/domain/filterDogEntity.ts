export interface Dogs {
  breed: {}
}

export interface FilterDog {
  breeds: {}
  breedList: string[]
  subBreedList: string[] | []
  photoList: string[]
  currentBreed: string
  currentSubBreed: string
  // - lista de razas
  // - lista de sub razas
  // - lista de fotos
  // - loading initial data
  // - raza seleccionada
  // - sub raza seleccionada
}
