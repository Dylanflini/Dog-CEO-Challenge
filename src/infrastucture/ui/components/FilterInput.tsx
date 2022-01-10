import { FC } from 'react'

interface FilterProps {
  type: string
  handleAddFilter: (type: string) => void
  id: string
  handleChange: (id: string, type: string) => void
  handleDeleteFilter: (id: string) => void
  disabledDelete: boolean
}

export const FilterInput: FC<FilterProps> = ({
  type,
  handleAddFilter,
  handleDeleteFilter,
  id,
  handleChange,
  disabledDelete,
}) => {
  return (
    <>
      <div className="filter-container">
        <div style={{ width: '100%' }} >
          <div className="field ">
            <div className="field-label is-normal">
              <label style={{ width: 'min-content' }} className="label">
                {type}
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control"></p>
                <input
                  // placeholder={'type a dog' + type}
                  className="input"
                  onChange={(e) => handleChange(id, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="is-centered delete-button">
          <button
            onClick={() => handleDeleteFilter(id)}
            style={{width: '10rem'}}
            className="button is-danger"
            disabled={disabledDelete}
          >
            delete {type}
          </button>
        </div>
      </div>
    </>
  )
}
