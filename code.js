function addParagraphWithMessage() {
    let container = document.getElementById("paragraphs");
    let paragraph = document.createElement("P");
    let message = document.getElementById("message").value;
    
    if(message) {
        paragraph.appendChild(document.createTextNode(message));
        container.appendChild(paragraph);
    }
 
}