import { Content } from "../src/content"
import { Menu } from "../src/menu"
import { Projects } from "../src/projects"

export class Startup{
  constructor( public started?: boolean, public i?: number){
    this.started = false;
    this.i = 0
    this.goForLaunch = this.goForLaunch.bind(this)
    
  }

  

  goForLaunch(){
    this.openingCrawl()
    if (this.started) console.log("is anyone there?")
    

  }
  
  openingCrawl(){
    let openingDiv = document.getElementById("opening")
    let openingText = document.getElementById("openingText")
    let openingTextDiv = document.getElementById("openingTextDiv")
    let openingTextP = document.getElementById("openingText")
    
    if (!this.started) {
      let message = "Welcome To JordanAckerman.com"
      let mesSplit = message.split("")
      let timeout = 200;
      mesSplit.forEach(char => {

        setTimeout(() => {
          openingText.innerHTML += char;
          if(message === openingText.innerHTML) {
            this.started = true
            setTimeout(()=>{
              openingDiv.classList.add("hideMe")
              openingTextDiv.classList.add("hideMe")
              openingTextP.classList.add("hideMe")
              const content = new Content()
              content.startAbout()
              const MenuMain = new Menu()
              MenuMain.start()
              
            }, 2000)
          }
        }, timeout)
        timeout += 200
      })

    }
    if (this.started) console.log("is anyone there?")

    
  }


}
