import { useId } from "react";

interface EmailInputProps {
    inputDisable:boolean,
    value:string,
    onChange: (value: string) => void;
    autoFocus:boolean
}

export function EmailInput({inputDisable, value, onChange, autoFocus}:EmailInputProps){

    const id = useId();

    return (
        
        <div className="my-3">
            <label className="form-label" htmlFor={id+'email'}>Email</label>
            <input 
                className="form-control"
                name="email"
                id={id}
                autoComplete="email"
                onChange={e => onChange(e.target.value)}
                value={value}
                type="email"
                placeholder="you@example.com"
                required
                autoFocus={autoFocus}
                aria-describedby={id}
                disabled={inputDisable}/>
        </div>
    )
}