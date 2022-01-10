import { generateId } from '../infrastucture/uuid/uuid'

export default class Filter {
  value: string
  type: 'breed' | 'subBreed'
  id: string
  disabled: boolean

  constructor(type: 'breed' | 'subBreed', disabled: boolean = false) {
    this.value = ''
    this.type = type
    this.id = generateId()
    this.disabled = disabled
  }
}
