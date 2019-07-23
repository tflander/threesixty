export const post = async (message, postMessage) => {
    const response = await postMessage(message);
    return response;
}

export const getDirection = (event) => {
    return event.target.dataset.action;
}

export const createButtonClickHandler = (postMessageFunction) => {
    return (event) => {
        const action = getDirection(event);
        post(action, postMessageFunction);
    };
}