import { FC } from 'react'
import { useFilterController } from './useFilterController'

export const Filter: FC = () => {
  const {
    breedList,
    subBreedList,
    handleBreedChange,
    handleSubBreedChange,
    images,
  } = useFilterController()

  console.log({ images })

  return (
    <>
      <div className="select is-multiple">
        <select multiple size={8} onChange={handleBreedChange}>
          {breedList.map((breed, index) => (
            <option key={breed + index}>{breed}</option>
          ))}
        </select>
      </div>
      {subBreedList.length > 0 && (
        <div className="select">
          <select onChange={handleSubBreedChange}>
            {subBreedList.map((subBreed, index) => (
              <option key={subBreed + index}>{subBreed}</option>
            ))}
          </select>
        </div>
      )}
      <button className="button">Agregar Filtro</button>
      <figure className="image is-128x128">
        <img src={images[0]} />
      </figure>

      {/* {photos.map((url, index) => (
        <figure className="image is-128x128">
          <img loading="lazy" className="lazyload" key={url + index} data-src={url} />
        </figure>
      ))} */}
    </>
  )
}

// export default App
