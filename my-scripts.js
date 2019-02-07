var myList = (JSON.parse(localStorage.getItem("myData")) || [])

function createItem() {
	var newItem = {text:window.prompt("Your new item prompt goes here"), style:"none"}
	myList.push(newItem)
	localStorage.setItem("myData", JSON.stringify(myList))
	printItem(newItem)
}

function printItem(item) {
	p = document.createElement("p")
	p.innerHTML = item.text
	p.className = item.style
	p.onclick = function () {
		this.className = item.style = (this.className=="none") ? "strike" : "invisible"
		localStorage.setItem("myData", JSON.stringify(myList))
	}
	document.getElementById("myDiv").appendChild(p)
}

for (x=0; x < myList.length; x++) {printItem(myList[x])}
