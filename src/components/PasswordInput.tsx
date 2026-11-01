import style from "./PasswordInput.module.css";

import { useId } from "react"

interface PasswordInputProps {
    label?:string
    forgotPassEnabled:boolean,
    value:string,
    loading:boolean,
    placeholder:string,
    onChange: (value:string) => void,
}

export function PasswordInput({forgotPassEnabled, value, loading, onChange, placeholder, label}:PasswordInputProps){

    const id = useId();

    return (
        <div className={`${style.passwordInput} my-3`}>

            <div className={`${style.passwordLabel}  d-flex justify-content-between`}>
                <label className="form-label" htmlFor={id}>{label ? label : "Password"}</label>
                {forgotPassEnabled && <a href="#">Forgot password?</a>} 
            </div>
            <input
                className="form-control"
                id={id}
                name="password"
                autoComplete="current-password"
                onChange={e => onChange(e.target.value)}
                type="password"
                value={value}
                placeholder={placeholder}
                disabled={loading}
                aria-describedby={`id-${id}`}
                required/>
        </div>
    )

}