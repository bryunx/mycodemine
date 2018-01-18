function Jeans(style, description, stock, image) {
	this.style = style;
	this.description = description;
	this.stock = stock;
	this.image = image;
}

var jeansArray = []

var skinny = new Jeans('Skinny', 'Sits below waist, skinny leg from hip to ankle', 50, 'img/skinny.png')
var slim = new Jeans('Slim', 'A slim modern fit with comfortable room to move', 51, 'img/slim.png')
var taper = new Jeans('Taper', 'A modern and refined fit with a tapered leg', 52, 'img/taper.png')
var straight = new Jeans('Straight', 'The classic and cut straight all the way', 53, 'img/straight.png')
var bootcut = new Jeans('Bootcut', 'Slim through the thigh with a classic bootcut', 54, 'img/bootcut.png')
var relaxed = new Jeans('Relaxed', 'A comfortable classic with a little more room', 51, 'img/relaxed.png')

jeansArray.push(skinny, slim, taper, straight, bootcut, relaxed)

for(i = 0; i < jeansArray.length; i++) {
	var jStyle = document.createTextNode(jeansArray[i].style)
	var jDescription = document.createTextNode(jeansArray[i].description)
	var jStock = document.createTextNode("In Stock: " + jeansArray[i].stock)
	var jButton = document.createTextNode("Buy Now!")
	var jImage = jeansArray[i].image

	var newCol= document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var styleH1 = document.createElement("H1")
	var stockH4 = document.createElement("H4")
	var descriptionH4 = document.createElement("H4")
	var buyNow = document.createElement("BUTTON")
	var image = document.createElement("IMG")

	styleH1.appendChild(jStyle)
	descriptionH4.appendChild(jDescription)
	stockH4.appendChild(jStock)
	buyNow.appendChild(jButton)
	buyNow.className = "btn btn-primary btn-lg"
	image.src = jImage
	image.className = "img-responsive"

	newCol.className = "col-sm-4"
	newDiv.className = "jeans jeansName" + i + " thumbnail"
	newDiv.appendChild(styleH1)
	newDiv.appendChild(image)
	newDiv.appendChild(descriptionH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById("jeans").appendChild(newCol)
}