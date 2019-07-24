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
        zoomForm: 'form'
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
    addEventHandler(SELECTORS.zoomForm, 'submit', () => {});
}

(function () {
    initializeActionEventHandlers();
})();