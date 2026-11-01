import type { ReactNode } from "react";
import style from "./Box.module.css";

interface BoxProps {
    children: ReactNode;
}

export function Box({children} : BoxProps){

    return (
        <div className={`${style.box} gap-4 p-3 `}>
            {children}
        </div>
    )
}