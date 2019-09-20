

var button = document.querySelector("#burgerButton");
var burgerCon = document.querySelector("#burgerCon");

function openMenu() {
    burgerCon.classList.toggle("slideToggle");
	button.classList.toggle("expanded");
}

function closeMenu() {
    if (window.matchMedia("(min-width: 640px)").matches && burgerCon.classList.contains('slideToggle') ) {
		console.log("media query fired");
		burgerCon.classList.remove('slideToggle');
		button.classList.remove('expanded');
    }

}

    button.addEventListener("click", openMenu, false);

    window.addEventListener("resize", closeMenu);



    import People from "./modules/dataObject.js";


    const bioInfo = document.querySelector('.wrapper-content').children;
    function showTeamData(){
        // change data on the page here

        // this is the label on the button
        let currentMember = this.textContent;

        // this refers to the heading tag (the first child of the bio-wrapper div)
        bioInfo[0].textContent = People[currentMember].name;
        // this refers to the paragraph tag (the second child of the bio-wrapper div)
        bioInfo[1].textContent = People[currentMember].position;

        bioInfo[2].textContent = People[currentMember].description;

        bioInfo[3].textContent = People[currentMember].motto;



        bioInfo[4]. src = `images/${People[currentMember].photo}`;
        // bioInfo[2]. src = `images/${Person.avator}`;
    }


    for (let name in People) {
        console.log(name);

        // create a button for every name(every entry) in our object
        let teamButton = document.getElementsByClassName('avatar');

        // set the button's label (text) to the name name (the current entry in the object)
        teamButton.textContent = name;
        
        // add some event handling so that when we click one of our new buttons, we can show the right data
        teamButton.addEventListener('click', showTeamData);

        // add the button to the top of our web page
        document.querySelector("#portfolio").appendChild(teamButton);
    }
 
    
