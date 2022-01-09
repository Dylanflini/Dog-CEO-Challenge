import { ChangeEvent, useEffect, useState } from 'react'
import {
  AddImages,
  getBreed,
  getBreedsList,
  getImagesFiltered,
  getSubBreedsList,
} from '../../aplication/breedUseCases'
import { Breed } from '../../domain/breed'
import { getAllBreeds, getImages } from '../repositories/breeds.repository'

export const useFilterController = () => {
  const [breeds, setBreeds] = useState<Breed[] | undefined>()
  const [currentBreed, setCurrentBreed] = useState('')
  const [currentSubBreed, setCurrentSubBreed] = useState('')

  useEffect(() => {
    getAllBreeds().then(setBreeds)
  }, [])

  useEffect(() => {
    if (breeds && !currentBreed) {
      setCurrentBreed(breeds[0].name)
    }
  }, [breeds])

  useEffect(() => {
    if (currentBreed) {
      setCurrentSubBreed(getSubBreedsList(breeds, currentBreed)[0])
    }
  }, [currentBreed])

  const handleBreedChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setCurrentBreed(event.target.value)

  const handleSubBreedChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setCurrentSubBreed(event.target.value)

  useEffect(() => {
    if (currentBreed) {
      if (getBreed(breeds, currentBreed).images.length === 0) {
        getImages(currentBreed).then((images) =>
          setBreeds(AddImages(breeds, currentBreed, images))
        )
      }
    }
  }, [currentBreed, currentSubBreed])

  return {
    breedList: getBreedsList(breeds),
    subBreedList: getSubBreedsList(breeds, currentBreed),
    handleBreedChange,
    handleSubBreedChange,
    images: getImagesFiltered(breeds, currentBreed, currentSubBreed),
  }
}
