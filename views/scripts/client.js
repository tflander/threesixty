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

export const createFormSubmitHandler = (updateMeetingUrlFunction, getInputFieldElement) => {
    return event => {
        event.preventDefault();
        const meetingID = getZoomMeetingID(getInputFieldElement());
        console.log(meetingID);
        if (meetingID) {
            const meetingURL = getZoomMeetingURL(meetingID);
            updateMeetingUrlFunction(meetingURL);
        }
    }
}

export const getZoomMeetingID = target => {
    let zoomMeetingID = '';
    const value = target.value;
    return zoomMeetingID || value;
}

export const getZoomMeetingURL = meetingID => {
    return `https://zoom.us/wc/${meetingID}/join`;
}