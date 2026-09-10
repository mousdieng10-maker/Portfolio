import {useState, useEffect} from "react"

function Tag({name}){
    return(
        <span className="tag">
            {name}
        </span>
    )
}
function LinkGithub({link}){
    return(
        <span className="repo"><h3>Repo here: </h3><a href={link}> <i className="fa-brands fa-github"></i></a></span>
    )
}
function IndProj({projChar}){
    const projStack = projChar.language_tech;
    const githubLink = projChar.github;
    return(
        
        <div className="ProjCard">
            <h2>{projChar.project}</h2>
            <img src={projChar.img} width="300em" height="150em"></img>
            <div className="Meta">
                <div className="wrap">
                    {projStack.map(stack => <Tag key={stack} name={stack}/>)}
                </div>
                
                <h3>{projChar.desc}</h3>
                <div className="gitLinkSection">
                    <LinkGithub link={projChar.github}></LinkGithub>
                </div>
            </div>
        </div>
        
    )
}
function Projects(){
    const [projList, setprojList] = useState([]);

    useEffect(()=>{
        async function Load(){
            let response = await fetch("src/projects.json")
            let data = await response.json();
            console.log(data)
            setprojList(data)
        }
        Load()
    },[])
    
    return(
        <>

            <h1 class="project-section">Projects</h1>
            <div class="scroll">
                {projList.map(proj => <IndProj projChar={proj}/> )}

            </div>
        </>
        
    )
}

export default Projects