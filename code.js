function addTweet() {
    let oTweetContainer = _getElement("paragraphs");
    let oTextP = createParagraph(getTextFromInput());
    let oTimeP = createParagraph(_getTimestamp());
    
    if(getTextFromInput()) {
        let oMessageD = createMessageDiv(oTextP, oTimeP);
        oMessageD.setAttribute("class", "tweet rounded");
        oTweetContainer.appendChild(oMessageD);
        _getElement("message").value = "";
    }
}

function createMessageDiv(oTextParagraph, oTimestampParagraph) {
    let oDiv = _createElement("DIV");
    oDiv.appendChild(oTextParagraph);
    oDiv.appendChild(oTimestampParagraph);
    return oDiv;
}

function createParagraph(sText) {
    let oParagraph = _createElement("P");
    oParagraph.appendChild(_createText(sText));
    return oParagraph;
}

function getTextFromInput() {
    return _getElement("message").value;
}

function _getTimestamp() {
    let oDate = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return oDate.toLocaleDateString("hu-HU", options);
}

// Utility functions
function _getElement(sId) {
    return document.getElementById(sId);
}

function _createElement(sElementCode) {
    return document.createElement(sElementCode);
}

function _createText(sText) {
    return document.createTextNode(sText);
}