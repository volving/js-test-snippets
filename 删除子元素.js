var myNode = document.getElementById("foo");
while (myNode.firstChild) {
	myNode.removeChild(myNode.firstChild);
}