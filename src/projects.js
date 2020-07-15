class Projects{
  constructor() {
    this.currentMode = "none"
  }

  openModal(type){
    let modal = document.getElementById("modal")
    let cur = document.getElementById(type)
    modal.classList.remove("hideModal")
    cur.classList.remove("hideModal")
    this.currentMode = type;

  }

  projectButtons(){
    let quack = document.getElementById("quackPreviewDiv");
    let cumulus = document.getElementById("cumulusNotePreviewDiv");
    let actionb = document.getElementById("actionBoxPreviewDiv");


    quack.addEventListener("click", () =>{
      this.openModal("quackProjectDiv");
    })
    cumulus.addEventListener("click", () => {
      this.openModal("cumulusNoteProjectDiv");
    })
    actionb.addEventListener("click", () => {
       this.openModal("actionBoxProjectDiv");
    })
    
  }

  closeButton(){
    let ex = document.getElementById("closeModal")
    let modal = document.getElementById("modal")
    let cur = document.getElementById(this.currentMode)
    ex.addEventListener("click", () =>{

      modal.classList.add("hideModal")
      cur.classList.add("hideModal")
    })
  }


  start(){

    this.projectButtons();
    this.closeButton();
    
  }
}


module.exports = Projects;