import style from './BoxTitle.module.css'

interface BoxTitleProps {
    title: string;
    subtitle?:string;
}

export function BoxTitle({title, subtitle} : BoxTitleProps){

    return (
        <div>
            <h2>{title}</h2>
            {subtitle && <small className={style.subtitle}>{subtitle}</small>}
        </div>
    )
}