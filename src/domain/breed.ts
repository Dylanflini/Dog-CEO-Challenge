export default class Breed {
  name: string
  subBreeds: string[] | undefined

  constructor(name: string, subBreeds: string[]) {
    this.name = name
    this.subBreeds = subBreeds
  }
}
