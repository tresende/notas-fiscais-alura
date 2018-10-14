export const handleStatus = res => {
    return res.ok ? res.json() : resstatusText;
}

export const log = param => {
    console.log(param)
    return param;
}