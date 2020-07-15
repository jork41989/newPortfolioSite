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
      this.openModal("quack");
    })
    cumulus.addEventListener("click", () => {
      this.openModal("cumulus");
    })
    actionb.addEventListener("click", () => {
       this.openModal("actionb");
    })
    
  }

  closeButton(){
    let ex = document.getElementById("closeModal")
    let modal = document.getElementById("modal")
    ex.addEventListener("click", () =>{

      modal.classList.add("hideModal")
    })
  }


  start(){

    this.projectButtons();
    this.closeButton();
    
  }
}


module.exports = Projects;