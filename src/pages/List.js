import React from 'react';
import Card from '../Components/Card'
import goBackArrowDesktop from '../images/Group 4.png'
import goBackArrow from '../images/Vector (2).png'
import {useNavigate} from 'react-router-dom'

export default function List({isMobile, token}) {
    const [loading, setLoading] = React.useState();
    const [error, setError] = React.useState();
    const [list, setList] = React.useState([]);
    //const token = "b08acc2558ace25bbab33d0846a79260";
    
    // based on token get list of laptopss
    React.useEffect(
        ()=> {
          fetch(`https://pcfy.redberryinternship.ge/api/laptops?token=${token}`)
          .then(response => {
            if(response.ok) {
              return response.json();
            } throw response;
          }).then(ListInfo => {
            setList(ListInfo.data);
          })
          .catch(error => {
            console.error("Error fetching data", error)
            setError(error);
            }
          )
          .finally(()=> {
            setLoading(false)
          }) 
        }, []
      )
    
    const laptopList = list.map(info => <Card key={info.laptop.id} imageUrl={`https://pcfy.redberryinternship.ge/${info.laptop.image}`} id={info.laptop.id} userName={info.user.name + ' ' + info.user.surname} laptopName={info.laptop.name}/>)  

    let navigate = useNavigate()
    function goBack() {
      navigate('../')
    }

    return (
        <div className="list_page">
            <img onClick={goBack} className="return_arrow" src={isMobile ? goBackArrow : goBackArrowDesktop} alt="returnArrow"/>
            <h3 className="list_page--header">ჩანაწერების სია</h3>
             <div className="list-group">
                {laptopList}
             </div>
        </div>
       
    )
}