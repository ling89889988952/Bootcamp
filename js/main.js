

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

    const wangButton = document.querySelector("#wang"),
          xiaButton = document.querySelector("#xia"),
          chenButton = document.querySelector("#chen"),
          zouButton = document.querySelector("#zou");


    function showTeamData(){
        let currentMember = this.id;
        document.getElementById("name").textContent = People[currentMember].name;
        document.getElementById("position").textContent = People[currentMember].position;
        document.getElementById("description").textContent = People[currentMember].description;
        document.getElementById("motto").textContent = People[currentMember].motto;
        document.getElementById("big-photo").src = People[currentMember].photo;
    }

    wangButton.addEventListener("click", showTeamData, false);
    xiaButton.addEventListener("click", showTeamData, false);
    chenButton.addEventListener("click", showTeamData, false);
    zouButton.addEventListener("click", showTeamData, false);
    
    
 

    const 
          promotionVideo = document.querySelector('.pro-video'), 
          pauseButton = document.querySelector(".pauseButton"),
          playButton = document.querySelector(".playButton"),
          rewind = document.querySelector(".rwButton"),
          volumeBar = document.querySelector('.volume-bar');

          function pauseVideo() {
            promotionVideo.pause();
        
          }
        
          function playVideo() {
            promotionVideo.play();
          }
        

            function rewindVideo() {
                promotionVideo.currentTime = 0;
                playVideo();
              }
        
            function changeVolume() {
                video.volume = volumeBar.value;
            }


            pauseButton.addEventListener("click", pauseVideo);
            playButton.addEventListener("click", playVideo);
            rewind.addEventListener("click", rewindVideo);
	        volumeBar.addEventListener('change', changeVolume);