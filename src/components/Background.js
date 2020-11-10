import React from 'react'
import Nav from "./Nav"
import hero from "../hero.png"
import "./Background.css"
import Header from "./Header"
import Resume from "./Resume"

export default function Background() {
    return (
        <div>
            <img src={hero}>
            </img>
            <Nav/>
            <Header/>
            <Resume />
        </div>
    )
}
