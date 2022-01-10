import Filter from '../domain/filter'

export const addFilter = (filters: Filter[], type) => {
  return [...filters, new Filter(type)]
}

export const deleteFilter = (filters: Filter[], id: string) => {
  return filters.filter((filter) => filter.id !== id)
}

export const changeValue = (filters: Filter[], id: string, value: string) => {
  return filters.map((filter) => {
    if (filter.id === id) {
      filter.value = value
    }
    return filter
  })
}
