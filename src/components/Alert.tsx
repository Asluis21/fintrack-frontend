import style from './Alert.module.css';

import { Severity } from "../types/Severity";
import { CiCircleAlert } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { TiWarningOutline } from "react-icons/ti";

interface ErrorAlertProps {
    severity:Severity,
    message: string,
}

const iconSeverity = (severity : Severity) => {
    switch (severity) {
        case Severity.success:
            return <FaRegCheckCircle />
        case Severity.info:
            return <CiCircleAlert />
        case Severity.warning:
            return <TiWarningOutline />
        case Severity.error:
            return <CiCircleAlert />
        default:
            return <CiCircleAlert />
    }
}

const cardColor = (severity : Severity) => {
    switch (severity) {
        case Severity.success:
            return style.successAlert;
        case Severity.info:
            return style.infoAlert;
        case Severity.warning:
            return style.warningAlert;
        case Severity.error:
            return style.errorAlert;
        default:
            return style.infoAlert;
    }
}

export function Alert({severity, message} : ErrorAlertProps){

    return (
        <div className={`p-2 ${cardColor(severity)}`}>
            
            <div className="icon">
                {iconSeverity(severity)}
            </div>

            <div className="message">
                <p>{message}</p>
            </div>
        </div>
    )

}