import React, { useState } from "react"

interface ToogleInputProps {
  labelTitle?: string,
  labelStyle?: string,
  type?: string,
  containerStyle?: string,
  defaultValue?: boolean,
  placeholder?: string,
  updateFormValue?: any,
  updateType?: string
}

const ToogleInput: React.FC<ToogleInputProps> = ({ labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType }) => {

    const [value, setValue] = useState(defaultValue)

    const updateToogleValue = () => {
        setValue(!value)
        updateFormValue({updateType, value : !value})
    }

    return(
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label cursor-pointer">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
                <input type="checkbox" className="toggle" checked={value}  onChange={(e) => updateToogleValue()}/>
            </label>
        </div>
    )
}

export type {
    ToogleInputProps,
}

export {
    ToogleInput,
}

export default ToogleInput;