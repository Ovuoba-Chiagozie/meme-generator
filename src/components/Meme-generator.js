import React from "react"
let MemeGenerator = () => {

    let [meme, setMeme] = React.useState(
        { topText:'',
          bottomText:'',
          randomImage:'https://i.imgflip.com/30b1gx.jpg',  

        }
    )

    let [allMemes,setAllMemes] = React.useState([])


React.useEffect(() => {
     fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json() )
    .then( Api => { setAllMemes(Api.data.memes)
console.log(Api)   
                  }
        )

},[meme.randomImage])



let handleChange = (event) => {
let {name,value} = event.target
    setMeme(prevState => {

        return{...prevState,[name]: value}

    })

}

let randomurl = () => { 

    let memesArray = allMemes
    let Image = memesArray[Math.floor(Math.random() * memesArray.length)].url
    console.log(Image)
    setMeme(prevState => {

        return {...prevState, randomImage: Image}

    })
    
          
    }

    return(

        <div className="generator">
            
            <input 
            className="generator--first_input"
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
             />
            <input 
            className="generator--second_input"
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
            <button className="generator--button"onClick={randomurl}> Get a new meme image 🎈</button>
            <div className="meme">
            <img className="generator--img" src={meme.randomImage} />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>

    )

}

export default MemeGenerator