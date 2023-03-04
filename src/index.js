import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MemeGenerator from "./components/Meme-generator";
let example = document.getElementById('root')
let root = ReactDOM.createRoot(example)

const App = () => {

    return(

        <div className="app">

            <Header />
            <MemeGenerator />
           
        </div>
    )

}

root.render(<App />)




