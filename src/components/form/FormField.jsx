import React from 'react'

const FormField = ({ keyValue, title, fieldUpdate = () => {}, colSpan, error = "", type = "text" }) => {
  return (
    <div className={`flex flex-col gap-1 ${+ colSpan === 1 ? "sm:col-span-1" : "sm:col-span-2"}`}>
        <label>{title}</label>
        <input onChange={(e) => {fieldUpdate(keyValue, e.target.value)}} type={type} className='rounded-lg border py-2 px-4' />
        <p className={error === "" ? "hidden" : "text-red-500 text-sm"}>{error}</p>
    </div>
  )
}

export default FormField