import { nanoid } from 'nanoid'

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select name={name} id={name} value={value} onChange={handleChange} className='form-select'>
        {list.map((itemValue) => {
          const id = nanoid()
          return <option key={id} value={itemValue}>
            {itemValue}
          </option>
        })}
      </select>
    </div>
  )
}
export default FormRowSelect