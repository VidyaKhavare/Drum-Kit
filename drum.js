var drum = document.querySelectorAll(".kit").length;
var audio = null;

for(var i=0;i<drum;i++){
    document.querySelectorAll(".kit")[i].addEventListener("click",function(){
         var ButtonText=this.innerHTML;
         movefunction(ButtonText);
          ButtonAnimation(ButtonText);
    });


}
document.addEventListener("keypress",function(event){
    movefunction(event.key);
    ButtonAnimation(event.key);
});

function movefunction(key){
    if (audio) {
          audio.pause();
            audio.currentTime = 0; // reset to start
        }
   switch(key){
            case "w":
                audio=new Audio("music/music_w.wav");
                audio.play();
                break;
            case "a":
                audio=new Audio("music/music_a.wav");
                audio.play();
                break;
            case "s":
                audio=new Audio("music/music_s.wav");
                audio.play();
                break;
            case "d":
                audio=new Audio("music/music_d.wav");
                audio.play();
                break;
            case "j":
                audio=new Audio("music/music_j.wav");
                audio.play();
                break;  
            case "k":
                audio=new Audio("music/music_k.wav");
                audio.play();
                break; 
            case "l":
                audio=new Audio("music/music_l.wav");
                audio.play();
                break;
            default:
                console.log("default value"); 

        }
         
}
function ButtonAnimation(currentKey){
    var activationButton=document.querySelector("."+ currentKey);
    activationButton.classList.add("pressed");
    setTimeout(function(){
        activationButton.classList.remove("pressed");

    },100);
}