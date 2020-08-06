export class Content {
  constructor() {
    this.startAbout = this.startAbout.bind(this)
  }

  startAbout(){
    let aboutPhoto = document.getElementById("profilePhoto")
    let aboutText = document.getElementById("aboutText")
    let aboutHeader = document.getElementById("aboutHeader")
    setTimeout(()=> {
      aboutPhoto.classList.add("fadeMe")
      aboutText.classList.add("fadeMe")
      aboutHeader.classList.add("fadeMe")
    }, 500)
  }

}

// module.exports = Content