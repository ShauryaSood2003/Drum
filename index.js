let val = document.querySelectorAll(".drum").length;
for (let i = 0; i < val; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let x=this.innerHTML;
    makeSound(x);
    buttonAnimation(x);
  });

}
document.addEventListener("keydown",function(event){
  let y=event.key;
  makeSound(y);
  buttonAnimation(y);
});

function makeSound(key){
  {
    switch (key) {
      case "w":
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "k":
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "l":
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default:

    }

  }
}
function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },100);
}
