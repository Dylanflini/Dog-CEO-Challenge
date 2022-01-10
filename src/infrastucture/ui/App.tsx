import { FC } from 'react'
import { DogCard } from './components/DogCard'
import { FilterInput } from './components/FilterInput'
import { Nav } from './components/Nav'
import { PrimaryButton } from './components/PrimaryButton'
import { useFilterController } from './hooks/useFilterController'

const App: FC = () => {
  const {
    filters,
    filterDogs,
    disabledDelete,
    handleAddFilter,
    handleDeleteFilter,
    handleChange,
  } = useFilterController()

  return (
    <>
      <Nav />
      {filters.map((filter, index) => {
        return (
          <FilterInput
            key={index}
            type={filter.type}
            id={filter.id}
            disabledDelete={disabledDelete}
            handleAddFilter={handleAddFilter}
            handleDeleteFilter={handleDeleteFilter}
            handleChange={handleChange}
          />
        )
      })}

      <div className="primary-button-container">
        <div className="">
          <PrimaryButton onClick={() => handleAddFilter('breed')}>
            add breed
          </PrimaryButton>
        </div>
        <div className="">
          <PrimaryButton onClick={() => handleAddFilter('subBreed')}>
            add sub breed
          </PrimaryButton>
        </div>
      </div>

      <div className="container">
        <div className="grid-container">
          {filterDogs.map((filterDog) => (
            <DogCard key={filterDog.id} dog={filterDog} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
