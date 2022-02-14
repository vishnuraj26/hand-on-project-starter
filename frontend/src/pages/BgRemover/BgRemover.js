import React, { useState } from 'react';
import axios from 'axios';
import './BgRemover.css'
import cuv_logo from '../../components/Logo/cuvette.png'
import lady from '../../components/Logo/lady.png'
import logo from '../../components/Logo/Group 29106.png'
import '../../components/Fonts/fonts.css'




const BgRemover = () => {
  const [file,setFile] =useState('')
  const [fileName, setFileName] = useState('');
  const [newImage, setNewImage] = useState('');


const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const handleUpload= async (e)=>{
  setFile(e.target.files[0])
  setFileName(e.target.files[0].name);

}

const handleSubmit=async (e)=>{
  e.preventDefault();

  const base64 = await convertBase64(file);

  if(!base64)  console.log("empty")



  if(base64 != '')
  { axios.post('http://localhost:5000/bgremover', { base64Image: base64, fileName: Date.now() + '-' + fileName })
          .then(data => setNewImage("data:image/jpeg;base64,".concat(data.data.image)) )
          .catch((error) => console.log(error));}

}




  return (<main>

    <nav className='na'>
            <img src={cuv_logo} alt='opps'/>
          </nav>
    <div className='panel'>
      <div className='info'>
          <strong>Remove image background</strong>
          <p>100% automatic and free</p>
          <img src={lady}/>
      </div>
    </div>
    <div className='api'>
      <form onSubmit={handleSubmit}>
        <img src={logo}/>
        <p>File should be png, jpg and
           less than 5mb</p>
        <input  type='file' accept='image/*' id='button' multiple onChange={handleUpload}  />
        <label htmlFor='button'><button type='submit'><span>Upload Image</span></button></label>
        <small>Or drop a file</small>
      </form>
    </div>
    <div>
    { newImage ? <div className="recent">
        <div className=""></div>
          <img style={{ width: '100%' }} src={newImage} alt="" />
        </div> : null }
    </div>
  </main>);
};

export default BgRemover;
