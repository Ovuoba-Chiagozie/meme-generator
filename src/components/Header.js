import face from "../img/Troll Face.png"

const Header = () => {

    return(

        <header className="header">
            <img src={face}/>
            <h3>Meme Generator</h3>
            <p>Built with React</p>
        </header>

    )

}

export default Header
