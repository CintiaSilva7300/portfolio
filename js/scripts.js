
function openNav() {
console.log("alooouuu")
	var x = document.getElementById("navigation"); //pegando o elemento com o id navigation

	if (x.className === "navigation") { //se a classe for igual a navigation
		x.className += " menujs"; //adiciona a classe menujs
		document.getElementById("threeline-icon").innerHTML = "&Cross;" //adiciona o icone cross
     }else { //senao
     	x.className = "navigation" //adiciona a classe navigation
     	document.getElementById("threeline-icon").innerHTML = "&#9776;"  //adiciona o icone #9776
     }
}