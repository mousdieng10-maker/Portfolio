import "./App.css"

function Tag({name}){
    return(
        <span className="tag">{name}</span>

    )
}

function ProgLanguages(){
    const languages = ["Python", "HTML", "CSS", "Javascript","React","PLTW C","SQL"]
    return(
        <div className="langs">
            {languages.map(language => <Tag key={language} name={language}/>)}
        </div>
    )

}

export default ProgLanguages 
