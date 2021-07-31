import React from 'react';
import axios from 'axios';
import './upload.css';

export default function Upload(props){

    const uploadImage = async e => {
        props.setLoading (true);
        const files = e.target.files;
        const data = new FormData();  
        data.append('file', files[0]);
        data.append('upload_preset', 'swifttailor');

        const res = await fetch(
          'https://api.cloudinary.com/v1_1/dnsw7cosi/image/upload',
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json();
        const link = await (file.secure_url);
        const datas = { link : link };
        axios.post('http://localhost:9000/imgAPI', { datas });
        props.setImage(file.secure_url);
        props.setLoading(false);
      }
      
      return (
      <>
        <div className = "upload">
            <h1>Upload Image</h1>
            <input type = "file"
            name = "file"
            placeholder = "Upload an image"
            onChange = {uploadImage}
            />
        </div>  
        <div className = {props.loading ? "loader" : props.image ? "image-received" : "no-image"}>
          <img src = {props.image} style = {{ width:`30vw`}} alt = " "/>
          Image not uploaded
        </div>
      </>
      )
}
