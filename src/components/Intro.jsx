import React, { useEffect, useState } from "react"
import './styles/intro.css'
import {gsap} from "gsap"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import asterisk from '../assets/svg/asterisk.svg'
import {DoubleCaret} from '../assets/svg/reactComponentSVG/caret-double'
gsap.registerPlugin(ScrollToPlugin);

const Intro = () => {


    const interactions ={
        settings: {
            scrollDur: 1,
            hoverDur: .5,
            ease: 'Power2.easeOut',
            colors: {
                textInvert: '#FFFFFF',
                textDefault: '#0000FF',
                boxInvert: '#0000FF',
                boxDefault: '#FFFFFF'
            },
            borders: {
                invert: 'solid white',
                default: 'solid #0000FF'
            }
        },
        pageScroll(){
            console.log(interactions)
            const duration = this.settings.scrollDur
            const ease = this.settings.ease
            gsap.to(window, {duration, ease, scrollTo: {y: "#content"}})
        },
        mouseOn(){
            const duration = this.settings.hoverDur
            const ease = this.settings.ease
            const boxColor = this.settings.colors.boxInvert
            const textColor = this.settings.colors.textInvert
            const border = this.settings.borders.invert

            gsap.to('#learn-more', {duration, ease, backgroundColor: boxColor, border})
            gsap.to('#lm', {duration, ease, color: textColor})
            gsap.to('#test', {duration, ease, fill: textColor})
        },
        mouseOff(){

            const duration = this.settings.hoverDur
            const ease = this.settings.ease
            const boxColor = this.settings.colors.boxDefault
            const textColor = this.settings.colors.textDefault
            const border = this.settings.borders.default

            gsap.to('#learn-more', {duration, ease, backgroundColor: boxColor, border})
            gsap.to('#lm', {duration, ease, color: textColor})
            gsap.to('#test', {duration, ease, fill: textColor})

        }
    }

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
                    <button id="learn-more"
                     onClick={interactions.pageScroll.bind(interactions)}
                     onMouseEnter={interactions.mouseOn.bind(interactions)}
                     onMouseLeave={interactions.mouseOff.bind(interactions)}
                    >
                        <h4 id="lm">Learn More</h4>
                        <DoubleCaret />
                    </button>
                </div>
            </div>
        </section>
    )

}

export default Intro