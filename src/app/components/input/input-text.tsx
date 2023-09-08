import React, { useState } from 'react'

// Some of these could be the wrong type - was in a rush
interface InputTextProps {
  labelTitle?: string,
  labelStyle?: string,
  type?: string,
  containerStyle?: string,
  defaultValue?: string,
  disabled?: boolean,
  placeholder?: string,
  updateFormValue?: any,
  updateType?: string,
}

const InputText: React.FC<InputTextProps> = ({ labelTitle, labelStyle, type, containerStyle, defaultValue, disabled, placeholder, updateFormValue, updateType }) => {
    const [value, setValue] = useState(defaultValue)

    const updateInputValue = (val:string) => {
        setValue(val)
        updateFormValue({updateType, value : val})
    }

    return(
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input disabled={disabled || false} type={type || "text"} value={value} placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)}className="input  input-bordered w-full " />
        </div>
    )
}

export type {
  InputTextProps,
}

export {
    InputText,
}

export default InputText;