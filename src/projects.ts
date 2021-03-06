export class Projects{
  constructor(public currentMode: string) {
    this.currentMode = "none"
  }

  openModal(type: string){
    let modal = document.getElementById("modal")
    let cur = document.getElementById(type)
    modal.classList.remove("hideModal")
    cur.classList.remove("hideModal")
    cur.classList.add("showModal")
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
    
    console.log(this.currentMode)
    ex.addEventListener("click", () =>{
      let cur = document.getElementById(this.currentMode)
      cur.classList.add("hideModal")
      modal.classList.add("hideModal")
      cur.classList.remove("showModal")
      
    })
  }


  start(){

    this.projectButtons();
    this.closeButton();
    
  }
}
