export const post = async (message, postMessage) => {
    const response = await postMessage(message);
    return response;
}

export const getDirectionPayload = event => {
    return JSON.stringify({
        direction: event.target.dataset.action
    });
}

export const createButtonClickHandler = postMessageFunction => {
    return (event) => {
        const action = getDirectionPayload(event);
        post(action, postMessageFunction);
    };
}

export const getZoomMeetingID = event => {
    let zoomMeetingID = '';
    const value = event.target.value;
    return zoomMeetingID || value;
}

export const getZoomMeetingURL = meetingID => {
   return `https://zoom.us/wc/${meetingID}/join`;
}