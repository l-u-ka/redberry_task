import React from 'react'
import StyledDropzone from '../Components/Dropzone'
import Popup from '../Components/Popup'
import returnArrowDesktop from '../images/Group 4.png'
import returnArrow from '../images/Vector (2).png'
import BottomLogo from '../images/LOGO-10 2.png'
import lineBeneath from '../images/Line 14.png'
import radioError from '../images/Vector (4).png'
import {useNavigate} from 'react-router-dom'

export default function Add({isMobile, token}) {

  


    const [loading, setLoading] = React.useState();
    const [error, setError] = React.useState();
    const [onPersonalInfo, setOnPersonalInfo] = React.useState(true);
    const [isFirstPartDone, setIsFirstPartDone] = React.useState(false);
    const [iscompleted, setIsCompleted] = React.useState(false);
    const [files, setFiles] = React.useState([])
    const [teams, setTeams] = React.useState([])
    const [positions, setPositions] = React.useState([])
    const [cpus, setCpus] = React.useState([]);
    const [brands, setBrands] = React.useState([]);

    const [fullInfo, setFullInfo] = React.useState( JSON.parse(localStorage.getItem("formInfo")) || {
        name: "",
        surname: "",
        team_id: "",  
        position_id: "",  
        phone_number: "",
        email: "",
        laptop_name: "",
        laptop_image: "",
        laptop_brand_id: "", 
        laptop_cpu: "",
        laptop_cpu_cores: "",    
        laptop_cpu_threads: "",    
        laptop_ram: "",    
        laptop_hard_drive_type: "",
        laptop_state: "",
        laptop_purchase_date: "",
        laptop_price: ""  
      })

      //console.log(fullInfo)

      React.useEffect(() => {
        localStorage.setItem("formInfo", JSON.stringify(fullInfo))
    }, [fullInfo])

    const normalTextStyle = {color: "#000000"}
    const normalBorderStyle = { borderColor: "#8AC0E2"}
    const normalFileTextStyle = {color: '#4386A9'}
    const normalFileBorderStyle = {borderColor: '#4386A9'}
    const errorTextStyle = {color: "#ff0000"}
    const errorBorderStyle = {borderColor: "#ff0000"}

    const [nameTextColor, setNameTextColor] = React.useState(normalTextStyle)
    const [nameBorderColor, setNameBorderColor] = React.useState(normalBorderStyle)
    const [surnameTextColor, setSurnameTextColor] = React.useState(normalTextStyle)
    const [surnameBorderColor, setSurnameBorderColor] = React.useState(normalBorderStyle)
    const [teamBorderColor, setTeamBorderColor] = React.useState(normalBorderStyle)
    const [positionBorderColor, setPositionBorderColor] = React.useState(normalBorderStyle)
    const [phoneTextColor, setPhoneTextColor] = React.useState(normalTextStyle)
    const [phoneBorderColor, setPhoneBorderColor] = React.useState(normalBorderStyle)
    const [emailTextColor, setEmailTextColor] = React.useState(normalTextStyle)
    const [emailBorderColor, setEmailBorderColor] = React.useState(normalBorderStyle)
    const [laptopTextColor, setLaptopTextColor] = React.useState(normalTextStyle)
    const [laptopBorderColor, setLaptopBorderColor] = React.useState(normalBorderStyle)
    const [laptopImageTextColor, setLaptopImageTextColor] = React.useState({color: '#4386A9'})
    const [laptopImageBorderColor, setlaptopImageBorderColor] = React.useState({borderColor: '#4386A9'})
    const [laptopBrandBorderColor, setLaptopBrandBorderColor] = React.useState(normalBorderStyle)
    const [laptopCpuBorderColor, setLaptopCpuBorderColor] = React.useState(normalBorderStyle)
    const [laptopCpuCoresTextColor, setlaptopCpuCoresTextColor] = React.useState(normalTextStyle)
    const [laptopCpuCoresBorderColor, setlaptopCpuCoresBorderColor] = React.useState(normalBorderStyle)
    const [laptopCpuThreadsTextColor, setLaptopCpuThreadsTextColor] = React.useState(normalTextStyle)
    const [laptopCpuThreadsBorderColor, setLaptopCpuThreadsBorderColor] = React.useState(normalBorderStyle)
    const [laptopRamTextColor, setLaptopRamTextColor] = React.useState(normalTextStyle)
    const [laptopRamBorderColor, setLaptopRamBorderColor] = React.useState(normalBorderStyle)
    const [laptopHardDriveTextColor, setLaptopHardDriveTextColor] = React.useState(normalTextStyle)
    const [laptopStateTextColor, setLaptopStateTextColor] = React.useState(normalTextStyle)
    const [laptopPriceTextColor, setLaptopPriceTextColor] = React.useState(normalTextStyle)
    const [laptopPriceBorderColor, setLaptopPriceBorderColor] = React.useState(normalBorderStyle)
    const [hardDriveError, setHardDriveError] = React.useState(false)
    const [laptopStateError, setLaptopStateError] = React.useState(false)
    const [notUploaded, setNotUploaded] = React.useState(false);

    // validating first part of form
    function firstPartValidation(formdata) {
      let result = true;
      const georgianRegex = (/^[ა-ჰ]+$/)
      const emailRegex = (/^[\w_-]+@redberry.ge$/)
      const phoneRegex = (/^\+995\d{3}\d{2}\d{2}\d{2}$/)
      if(formdata.name==="" || !georgianRegex.test(formdata.name) || formdata.name.length <2 ) {
        setNameTextColor(errorTextStyle)
        setNameBorderColor(errorBorderStyle)
        result = false;
      } else {
        setNameTextColor(normalTextStyle)
        setNameBorderColor(normalBorderStyle)
      }
      if(formdata.surname==="" || !georgianRegex.test(formdata.surname) || formdata.surname.length <2) {
        setSurnameTextColor(errorTextStyle)
        setSurnameBorderColor(errorBorderStyle)
        result = false;
      } else {
        setSurnameTextColor(normalTextStyle)
        setSurnameBorderColor(normalBorderStyle)
      }
      if(formdata.team_id==="" ) { 
        setTeamBorderColor(errorBorderStyle)
        result = false
      } else {
        setTeamBorderColor(normalBorderStyle)
      }
      if(formdata.position_id==="") {
        setPositionBorderColor(errorBorderStyle)
        result = false
      } else {
        setPositionBorderColor(normalBorderStyle)
      }
      if(formdata.phone_number==="" || !phoneRegex.test(formdata.phone_number)) {
        setPhoneTextColor(errorTextStyle)
        setPhoneBorderColor(errorBorderStyle)
        result = false
      } else {
        setPhoneTextColor(normalTextStyle)
        setPhoneBorderColor(normalBorderStyle)
      }
      if(formdata.email==="" || !emailRegex.test(formdata.email)) {
        setEmailTextColor(errorTextStyle)
        setEmailBorderColor(errorBorderStyle)
        result = false
      } else {
        setEmailTextColor(normalTextStyle)
        setEmailBorderColor(normalBorderStyle)
      }
      setIsFirstPartDone(result);
      return result;
    }
    
    // validating second part of form
    function submitValidation(formData) {
      const laptopNameRegex = (/^[a-zA-Z0-9!@#$%^&*()_+=\s]+$/)
      let finalResult = true
      if(formData.laptop_name==="" || !laptopNameRegex.test(formData.laptop_name)) {
        finalResult = false;
        setLaptopTextColor(errorTextStyle)
        setLaptopBorderColor(errorBorderStyle)
      } else {
        setLaptopTextColor(normalTextStyle)
        setLaptopBorderColor(normalBorderStyle)
      }
      if(files.length===0) {
        finalResult = false
        setLaptopImageTextColor(errorTextStyle)
        setlaptopImageBorderColor(errorBorderStyle)
        setNotUploaded(prev=>!prev)
      } else {
        setLaptopImageTextColor(normalFileTextStyle)
        setlaptopImageBorderColor(normalFileBorderStyle)
      }
      if(formData.laptop_brand_id==="") {
        finalResult = false
        setLaptopBrandBorderColor(errorBorderStyle)
      } else {
        setLaptopBrandBorderColor(normalBorderStyle)
      }
      if(formData.laptop_cpu==="") {
        finalResult = false
        setLaptopCpuBorderColor(errorBorderStyle)
      } else {
        setLaptopCpuBorderColor(normalBorderStyle)
      }
      if(formData.laptop_cpu_cores==="") {
        finalResult = false
        setlaptopCpuCoresTextColor(errorTextStyle)
        setlaptopCpuCoresBorderColor(errorBorderStyle)
      } else {
        setlaptopCpuCoresTextColor(normalTextStyle)
        setlaptopCpuCoresBorderColor(normalBorderStyle)
      }
      if(formData.laptop_cpu_threads==="") {
        finalResult = false
        setLaptopCpuThreadsTextColor(errorTextStyle)
        setLaptopCpuThreadsBorderColor(errorBorderStyle)
      } else {
        setLaptopCpuThreadsTextColor(normalTextStyle)
        setLaptopCpuThreadsBorderColor(normalBorderStyle)
      }
      if(formData.laptop_ram==="") {
        finalResult = false
        setLaptopRamTextColor(errorTextStyle)
        setLaptopRamBorderColor(errorBorderStyle)
      } else {
        setLaptopRamTextColor(normalTextStyle)
        setLaptopRamBorderColor(normalBorderStyle)
      }
      if(formData.laptop_hard_drive_type==="") {
        finalResult = false
        setLaptopHardDriveTextColor(errorTextStyle)
        //setlaptopHardDriveBorderColor(errorBorderStyle)
        setHardDriveError(prev => !prev)
      } else {
        setLaptopHardDriveTextColor(normalTextStyle)
        //setlaptopHardDriveBorderColor(normalBorderStyle)
      }
      if(formData.laptop_state==="") {
        finalResult = false
        setLaptopStateTextColor(errorTextStyle)
        //setLaptopStateBorderColor(errorBorderStyle)
        setLaptopStateError(prev => !prev)
      } else {
        setLaptopStateTextColor(normalTextStyle)
        //setLaptopStateBorderColor(normalBorderStyle)
      }
      if(formData.laptop_price==="") {
        finalResult = false
        setLaptopPriceTextColor(errorTextStyle)
        setLaptopPriceBorderColor(errorBorderStyle)
      } else {
        setLaptopPriceTextColor(normalTextStyle)
        setLaptopPriceBorderColor(normalBorderStyle)
      }
      
      return finalResult
    }
    
    //getting team data from api
    React.useEffect(
        ()=> {
          fetch(`https://pcfy.redberryinternship.ge/api/teams`)
          .then(response => {
            if(response.ok) {
              return response.json();
            } throw response;
          }).then(ListInfo => {
            setTeams(ListInfo.data);
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
    
    //getting positions data from api
    React.useEffect(
        ()=> {
          fetch(`https://pcfy.redberryinternship.ge/api/positions`)
          .then(response => {
            if(response.ok) {
              return response.json();
            } throw response;
          }).then(ListInfo => {
            setPositions(ListInfo.data);
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

    //getting cpu data from api
    React.useEffect(
        ()=> {
          fetch(`https://pcfy.redberryinternship.ge/api/cpus`)
          .then(response => {
            if(response.ok) {
              return response.json();
            } throw response;
          }).then(cpuInfo => {
            setCpus(cpuInfo.data);
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
      
    // getting brands data from api
    React.useEffect(
        ()=> {
          fetch(`https://pcfy.redberryinternship.ge/api/brands`)
          .then(response => {
            if(response.ok) {
              return response.json();
            } throw response;
          }).then(brandInfo => {
            setBrands(brandInfo.data);
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

    // getting data from form and saving it in form state
    function handleChange(event) {
        const {name, value, type} = event.target
        setFullInfo(prevInfo => ({
            ...prevInfo, 
            [name] : ((type==="select-one" || type==="number") && name!=="laptop_cpu") ? parseInt(value) : value
        }))
    }
  
    // checking if first part is validated to go to second part (laptopinfo)
    function goToLaptopInfo() {
        if (firstPartValidation(fullInfo)) setOnPersonalInfo(prev => !prev);
    }

    let navigate = useNavigate()
    function goToHome() {
      navigate('../')     // you have to pass props here later
    }


    const [sentData, setSentData] = React.useState({});
    const [postResult, setPostResult] = React.useState(null);

    // saving file info in laptop_image property of state
    React.useEffect(()=> {
      setFullInfo(prev => ({
        ...prev,
        laptop_image: files[0]
    }))
    }, [files])

    // constructing form data and sending it to api
    
    React.useEffect(() => {

      const newFormData = new FormData();
      newFormData.append("name", fullInfo.name)
      newFormData.append("surname", fullInfo.surname)
      newFormData.append("team_id", fullInfo.team_id)
      newFormData.append("position_id", fullInfo.position_id)
      newFormData.append("phone_number", fullInfo.phone_number)
      newFormData.append("email", fullInfo.email)
      newFormData.append("token", token)
      newFormData.append("laptop_name", fullInfo.laptop_name)
      newFormData.append("laptop_image", fullInfo.laptop_image)
      newFormData.append("laptop_brand_id", fullInfo.laptop_brand_id)
      newFormData.append("laptop_cpu", fullInfo.laptop_cpu)
      newFormData.append("laptop_cpu_cores", fullInfo.laptop_cpu_cores)
      newFormData.append("laptop_cpu_threads", fullInfo.laptop_cpu_threads)
      newFormData.append("laptop_ram", fullInfo.laptop_ram)
      newFormData.append("laptop_hard_drive_type", fullInfo.laptop_hard_drive_type)
      newFormData.append("laptop_state", fullInfo.laptop_state)
      newFormData.append("laptop_purchase_date", fullInfo.laptop_purchase_date)
      newFormData.append("laptop_price", fullInfo.laptop_price)
      
      //console.log(newFormData)
      //console.log(newFormData.get("laptop_image"))
      
      const moreRequestOptions = {
        method: 'POST',
        body: newFormData
    };

      fetch('https://pcfy.redberryinternship.ge/api/laptop/create', moreRequestOptions)
          .then(response => response.json())
          .then(data => setSentData(data));
        
  }, [iscompleted]);

  
  /*
  console.log(files)
  console.log(sentData)
  console.log(fullInfo.laptop_image)
  */

  // checking if form is validated and if so, setting isComplete state to true
    function handleSubmit(event) {
      event.preventDefault()        // stop refresh aftet submit 
      if (submitValidation(fullInfo)) {
        setIsCompleted(true)
        localStorage.clear();
      }
    }
    console.log(postResult)

    const backgroundStyle = { backgroundColor: iscompleted && 'rgba(0, 0, 0, 0.5)'}  
    const formInvisible = {visibility: iscompleted && 'hidden'} 


    return (
        <div className="add_page" style={backgroundStyle}>
          <img src={isMobile? returnArrow : returnArrowDesktop} alt="return" onClick={goToHome} className='return_arrow'></img>
            <div className="header">
                <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                  {!isMobile ? <h4 className="form_part_indicator">თანამშრომლის ინფო</h4> : onPersonalInfo &&  <h4 className="form_part_indicator">თანამშრომლის ინფო</h4>}
                  {(isMobile && onPersonalInfo) && <p className="under_form_part_indiator">1/2</p>}
                  {(!isMobile && onPersonalInfo) && <img src={lineBeneath} alt="underline" style={{display: onPersonalInfo ? 'block' : 'none'}}/>}
                </div>
                <div style={{display: 'flex', flexDirection:'column',  alignItems: 'center'}}>
                  {!isMobile ? <h4 className="form_part_indicator">ლეპტოპის მახასიათებლები</h4> : !onPersonalInfo && <h4 className="form_part_indicator">ლეპტოპის მახასიათებლები</h4>}
                  {(isMobile && !onPersonalInfo) && <p className="under_form_part_indiator">2/2</p>}
                  {(!isMobile && !onPersonalInfo) && <img src={lineBeneath} alt="underline" style={{display: !onPersonalInfo ? 'block' : 'none'}}/>}
                </div>
            </div>
            <form className="form" onSubmit={handleSubmit} style={formInvisible}>
            {onPersonalInfo ? <div className="questions">
                <div className="name">
                    <h4 className="title" style={nameTextColor} >სახელი</h4>
                    <input name="name" className="input" style={nameBorderColor} onChange={handleChange} value={fullInfo.name} type="text" placeholder="გრიშა" ></input>
                    <p className="comment" style={nameTextColor} >მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                </div>
                    
                <div className="surname">
                    <h4 className="title" style={surnameTextColor}>გვარი</h4>
                    <input name="surname" style={surnameBorderColor} className="input" onChange={handleChange} value={fullInfo.surname} type="text" placeholder="ბაგრატიონი"></input>
                    <p className="comment" style={surnameTextColor} >მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                </div>
                
                <select id="team" name="team_id" style={teamBorderColor} type="number" onChange={handleChange} value={fullInfo.team_id} className="select">
                    <option value={0}>თიმი</option>
                    {teams.map(team => <option key={team.name} value={team.id}>{team.name}</option>)}
                </select>

                <select id="position" name="position_id" style={positionBorderColor} onChange={handleChange} value={fullInfo.position_id} className="select">
                    <option value="">პოზიცია</option>
                    {positions.map(position => (position.team_id==fullInfo.team_id) && <option key={position.name} value={position.id}>{position.name}</option>)}
                </select>

                <div className="email">
                    <h4 className="title" style={emailTextColor}>მეილი</h4>
                    <input name="email" className="input" style={emailBorderColor} onChange={handleChange} value={fullInfo.email} type="email" placeholder="grish666@redberry.ge"></input>
                    <p className="comment" style={emailTextColor}>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                </div>
                
                <div className="phone">
                    <h4 className="title" style={phoneTextColor}>ტელეფონის ნომერი</h4>
                    <input name="phone_number" style={phoneBorderColor} className="input" onChange={handleChange} value={fullInfo.phone_number} type="tel" placeholder="+995 598 00 07 01"></input>
                    <p className="comment" style={phoneTextColor}>უნდა აკმაყოფილებდეს ქართული მობილურის ფორმატს</p>
                </div>
            </div>
            
            : 
            
            <div className="laptop_questions">   
                <StyledDropzone isMobile={isMobile} notUploaded = {notUploaded} files={files} setFiles={setFiles} textColor={laptopImageTextColor} borderColor={laptopImageBorderColor}/>  {/* pass text and border color as props*/}
                <div className="two_equal_columns">
                    <div className="laptop_name">
                        <h4 className="title" style={laptopTextColor}>ლეპტოპის სახელი</h4>
                        <input name="laptop_name" style={laptopBorderColor}onChange={handleChange} value={fullInfo.laptop_name} className="input two_column_width" type="text" placeholder="HP"></input>
                        <p className="comment" style={laptopTextColor}>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </p>
                    </div>
                    <select id="brand" name="laptop_brand_id" style={laptopBrandBorderColor} onChange={handleChange} value={fullInfo.laptop_brand_id} className="select two_column_width">
                        <option value="">ბრენდი</option>
                        {brands.map(brand=><option key={brand.id} value={brand.id}>{brand.name}</option>)}
                    </select>
                </div>
                <br></br>
                <div className="three_equal_columns">
                    <select id="cpu" name="laptop_cpu" style={laptopCpuBorderColor} onChange={handleChange} value={fullInfo.laptop_cpu} className="select three_column_width">
                        <option value="">CPU</option>
                        {cpus.map(cpu=><option key={cpu.id} value={cpu.name}>{cpu.name}</option>)}
                    </select>
                    <div className="cpu_cores">
                        <h4 className="title" style={laptopCpuCoresTextColor}>CPU-ს ბირთვი</h4>
                        <input name="laptop_cpu_cores" style={laptopCpuCoresBorderColor} onChange={handleChange} value={fullInfo.laptop_cpu_cores} className="input three_column_width" type="number" placeholder="14"></input>
                        <p className="comment" style={laptopCpuCoresTextColor}>მხოლოდ ციფრები</p>
                    </div>
                    <div className="cpu_threades">
                        <h4 className="title" style={laptopCpuThreadsTextColor}>CPU-ს ნაკადი</h4>
                        <input name="laptop_cpu_threads" style={laptopCpuThreadsBorderColor} onChange={handleChange} value={fullInfo.laptop_cpu_threads} className="input three_column_width" type="number" placeholder="365"></input>
                        <p className="comment" style={laptopCpuThreadsTextColor}>მხოლოდ ციფრები</p>
                    </div>
                </div>
                <div className="two_equal_columns">
                    <div className="ram">
                        <h4 className="title" style={laptopRamTextColor}>ლეპტოპის RAM</h4>
                        <input name="laptop_ram" style={laptopRamBorderColor} onChange={handleChange} value={fullInfo.laptop_ram} className="input two_column_width" type="number" placeholder="16"></input>
                        <p className="comment" style={laptopRamTextColor}>მხოლოდ ციფრები</p>
                    </div>
                    <div className="memory_type">
                        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                          <h4 className="radio_title title" style={laptopHardDriveTextColor}>მეხსიერების ტიპი</h4>
                          {hardDriveError && <img src={radioError} alt="radioButtonError" />}
                        </div>
                        <div className="buttons">
                        <input type="radio" id="ssd" name="laptop_hard_drive_type" onChange={handleChange} value="SSD" checked={fullInfo.laptop_hard_drive_type === "SSD"} className="radio_button" />
                        <label htmlFor="unemployed">SSD</label>

                        <input type="radio" id="hdd" name="laptop_hard_drive_type" onChange={handleChange} value="HDD" checked={fullInfo.laptop_hard_drive_type === "HDD"} className="radio_button radio_button_two" />
                        <label htmlFor="part-time">HDD</label>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="two_equal_columns">
                    <div className="date">
                        <h4 className="title">შეძენის რიცხვი (არჩევითი)</h4>
                        <input className="input two_column_width" name="laptop_purchase_date" onChange={handleChange} value={fullInfo.laptop_purchase_date} type="text" placeholder="დდ /თთ /წწწწწ"></input>
                    </div>
                    <div className="price">
                        <h4 className="title" style={laptopPriceTextColor}>ლეპტოპის ფასი</h4>
                        <input className="input two_column_width" style={laptopPriceBorderColor} name="laptop_price" type="number" onChange={handleChange} value={fullInfo.laptop_price} placeholder="0000"></input>
                        <p className="comment" style={laptopPriceTextColor}>მხოლოდ ციფრები</p>
                    </div>
                </div>
                <div className="condition">
                        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                          <h4 className="radio_title title" style={laptopStateTextColor}>ლეპტოპის მდგომარეობა</h4>
                          {laptopStateError && <img src={radioError} alt="radioButtonError" />}
                        </div>
                        <div className="buttons">
                        <input type="radio" id="new" name="laptop_state" onChange={handleChange} value="new" checked={fullInfo.laptop_state==="new"} className="radio_button" />
                        <label htmlFor="unemployed">ახალი</label>

                        <input type="radio" id="used" name="laptop_state" onChange={handleChange} value="used" checked={fullInfo.laptop_state==="used"} className="radio_button radio_button_two" />
                        <label htmlFor="part-time">მეორადი</label>
                        </div>
                </div>
                
            </div>
            }   
                {onPersonalInfo && <input type="button" className="button" onClick={goToLaptopInfo} value="შემდეგი"></input>}
                {!onPersonalInfo && <div className="two_buttons">
                <h4 className="go_back" onClick={() => setOnPersonalInfo(true)}>უკან</h4>
                <button className="button">დამახსოვრება</button>
                </div>}
            </form>
            {iscompleted && <Popup/> }  
            {!isMobile && <img className="bottom_img" alt="botimg" src={BottomLogo}></img>}
        </div>
    )
}