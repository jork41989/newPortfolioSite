export class Menu{
  constructor(public currentPage?: string){
    this.currentPage = "about"
  }

  pageSwitch(selected: string){
    let cur = document.getElementById(this.currentPage);
    let select = document.getElementById(selected);
    let curBody = document.getElementById(`${this.currentPage}Main`)
    let selectedBody  = document.getElementById(`${selected}Main`)
    let selectedFoot = document.getElementById("footBranch")
    cur.classList.remove("selectedMenu");
    cur.classList.add("notSelectedMenu");
    select.classList.add("selectedMenu");
    select.classList.remove("notSelectedMenu");
    curBody.classList.add("hidden")
    selectedBody.classList.remove("hidden")
    selectedFoot.innerText = selected
    this.currentPage = selected
  }

  pageButtons(){
    let about = document.getElementById("about")
    let projects = document.getElementById("projects")
    let skills = document.getElementById("skills")
    let resume = document.getElementById("resume")

    about.addEventListener("click", () => {
      this.pageSwitch("about")
    })

    projects.addEventListener("click", () => {
      this.pageSwitch("projects")
    })

    skills.addEventListener("click", () => {
      this.pageSwitch("skills")
    })

    resume.addEventListener("click", () =>{
      this.pageSwitch("resume")
    })
  }

  start(){
    this.currentPage = "about"
    this.pageButtons();
  }

}
