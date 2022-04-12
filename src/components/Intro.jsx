import React, { useEffect, useState } from "react"
import './styles/intro.css'
import asterisk from '../assets/svg/asterisk.svg'

const Intro = () => {


    return (
        <section id="intro" className='section-wrapper'>
            <div id="headline-container">
                <h1>Women Innovators in Computer Scienece</h1>
            </div>
            <div id="subhead-container">
                <img style={{height: '30%'}} src={asterisk} alt={'asterisk'}/>
                <div>
                    <p>this is all the subhead text</p>
                    <div>drop down menu</div>
                </div>
            </div>
        </section>
    )

}

export default Intro