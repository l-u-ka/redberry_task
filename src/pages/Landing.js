import React from 'react'
import HeaderImage from '../images/LOGO-02 1.png'
import MainImageDesktop from '../images/Layer1.png'
import MainImage from '../images/Group.png'
import {useNavigate} from 'react-router-dom'


export default function Landing({isMobile}) {
    
    let navigate = useNavigate()

    function goToList() {
        navigate(`./list`)
    }
    function goToAdd() {
        navigate(`./add`)
    }

    return (
        <div className="landing_page">
            <img className="main_logo" src={HeaderImage} alt="logo"></img>
            <img className="main_image" src={isMobile ? MainImage : MainImageDesktop} alt="main_image"></img>
            <button className="add_button"  onClick={goToAdd}>ჩანაწერის დამატება</button>
            <button className="list_button" onClick={goToList}>ჩანაწერის სია</button>
        </div>
    )
}