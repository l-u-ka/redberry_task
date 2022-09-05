import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function Card(props) {
    let navigate = useNavigate();
    function goToDetailView(id) {
        navigate(`./${id}`)
    }
    return (
        <div className="card_container">
            <img className="card--image" src={props.imageUrl} alt="cardImage"></img>
            <div className="card--info">
                <h4 className="card--user_name">{props.userName}</h4>
                <h4 className="card--laptop_name">{props.laptopName}</h4>
                <p className="card--link" onClick={()=>goToDetailView(props.id)}>მეტის ნახვა</p>
            </div>
        </div>
    )
}