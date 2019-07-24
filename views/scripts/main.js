import * as client from './client'

const URL = '/command';
const SELECTORS = {
        buttons: [
            '.most-left',
            '.more-left',
            '.left',
            '.right',
            '.more-right',
            '.most-right'
        ],
        zoomInput: 'input',
        zoomForm: 'form',
        zoomIframe: 'iframe'
    }
;

function postMessage(message) {
    return fetch(URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: message
    });
}

function updateMeetingURL(url) {
    document.querySelector(SELECTORS.zoomIframe).src = url;
}

function getInputFieldElement() {
    return document.querySelector(SELECTORS.zoomInput);
}

function initializeActionEventHandlers() {
    SELECTORS.buttons.map((selector) => {
        addEventHandler(selector, 'click', client.createButtonClickHandler(postMessage));
    });
}

function addEventHandler(selector, event, eventHandler) {
    const $element = document.querySelector(selector);
    if ($element) {
        $element.addEventListener(event, eventHandler);
    }
}

function initializeZoomMeetingHandler() {
    addEventHandler(SELECTORS.zoomForm, 'submit', client.createFormSubmitHandler(updateMeetingURL, getInputFieldElement));
}

(function () {
    initializeActionEventHandlers();
    initializeZoomMeetingHandler();
})();