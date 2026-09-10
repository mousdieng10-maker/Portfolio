
import Header from "./header.jsx"
import NavLink from "./nav.jsx"
import Projects from "./proj.jsx"

import './App.css'

function App() {

  return (
    <div className="home">
      <nav>
        <div className="left-nav">
          <span>MoustaphaDev    </span> 

          <div>
            <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://x.com"><i class="fa-brands fa-square-x-twitter"></i></a>
          <a href="https://youtube.com"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://mail.google.com/mail/u/3/#inbox?compose=CllgCKCBkhcknLpHZhTCKhLwxjhmHLxLJgHlrVPcTlQGBKkDxmwScxXQSdNGBMlwGHcWmzGjQjq"><i class="fa-regular fa-envelope"></i></a>
          </div>
          
        </div>
        <div className="right-nav">
          <NavLink/>
        </div>
      </nav>
      <div className="main">
        <Header/>
        <br></br>
        <br></br>
        <Projects/>
        <footer>

      </footer>

      </div>
      
    </div>
  )
}

export default App
