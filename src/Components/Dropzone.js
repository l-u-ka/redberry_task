import React from 'react'
import {useDropzone} from 'react-dropzone';
import Vector from '../images/Vector.png'
import ImageError from '../images/Vector (1).png'
import ImgForMobile from '../images/Vector (3).png'

export default function Dropzone({files, setFiles, textColor, borderColor, notUploaded, isMobile}) {

  
    const images = files.map((file) => (
      <div key={file.name}>
        <div>
          <img src={file.preview} style={{width: "100%", height: !isMobile ? "420px" : "240px", borderRadius: "18px"}} alt="preview" />
        </div>
      </div>
    ))
    const fileInfo = files.map((file) => (
      <div key={file.path} style={{display: !isMobile && "flex", alignItems: "center"}}>
        <div style={{maxWidth: '150px',fontSstyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '14px', color: '#202020'}}> {file.path}</div> 
        {!isMobile && <div className="comma" style={{marginRight: '10px'}}>{","}</div>}
        <div style={{color: '#5F5F5F'}}> {(file.size/1000000).toPrecision(2)} mb</div>
      </div>
    ))
    console.log(images)
    
    const baseStyle = images.length===0 ? {
        height: isMobile ? '245px' : '420px',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? '10px' : '50px',
        borderColor: borderColor.borderColor,
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderStyle: 'dashed',
        backgroundColor: notUploaded ? '#FFF1F1' : '#fafafa',
        color: textColor.color,
        fontFamily: 'HelveticaNeue',
        fontStyle: 'normal',
        fontWeight: isMobile ? 400 : 500,
        fontSize: isMobile ? '16px' : '20px',
        lineHeight: isMobile ? '26px' : '38px',
        borderRadius:'18px',
        outline: 'none',
        transition: 'border .24s ease-in-out'
      } : {};
    
      const {
        getRootProps,
        getInputProps,
        open 
      } = useDropzone({
          noClick: true,
          accept: "image/*",
          onDrop: (acceptedFiles) => {
            setFiles(
              acceptedFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file)
                })
              )
            )
          },
        })
      const style = {...baseStyle};
      
      const beneathPhoto = images.length ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      } : {}


      return (
         <div className="container">
          <div>{images}</div>
          <div {...getRootProps({style})} onClick={isMobile && open }>
            <input {...getInputProps()}/>
            {(isMobile && images.length===0) && <img src={ImgForMobile} alt="mobImg"></img>}
            {(!isMobile && images.length===0 && notUploaded) && <img alt="errorImg" src={ImageError}/>}
            {images.length===0 && <p className="drop_down_text">{!isMobile ? 'ჩააგდე ან ატვირთე ლეპტოპის ფოტო' : 'ლეპტოპის ფოტოს ატვირთვა'}</p>}
            <div style={beneathPhoto}>
              <div style={{display: 'flex', alignItems: "center"}}>
                {images.length!==0 && <img style={{marginRight: '15px'}}src={Vector} alt="successImg"></img>}
                <div>{fileInfo}</div>
            </div>
            {(isMobile && images.length===0 && notUploaded) && <img alt="errorImg" src={ImageError}/>}
            {!isMobile ? <button className="drop_zone_button" type="button" onClick={open}>
                {images.length===0 ? 'ატვირთე' : 'თავიდან ატვირთე'}
            </button> : 
            images.length!==0 && 
            <button className="drop_zone_button" type="button" onClick={open}>
                {'თავიდან ატვირთე'}
            </button> }

            </div>
          </div>
        </div>
        
      );
}

