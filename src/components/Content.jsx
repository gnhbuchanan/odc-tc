import React, { useEffect, useState } from "react";
import './styles/content.css'
import {gsap} from "gsap"
import {data} from '../assets/data2'
import { Caret } from "../assets/svg/reactComponentSVG/caret";

const Content = () => {

    const [innovators, setInnovators] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)
    const [selected, setSelected] = useState({})



    useEffect( () => {
        (async () => {
            try {
                const apiResponse = await data()
                setInnovators(apiResponse)
                setSelected(apiResponse[0])
                setHasLoaded(true)
            }
            catch(e){
                console.log(e)
            }
        })()
    }, [])

    const handleSelect = (e) => {
        let index = Number(e.target.value) -1
        let selectedInnovator = innovators[index]
        setSelected(selectedInnovator)
    }

    const interactions = {
        settings: {
            duration: .5,
            ease: 'Power2.easeOut',
            colors: {
                textInvert: '#FFFFFF',
                textDefault: '#0000FF',
                boxInvert: '#0000FF',
                boxDefault: '#FFFFFF'
            }
        },
        mouseOn(){
            const duration = this.settings.duration
            const ease = this.settings.ease
            const boxColor = this.settings.colors.boxInvert
            const textColor = this.settings.colors.textInvert

            gsap.to('.innovator-card', {duration, ease, backgroundColor: boxColor})
            gsap.to('.inovator-info-text', {duration, ease, color: textColor})
            gsap.to('#innovator-port', {duration, ease, scale: 1.1})
        },
        mouseOff(){

            const duration = this.settings.duration
            const ease = this.settings.ease
            const boxColor = this.settings.colors.boxDefault
            const textColor = this.settings.colors.textDefault

            gsap.to('.innovator-card', {duration, ease, backgroundColor: boxColor})
            gsap.to('.inovator-info-text', {duration, ease, color: textColor})
            gsap.to('#innovator-port', {duration, ease, scale: 1})

        }
    }

    return (
    <section id="content" className="section-wrapper">
        {
          hasLoaded ?
          <div id="content-wrapper">
          <label htmlFor='innovator-list'>SELECT AN INNOVATOR...</label>
          <select id="innovator-list" name="innovator-list" aria-labelledby="innovator list" onChange={handleSelect}>
            {
              innovators.map((el) => {
                  return <option key={el.id} id={el.id} value={el.id}>{el.name}  <Caret /></option>
              })  
            }
          </select>

            <button className="innovator-card-wrapper" arai-labeledby="open innovator link"
            onMouseEnter={interactions.mouseOn.bind(interactions)}
            onMouseLeave={interactions.mouseOff.bind(interactions)}
            onFocus={interactions.mouseOn.bind(interactions)}
            onBlur={interactions.mouseOff.bind(interactions)}
            onClick={()=>{window.open(`${selected.url}`)}}
            >
            <div className="innovator-card" >
                <div id="innovator-port-wrapper" >
                <img id="innovator-port" alt={selected.altText} src={require(`../assets/images/${selected.image}`)}  />
                </div>
                <div id="innovator-info">
                    <h2 className="inovator-info-text">{selected.name}</h2>
                    <h3 className="inovator-info-text">{selected.description}</h3>
                </div>
            </div>
          </button>
        </div>
          :
          <div>Loading</div>
        }
    </section>
    )
}

export default Content