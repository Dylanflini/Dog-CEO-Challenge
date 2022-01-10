import { generateId } from '../infrastucture/uuid/uuid'

export default class Dog {
  breed: string
  subBreed: string | undefined
  image: string
  id: string
  disabled: boolean

  constructor(breed: string, subBreed: string = '') {
    this.breed = breed
    this.subBreed = subBreed
    this.image = ''
    this.id = generateId()
    this.disabled = false
  }
}
