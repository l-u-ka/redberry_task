import React from 'react';
import {useNavigate} from 'react-router-dom'
import Icon from '../images/Frame.png'

export default function Popup(){
    let navigate = useNavigate();
    function goToHomeScreen() {
        navigate('../')
    }
    function goToListScreen() {
        navigate('../list')
    }
    return (
        <div className='popup'>
            <img src={Icon} alt="popup_icon"></img>
            <h4 className="popup_text">ჩანაწერი დამატებულია</h4>
            <button onClick={goToListScreen} className="go_to_list_button">სიაში გადაყვანა</button>
            <h4 onClick={goToHomeScreen} className="go_to_main">მთავარი</h4>
        </div>
    )
}