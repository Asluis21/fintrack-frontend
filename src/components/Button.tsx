import style from "./Button.module.css"

interface ButtonProps{
    loading:boolean,
    maxWith:boolean,
    text:string,
    loadingTextMode:string,
}

export function Button({loading, maxWith, text, loadingTextMode}:ButtonProps){

    return (
        <button className={`btn ${style.btnSuccess} ${maxWith ? 'w-100' : style.defaultWith}`} type="submit" disabled={loading}>
            {loading ? loadingTextMode : text}
        </button>
    )
}