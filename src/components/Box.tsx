import type { ReactNode } from "react";
import style from "./Box.module.css";

interface BoxProps {
    children: ReactNode;
}

export function Box({children} : BoxProps){

    return (
        <div className={`${style.box} gap-4 py-5 px-4 m-3`}>
            {children}
        </div>
    )
}