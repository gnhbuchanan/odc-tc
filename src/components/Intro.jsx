import React, { useEffect, useState } from "react"
import './styles/intro.css'
import asterisk from '../assets/svg/asterisk.svg'
import doubleCaret from '../assets/svg/caret-double.svg'

const Intro = () => {


    return (
        <section id="intro" className='section-wrapper'>
            <div id="headline-container">
                <h1>Women Innovators in Computer Science</h1>
            </div>
            <div id="subhead-container">
                <div id="asterisk-container">
                    <img id="asterisk" src={asterisk} alt={'asterisk'}/>
                </div>

                <div id="subhead-content-container">
                    <p>Women have played a vital role in the field of computer science, developing some of the most essential components of modern IT. Just a few of the achievements women have made include creating the first computer program and advancing human space exploration. Take a deeper dive into some of these contributions below.</p>
                    <button id="learn-more">
                        <h4>Learn More</h4>
                        <img id="double-caret" src={doubleCaret} alt={'double-caret'}/>
                    </button>
                </div>
            </div>
        </section>
    )

}

export default Intro