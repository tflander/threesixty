export const log = (logger) => {
    logger('hello world');
}

export const post = async (message, postMessage) => {
    const response = await postMessage(message);
    return response;
}