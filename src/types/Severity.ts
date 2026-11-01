export const Severity = {
    success: "success",
    error: "error",
    info: "info",
    warning: "warning",
} as const 

export type Severity = (typeof Severity)[keyof typeof Severity]