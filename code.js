function addParagraphWithMessage() {
    let container = _getElement("paragraphs");
    let paragraph = _createElement("P");
    let message = _getElement("message").value;
    
    if(message) {
        paragraph.appendChild(_createText(message));
        container.appendChild(paragraph);
    }
}

function _getElement(sId) {
    return document.getElementById(sId);
}

function _createElement(sElementCode) {
    return document.createElement(sElementCode);
}

function _createText(sText) {
    return document.createTextNode(sText);
}