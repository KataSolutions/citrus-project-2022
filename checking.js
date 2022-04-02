//const myDiv = document.getElementsByClassName('')[0]
//const parent = myDiv.parentNode;
//parent.removeChild(myDiv);
var xpath = "//span[text()='Code Scanner']";
var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
console.log(matchingElement.value)