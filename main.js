// CREATION DE LA GRILLE


$(function(){
	$('.makeTable').on('click',function creationTableau(){
		demande=prompt("Combien voulez-vous de cases ?"); 
		var creaTableau = document.getElementById('creaTableau');
			for(var i = 0; i < demande; i++)
			creaTableau.appendChild(document.createElement('div'));
	
		$("#creaTableau > div").on('click',function clicMyDiv(){
			$(this).addClass('divReference');  // POURQUOI THIS FAIT DE L UNITE ET PAS LE NOM DE CHEMIN DE LA DIV ?
		});
	});


// REMISE A 0 DE LA GRILLE


	$('.cleanTable').on('click',function remove(){
	$(creaTableau).removeAttr('id');
	});


// VARIABLE COLOR CHOICE


	$('input[name=buttonShark]').on('click',function(){
	var recupColorShark = $('input#btnShark').css("background-color");
	$('.divReference').css("background-color",recupColorShark);
    });

	$('input[name=buttonPurple]').on('click',function(){
	var recupColorPurple = $('input#btnPurple').css("background-color");
	$('.divReference').css("background-color",recupColorPurple);
    });

	$('input[name=buttonRed]').on('click',function(){
	var recupColorRed = $('input#btnRed').css("background-color");
	$('.divReference').css("background-color",recupColorRed);
    });

	$('input[name=buttonOrange]').on('click',function(){
	var recupColorOrange = $('input#btnOrange').css("background-color");
	$('.divReference').css("background-color",recupColorOrange);
    });

	$('input[name=buttonYellow]').on('click',function(){
	var recupColorYellow = $('input#btnYellow').css("background-color");
	$('.divReference').css("background-color",recupColorYellow);
    });

	$('input[name=buttonGreen]').on('click',function(){
	var recupColorGreen = $('input#btnGreen').css("background-color");
	$('.divReference').css("background-color",recupColorGreen);
    });

	$('input[name=buttonBlue]').on('click',function(){
	var recupColorBlue = $('input#btnBlue').css("background-color");
	$('.divReference').css("background-color",recupColorBlue);
    });

	$('input[name=buttonBlack]').on('click',function(){
	var recupColorBlack = $('input#btnBlack').css("background-color");
	$('.divReference').css("background-color",recupColorBlack);
    });


// VARIABLE CELLULE DE LA GRILLE


});




// je veux ajouter 500 div à la class content-Tableau

// quand j'appuie sur un input couleur, j'enregistre cette couleure dans une variable.
// Du coup au clic sur une div son background devient celui de ma variable. on injecte
// la valeure css de la variable bgColor.. danns une class "recupColor"
// et on vient rechercher celle-ci pour la case


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




