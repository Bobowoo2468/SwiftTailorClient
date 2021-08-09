import React, {useState} from 'react';
import axios from 'axios';
import './update.css';

export default function Update(){

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [weblink, setWeblink] = useState('');
    const [imglink, setImglink] = useState('');
    const [bodyshape, setBodyshape] = useState(0);
    const [types, setTypes] = useState(0);
    const [price, setPrice] = useState(0);
    const [style, setStyle] = useState(0);
    const [submit, setSubmit] = useState(false);

    function checkNull(){        
        if (weblink === '' || imglink === '' || bodyshape === 0 || types === 0 || price === 0 || style === 0){
            return false;
        }
        return true;
    }

    const preventDefault = () => {
        setSubmit(true);
        setTimeout(function() {if (weblink === '' || imglink === '' || bodyshape === 0 || types === 0 || price === 0 || style === 0){
            alert('Required fields not filled up!')
        }}, 0)
    }

    const submitData = e => {
        setLoading(true);
        const data = {
            name: name, 
            weblink: weblink,
            imglink: imglink,
            bodyshape: bodyshape,
            types: types,
            price: price,
            style: style,
        };
        axios.post('http://localhost:9000/databaseAPI/update', { data });
        setName ('');
        setWeblink ('');
        setBodyshape(0);
        setTypes(0);
        setPrice(0);
        setStyle(0);
        setLoading(false);
    }

    const uploadImage = async e => {
        setLoading (true);
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
        setImglink (link);
        setLoading(false);
    }

    return (
        <>
            <div className = "update-db">
                <h1>Update Database</h1>
                <h4>Add to the community, contribute to our shop</h4>

                <form className = "input-db">
                    <h5>Clothing Name:</h5>
                    <label>
                        <input type = "text" 
                        name = "name"
                        onChange = {e => setName(e.target.value)}
                        value = {name}
                        className = {name.length === 0 ? (submit == true ? `warning`: `original`) : `filled`}
                        />
                    </label> 
                    
                    <h5>Upload Image:</h5>
                    <label>
                        <input type = "file"
                        name = "file"
                        accept = ".png, .jpg, .jpeg, .webp"
                        onChange = {uploadImage}
                        />
                    </label>

                    <p>Website Link:</p>
                    <label className = "weblink">
                        <input type = "text" 
                        name = "weblink"
                        onChange = {e => setWeblink(e.target.value)}
                        value = {weblink}
                        className = {weblink.length === 0 ? (submit == true ? `link warning`: `link original`) : `link filled`}
                        />
                    </label> 
 
                <p>Bodyshape:</p>
                <label>
                <select id="bodyshape" 
                    name="bodyshape"
                    onChange = {e => setBodyshape(e.target.value)}
                    value = {bodyshape}
                    className = {bodyshape === 0 ? (submit == true ? `warning`: null) : `filled`}
                >
                    <option value="0">Bodyshape</option>
                    <option value="1">Male Triangle</option>
                    <option value="2">Male Inverted Triangle</option>
                    <option value="3">Male Oval</option>
                    <option value="4">Male Rectangle</option>
                    <option value="5">Male Trapezoid</option>
                    <option value="6">Female Pear</option>
                    <option value="7">Female Inverted Triangle</option>
                    <option value="8">Female Apple</option>
                    <option value="9">Female Rectangle</option>
                    <option value="10">Female Hourglass</option>
                </select>
                </label>

                <p>Type:</p>
                <label>      
                <select id="types" 
                    name="types"
                    onChange = {e => setTypes(e.target.value)}
                    value = {types}
                    className = {types === 0 ? (submit == true ? `warning`: null) : `filled`}
                >
                    <option value="0">Type</option>
                    <option value="1">Tops</option>
                    <option value="2">Bottoms</option>
                    <option value="3">Dresses</option>
                </select>
                </label>

                <p>Price:</p>
                <label>
                <select id="price" 
                    name="price"
                    onChange = {e => setPrice(e.target.value)}
                    value = {price} 
                    className = {price === 0 ? (submit == true ? `warning`: null) : `filled`}               
                >
                    <option value="0">Price</option>
                    <option value="1">Less than $25</option>
                    <option value="2">$25 to $50</option>
                    <option value="3">$50 to $100</option>
                    <option value="4">More than $100</option>
                </select>
                </label>

                <p>Style:</p>
                <label>
                    <select id="style" 
                    name="style"
                    onChange = {e => setStyle(e.target.value)}
                    value = {style}  
                    className = {style === 0 ? (submit == true ? `warning`: null) : `filled`}     
                    >
                    <option value="0">Style</option>
                    <option value="1">Casual</option>
                    <option value="2">Smart Casual</option>
                    <option value="3">Formal</option>
                </select>                
                </label>

                <input type = "button" 
                onClick = {checkNull()? submitData: preventDefault}
                value = "Submit"
                className = "submit"/>
                
                </form>
            </div>  
        </>
    )
}