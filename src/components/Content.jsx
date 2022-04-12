import React, { useEffect, useState } from "react";
import './styles/content.css'
import {data} from '../assets/data2'
import pic from '../assets/images2/grace-hopper.jpg'

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

    return (
    <section id="content">
        {
          hasLoaded ?
          <>
          <label htmlFor='innovator-list'>SELECT AN INNOVATOR...</label>
          <select id="innovator-list" name="innovator-list" onChange={handleSelect}>
            {
              innovators.map((el) => {
                  return <option key={el.id} id={el.id} value={el.id}>{el.name}</option>
              })  
            }
          </select>
          <div className="innovator-card" onClick={() => {console.log(selected)}}>
            {/* <img id="innovator-port" alt={selected.altText} src={require(`../assets/images/${selected.image}`)}  /> */}
            {/* <div id="innovator-port" alt={selected.altText} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/src/assets/images/grace-hopper.jpg')`}}  /> */}

            <div id="innovator-port" alt={selected.altText} style={{backgroundImage: `url("/images/${selected.image}")`}}  />

            {/* <div id="innovator-port" alt={selected.altText} style={{backgroundImage: `url('+ require("../assets/images2/grace-hopper.jpg) + ')`}}  /> */}

            <div id="innovator-info">
                <h2>{selected.name}</h2>
                <h4>{selected.description}</h4>
            </div>
          </div>
          </>
          :
          <div>Loading</div>
        }
    </section>
    )
}

export default Content