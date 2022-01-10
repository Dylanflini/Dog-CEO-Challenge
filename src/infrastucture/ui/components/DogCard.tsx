import { FC, useEffect, useState } from 'react'
import Dog from '../../../domain/dog'
import { getDogImage } from '../../repositories/dogs.repository'

interface DogCardProps {
  dog: Dog
}

export const DogCard: FC<DogCardProps> = ({ dog }) => {
  const [image, setImage] = useState('')
  useEffect(() => {
    if (!dog.image) {
      getDogImage(dog.breed, dog.subBreed).then((image) => {
        setImage(image)
        dog.image = image
      })
    }
  }, [dog.image])

  return (
    <>
      <div data-testid="dog-card" className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{dog.breed}</p>
              <p className="subtitle is-6">{dog.subBreed}</p>
            </div>
          </div>
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              // loading="lazy"
              // className="lazyload"
              // data-src={dog.image || image}
              src={dog.image || image}
              alt={dog.breed + ' ' + dog.subBreed}
            />
          </figure>
        </div>
      </div>
    </>
  )
}
