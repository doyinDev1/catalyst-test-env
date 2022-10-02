/* eslint-disable eqeqeq */
export const getSevenDays = (string) => {
    const date = new Date(Date.now() - string * 24 * 60 * 60 * 1000)
    return date
}
export const today = () => {
    const date = new Date(Date.now())
    return date
}

export const getMonths = (string) => {
    if (string == 7) {
        const date = new Date(Date.now() - string * 24 * 60 * 60 * 1000)
        return date
    }
    if (string == 1) {
        const date = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        return date
    }
    if (string == 2) {
        const date = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
        return date
    }
    if (string == 3) {
        const date = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
        return date
    }
    if (string == 6) {
        const date = new Date(Date.now() - 30 * 6 * 24 * 60 * 60 * 1000)
    return date
    }
    if (string == 12) {
        const date = new Date(Date.now() - 30 * 12  * 24 * 60 * 60 * 1000)
        return date
    }
   
}