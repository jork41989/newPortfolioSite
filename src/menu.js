class Menu{
  constructor(){
    this.currentPage = "about"
  }

  pageSwitch(selected){
    let cur = document.getElementById(this.currentPage)
    let select = document.getElementById(selected)
    cur.classList.remove()
  }

  pageButtons(){
    let about = document.getElementById("about")
    let projects = document.getElementById("projects")
    let skills = document.getElementById("skills")
    let resume = document.getElementById("resume")

    about.addEventListener("click", () => {
      console.log("about")
    })

    projects.addEventListener("click", () => {
      console.log("Projects")
    })

    skills.addEventListener("click", () => {
      console.log("skills")
    })

    resume.addEventListener("click", () =>{
      console.log("resume")
    })
  }

  start(){
    this.currentPage = "about"
    this.pageButtons();
  }

}

module.exports = Menu;