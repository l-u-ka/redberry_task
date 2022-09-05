import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import returnArrowDesktop from '../images/Group 4.png'
import returnArrow from '../images/Vector (2).png'

export default function DetailView({isMobile}) {
    let {idParam} = useParams();
    const [id, setId] = React.useState(idParam)

    const [loading, setLoading] = React.useState();
    const [error, setError] = React.useState();
    const [detailInfo, setDetailInfo] = React.useState({
      "user": {
        "name": "",
        "surname": "",
        "team_id": 0,
        "position_id": 0,
        "email": "",
        "phone_number": ""
      }, 
      "laptop": {
        "name": "",
        "image": "",
        "brand_id": 0,
        "cpu": {
          "name": "",
          "cores": "",
          "threads": ""
        },
        "ram": "",
        "hard_drive_type": "",
        "state": "",
        "purchase_date": "",
        "price": ""
      }
    });
    const token = "b08acc2558ace25bbab33d0846a79260";


    React.useEffect(
        ()=> {
          fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${token}`)
          .then(response => {
            if(response.ok) {
              return response.json();
            } throw response;
          }).then(detailInfo => {
            setDetailInfo(detailInfo.data);
          })
          .catch(error => {
            console.error("Error fetching data", error)
            setError(error);
            }
          )
          .finally(()=> {
            setLoading(false)
          }) 
        }, [id]
      )

      const teams = {
         0: "",
         1: "დეველოპერები",
         2: "HR",
         3: "გაყიდვები",
         4: "დიზაინერები",
         5: "მარკეტინგი" 
      }

      const positions = {
        0: "",
        1: "ინტერნი",
        2: "ჯუნიორ დეველოპერი",
        3: "მიდლ დეველოპერი",
        4: "სენიორ დეველოპერი",
        5: "ლიდ დეველოპერი",
        6: "HR სპეციალისტი",
        7: "HR პროექტ მენეჯერი",
        8: "HR ბიზნეს პარტნიორი",
        9: "ჯუნიორ ბიზნეს დეველოპერი",
        10: "ბიზნეს დეველოპერი",
        11: "სენიორ ბიზნეს დეველოპერი",
        12: "ჯუნიორ UI/UX დიზაინერი",
        13: "UI/UX დიზაინერი",
        14: "სენიორ UI/UX დიზაინერი",
        15: "ლიდ UI/UX დიზაინერი",
        16: "ბლოგერი",
        17: "growth მარკეტინგის სპეციალისტი",
        18: "მარკეტინგის თიმ ლიდი"
      }

      const brands = {
        0: "",
        1: "HP",
        2: "Dell",
        3: "Microsoft",
        4: "Apple",
        5: "Lenovo",
        6: "Acer"
      }

      const state = {
        "new": "ახალი",
        "used": "მეორადი"
      }
    let navigate = useNavigate()
    function goBack() {
      navigate('../list')
    }

    return (
        <div className="detailInfoPage">
            <h3 className='detailInfoPageTitle'>ლეპტოპის ინფო</h3>
            <img onClick={goBack} src={isMobile ? returnArrow : returnArrowDesktop} alt="return_arrow" className='return_arrow'></img>
            <div className="detailInfo">
            <div className="detailInfo--first">
              <img alt="laptopImage" className="detailInfo--image"src={`https://pcfy.redberryinternship.ge/${detailInfo.laptop.image}`}/>
              <div className="eachColumn">
                  <p className='dark'>სახელი: </p>
                  <p className='light'>{detailInfo.user.name + " " + detailInfo.user.surname}</p>
                  <p className='dark'>თიმი: </p>
                  <p className='light'>{teams[detailInfo.user.team_id]}</p>
                  <p className='dark'>პოზიცია: </p>
                  <p className='light'>{positions[detailInfo.user.position_id]}</p>
                  <p className='dark'>მეილი: </p>
                  <p className='light'>{detailInfo.user.email}</p>
                  <p className='dark'>ტელ. ნომერი: </p>
                  <p className='light'>{detailInfo.user.phone_number}</p>
              </div>
            </div>
            <hr/>
            <div className='detailInfo--second'>
              <div className="eachColumn">
                  <p className='dark'>ლეპტოპის სახელი: </p>
                  <p className='light'>{detailInfo.laptop.name}</p>
                  <p className='dark'>ლეპტოპის ბრენდი: </p>
                  <p className='light'>{brands[detailInfo.laptop.brand_id]}</p>
                  <p className='dark'>RAM</p>
                  <p className='light'>{detailInfo.laptop.ram}</p>
                  <p className='dark'>მეხსიერების ტიპი: </p>
                  <p className='light'>{detailInfo.laptop.hard_drive_type}</p>
              </div>
              <div className="eachColumn">
                  <p className='dark'>CPU</p>
                  <p className='light'>{detailInfo.laptop.cpu.name}</p>
                  <p className='dark'>CPU-ს ბირთვი: </p>
                  <p className='light'>{detailInfo.laptop.cpu.cores}</p>
                  <p className='dark'>CPU-ს ნაკადი: </p>
                  <p className='light'>{detailInfo.laptop.cpu.threads}</p>
              </div>
            </div>
            <hr/>
            <div className="detailInfo--third">
              <div className="eachColumn">
                  <p className='dark'>{isMobile ? 'მდგომარეობა:' : 'ლეპტოპის მდგომარეობა:' } </p>
                  <p className='light'>{state[detailInfo.laptop.state]}</p>
                  <p className='dark'>ლეპტოპის ფასი: </p>
                  <p className='light'>{detailInfo.laptop.price}</p>
              </div>
              <div className="eachColumn">
                  <p className='dark'>შეძენის რიცხვი: </p>
                  <p className='light'>{detailInfo.laptop.purchase_date}</p>
              </div>
            </div>
          </div>
        </div>
    )
}