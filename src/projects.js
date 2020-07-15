class Projects{
  constructor() {
    this.currentMode = "none"
  }

  openModal(type){
    let modal = document.getElementById("modal")
    modal.classList.remove("hideModal")
  }

  projectButtons(){
    let quack = document.getElementById("quackPreviewDiv");
    let cumulus = document.getElementById("cumulusNotePreviewDiv");
    let actionb = document.getElementById("actionBoxPreviewDiv");


    quack.addEventListener("click", () =>{
      console.log("quack")
      this.openModal("quack");
    })
  }


  start(){
    console.log("hello");
    this.projectButtons();
    
  }
}


module.exports = Projects;