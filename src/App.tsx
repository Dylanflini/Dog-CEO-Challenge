import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Filter } from './infrastucture/ui/Filter'

const App: FC = () => {
  const [filterCount, setFilterCount] = useState([1, 2])

  // service

  //

  // const {
  //   currentBreed,
  //   currentSubBreed,
  //   breedList,
  //   subBreedList,
  //   handleBreedChange,
  //   handleSubBreedChange,
  //   photos,
  // } = useDogFilter()

  return (
    <>
      {/* <Nav/> */}
      <Filter />
    </>
  )
}

export default App
