import { useEffect, useState } from 'react'
import {
  addFilter,
  changeValue,
  deleteFilter,
} from '../../../aplication/filterUseCases'
import Dog from '../../../domain/dog'
import Filter from '../../../domain/filter'
import { getAllDogs } from '../../repositories/dogs.repository'

export const useFilterController = () => {
  const [filters, setFilters] = useState([
    new Filter('breed'),
    new Filter('subBreed'),
  ])

  const [dogs, setDogs] = useState<Dog[]>()
  const [filterDogs, setFilterDogs] = useState<Dog[]>([])
  const [disabledDelete, setDisabledDelete] = useState(false)

  useEffect(() => {
    getAllDogs().then((dogs) => {
      setDogs(dogs)
      setFilterDogs(dogs)
    })
  }, [])

  useEffect(() => {
    if (filters.length <= 1) {
      return setDisabledDelete(true)
    }
    return setDisabledDelete(false)
  }, [filters])

  useEffect(() => {
    if (filters && dogs) {
      setFilterDogs(FilterReduce(filters, dogs))
    }
  }, [filters, dogs])

  const filterFn = (dogs: Dog[], value: string, type: string): Dog[] => {
    if (dogs && value.length > 1) {
      return dogs.filter((dog) => {
        return dog[type].toLowerCase().includes(value.toLowerCase())
      })
    }
    return dogs
  }

  const FilterReduce = (filters: Filter[], dogs: Dog[]): Dog[] => {
    //@ts-ignore
    return filters.reduce(
      (prev: Dog[], current: Filter) => {
        return filterFn(prev.flat(), current.value, current.type)
      },
      [dogs]
    )
  }

  const handleAddFilter = (type) => {
    setFilters(addFilter(filters, type))
  }

  const handleChange = (id: string, value: string) => {
    setFilters(changeValue(filters, id, value))
  }

  const handleDeleteFilter = (id: string) => {
    setFilters(deleteFilter(filters, id))
  }

  return {
    filters,
    filterDogs,
    disabledDelete,
    handleAddFilter,
    handleDeleteFilter,
    handleChange,
  }
}
