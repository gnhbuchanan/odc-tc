import React, { useEffect, useState } from "react";
import Intro from '../components/Intro'
import Content from '../components/Content'
import { data } from "../assets/data2.js";
// import './styles/Home.css'


const Home = () => {


    return (
        <main>
            <Intro />
            <Content />
        </main>
    )

}

export default Home