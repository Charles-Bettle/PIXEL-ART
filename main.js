
// INITIALISATION DES VARIABLES GLOBALES


var currentColor;


// CREATION DE LA GRILLE


$(function(){
	$('.makeTable').on('click',function creationTableau(){
		demande=prompt("Combien voulez-vous de cases ?"); 
		var creaTableau = document.getElementById('creaTableau');
			for(var i = 0; i < demande; i++)
			creaTableau.appendChild(document.createElement('div'));
		$("#creaTableau > div").on('click',function clicMyDiv(){
			$(this).css("background-color",currentColor); // POURQUOI THIS FAIT DE L UNITE ET PAS LE NOM DE CHEMIN DE LA DIV ?
		});
	});


// REMISE A 0 DE LA GRILLE


	$('.cleanTable').on('click',function remove(){
	$( "#creaTableau > div" ).remove();
	});


// VARIABLE COLOR CHOICE


	$('input[name=buttonShark]').on('click',function(){
	currentColor = $('input#btnShark').css("background-color");
	});

	$('input[name=buttonPurple]').on('click',function(){
	currentColor = $('input#btnPurple').css("background-color");
	});

	$('input[name=buttonRed]').on('click',function(){
	currentColor = $('input#btnRed').css("background-color");
	});

	$('input[name=buttonOrange]').on('click',function(){
	currentColor= $('input#btnOrange').css("background-color");
	});

	$('input[name=buttonYellow]').on('click',function(){
	currentColor = $('input#btnYellow').css("background-color");
	});

	$('input[name=buttonGreen]').on('click',function(){
	currentColor= $('input#btnGreen').css("background-color");
	});

	$('input[name=buttonBlue]').on('click',function(){
	currentColor = $('input#btnBlue').css("background-color");
	});

	$('input[name=buttonBlack]').on('click',function(){
	currentColor = $('input#btnBlack').css("background-color");
	});


});

// §§§§§§§§§§§§§§§§§§§§§§§§§§§

// Algorithm

// je veux ajouter 500 div à la class content-Tableau

// quand j'appuie sur un input couleur, j'enregistre cette couleure dans une variable.
// Du coup au clic sur une div son background devient celui de ma variable. on injecte
// la valeure css de la variable bgColor.. danns une class "recupColor"
// et on vient rechercher celle-ci pour la case

// §§§§§§§§§§§§§§§§§§§§§§§§§§§


// .on()
// .attr(arg)
// .attr(arg,arg2)
// .removeAttr()
// .addClass()
// .removeClass()
// .append()
// .prepend()
// .val() => getter
// .val(arg) => setter
// .next()
// .prev()
// .css()