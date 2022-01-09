import { useEffect, useState } from 'react'
import { create } from './domain/filterDogModel'

export function useDogFilter() {
  const [all, setAll] = useState({})
  const [breeds, setBreeds] = useState([])
  const [subBreeds, setSubBreeds] = useState([])
  const [currentBreed, setCurrentBreed] = useState()

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data.message)
        console.log('data: ', [...Object.keys(data.message)])
        setBreeds([...Object.keys(data.message)])
        setAll(data.message)
        setSubBreeds(data.message)
      })
  }, [])

  const filter = create(['raza 1', 'raza 2'], ['sub raza 1', 'sub raza 2'])

  return {
    breedList: breeds,
    subBreedList: all[breeds[0]],
    currentBreed: breeds[0],
    currentSubBreed: filter.currentSubBreed,
    handleBreedChange: (event) => {},
    handleSubBreedChange: (event) => {},
    photos: [],
  }
}
