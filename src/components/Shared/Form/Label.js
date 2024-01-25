import React from 'react'

const Label = ({children}) => {
  return (
    <div>
        <label className="text-sm sm:text-base font-medium text-red-500">
        {children}
         </label>
    </div>
  )
}

export default Label