
function Link({name}){
    return(<a href={name}>{name}</a>)
}

function NavLink(){
    const sections = ["About Me","Languages","Projects","Skills","Education"]
    return(
        <div className="right-nav">
            {sections.map(section => <Link key={section} name={section}/> )}
        </div>
    )
}

export default NavLink 
