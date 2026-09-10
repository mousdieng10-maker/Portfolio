import "./App.css"
import ProgLanguages from "./prog.jsx"

function Header(){
    return(
        <div class="flex">
        <div className="insideCard">
            <h1 id="title"><span className="special">Hi, I'm</span> Mouhamadou Moustapha Dieng</h1>
            <h2 className="me">I'm a Next-Gen Full Stack Developer</h2>
            <h3 className="slogan">Ambitious and Looking to create ingenious systems.</h3>
            <ProgLanguages/>

        </div>
        <img id="ball"src="public/main-removebg-preview.png" alt="soccer ball"></img>

        </div>
        
    )
}

export default Header