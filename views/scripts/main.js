import * as client from './client'

const URL = '/command';
const SELECTORS = [
    '.more-left',
    '.left',
    '.right',
    '.more-right',
];

function postMessage(message) {
    return fetch(URL, {
        method: 'POST',
        body: message
    });
}

(function () {
    SELECTORS.map((selector) => {
        const $element = document.querySelector(selector);
        if ($element) {
            $element.addEventListener('click', client.createButtonClickHandler(postMessage));
        }
    });
})();