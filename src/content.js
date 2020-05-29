class Content {
  constructor() {
    this.startAbout = this.startAbout.bind(this)
  }

  startAbout(){
    let aboutPhoto = document.getElementById("profilePhoto")
    let aboutText = document.getElementById("aboutText")
    setTimeout(()=> {
      aboutPhoto.classList.add("fadeMe")
      aboutText.classList.add("fadeMe")
    }, 500)
  }

}

module.exports = Content