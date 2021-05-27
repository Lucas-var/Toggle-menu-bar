//The code is gonna check if we have the navegation opened or closed//

let toggleNavStatus = false // navegation is closed as default, this variable is gonna be hoisted, it's global//

// function that opens and closes the menu when we click on the toggle btn//

let toggleNav = function() {
	let getSidebar = document.querySelector(".nav-sidebar"); //when we get something, we usually use the word get in front of the name. document.querySelector() is used to grab html elements    //
	let getSidebarUl = document.querySelector(".nav-sidebar ul"); 
	let getSidebarTitle = document.querySelector(".nav-sidebar span"); 
	let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); // the query selector only gets one element which is always the first one. To get all of them we use querySelectorAll()//


// this if statement is gonna check if the let toggleNavStatus is equal to false or equal to true//
	if (toggleNavStatus === false) {

		getSidebarUl.style.visibility = "visible"; //style property is built in into JavaScript//
		getSidebar.style.width = "272px";
		getSidebarTitle.style.opacity = "0.5";

		// let arrayLenght = getSidebarLinks.lenght;
		// for (let i = 0; i < arrayLenght; i++) {
		// 	getSidebarLinks[i].style.opacity = "1";
		// }

		toggleNavStatus = true;
	}
	else if (toggleNavStatus === true) {

		getSidebar.style.width = "50px";
		// getSidebarTitle.style.opacity = "0";

		// let arrayLenght = getSidebarLinks.lenght;

		// for (let i = 0; i < arrayLenght; i++) {
		// 	getSidebarLinks[i].style.opacity = "0";
		// }

		getSidebarUl.style.visibility = "hidden";

		toggleNavStatus = false;
	}
}

		
























