import React, { useState } from 'react'

interface TextareaInputProps {
    labelTitle?: string;
    labelStyle?: string;
    type?: string;
    containerStyle?: string;
    defaultValue?: string;
    placeholder?: string;
    updateFormValue: (value: any) => void;
    updateType?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType }) => {
    const [value, setValue] = useState(defaultValue)

    const updateInputValue = (val: string) => {
        setValue(val)
        updateFormValue({updateType, value : val})
    }

    return(
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <textarea value={value} className="textarea textarea-bordered w-full" placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)}></textarea>
        </div>
    )
}

export type {
  TextareaInputProps,
}

export {
  TextareaInput,
}

export default TextareaInput;