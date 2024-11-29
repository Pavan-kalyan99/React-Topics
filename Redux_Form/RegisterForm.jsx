import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setName, setGmail, clearForm, validateform, } from './FormSlice'
const RegisterForm = () => {
  const dispatch = useDispatch();
  const { name, gmail, errors, apiError, status } = useSelector((state) => state.form)

  const Handlesubmit = (e) => {
    e.preventDefault();
    dispatch(validateform())
    if (!errors.name && !errors.gmail) {
      console.log('Form::', name, gmail);

      dispatch(clearForm());
    }

  }


  return (
    <div className='border-spacing-1 bg-slate-500'>
      <form onSubmit={Handlesubmit}>
        <div>
          <label>Name:</label>
          <input type='text' value={name} className='p-2 m-1 border-spacing-1'
            onChange={(e) => dispatch(setName(e.target.value))} required
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

        </div>
        <div>
          <label>email:</label>
          <input type='email' value={gmail} className='p-2 m-1 border-spacing-1' required
            onChange={(e) => dispatch(setGmail(e.target.value))}
          />
          {errors.gmail && <div style={{ color: 'red' }}>{errors.gmail}</div>}

        </div>
        <input type='submit' className='mr-2 ml-2 pr-4 pl-4 text-blue-700 text-2xl border-blue-600 text-center bg-red-400' style={{ border: '2px solid green' }} />

        {/* <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting...' : 'Submit'}
        </button>

        {status === 'succeeded' && <div>Form submitted successfully!</div>}
        {apiError && <div style={{ color: 'red' }}>Error: {apiError}</div>} */}
      </form>

    </div>
  )
}

export default RegisterForm
