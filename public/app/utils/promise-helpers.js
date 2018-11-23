export const handleStatus = res => {
    return res.ok ? res.json() : resstatusText;
}

export const log = param => {
    console.log(param)
    return param;
}

export const timeoutPromise = (milliseconds, promise) => {
    const msg = `Limite da promise excedido (limite: ${milliseconds} ms)`;
    const timeout = new Promise((res, rej) => setTimeout(() => rej(msg), milliseconds));
    return Promise.race([promise, timeout]);
}

export const delay = milliseconds => data => new Promise((resolve, reject) => setTimeout(() => resolve(data), milliseconds));

export const retry = (retries, milliseconds, fn) =>
    fn().catch(err => {
        console.log(retries);
        return delay(milliseconds)().then(() => retries > 1 ? retry(--retries, milliseconds, fn) : Promise.reject(err))
    });