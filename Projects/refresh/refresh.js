		window.onload = rndmImg;
		var img = ["bear.jpg", "cat.jpg", "fox.jpeg", "panda.jpg", "sloth.jpg", "zebra.jpg"]
		var cap = ["Bear", "Cat", "Fox", "Panda", "Sloth","Zebra"]

	function rndmImg(){
		var rndm = Math.floor(Math.random()* img.length);
		document.getElementById('cluster').src = img[rndm];
		document.getElementById("figcaption").innerHTML = cap[rndm]


}
