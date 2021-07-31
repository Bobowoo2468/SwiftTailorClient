import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Card from './card.js'
import Filter from './filter.js';
import './shop.css'

export default function Shop(){
    const [fashionList, setFashionList] = useState([]);
    const [bodyshape, setBodyshape] = useState([]);
    const [types, setTypes] = useState([]);
    const [prices, setPrices] = useState([]);
    const [styles, setStyles] = useState([]);
    const [gender , setGender] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const [dropGender, setDropGender] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:9000/databaseAPI').then((response) => {
            setFashionList(response.data)
        });
    }, [])

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return(
    <>
        <div className = "drop">
            <span><p>Filters</p> <i className = {dropdown ? 'fas fa-times' : 'fas fa-caret-down'} onClick = {toggleDropdown}/></span>   
        </div>
        <div className = {dropdown ? "shop-filter" : "hide-filter"}>
            <>
            <Filter 
                bodyshape = {bodyshape}
                types = {types}
                prices = {prices}
                styles = {styles}
                gender = {gender}
                dropGender = {dropGender}
                setBodyshape = {setBodyshape}  
                setTypes = {setTypes}
                setPrices = {setPrices}  
                setStyles = {setStyles} 
                setGender = {setGender} 
                setDropGender = {setDropGender}
            />
            </>
        </div>
        <div className = "grid-container">

        {fashionList.filter((val) => {
            for (let i = 0; i <= 9; i++) {
                if ((val.bodyshape === bodyshape[i].id & bodyshape[i].select === true) & ((val.bodyshape <= 5 & gender[0].select === true) || (val.bodyshape >= 6 & gender[1].select === true))) {
                    for (let i = 0; i <= 2; i++){
                        if (val.types === types[i].id & types[i].select === true){
                            for (let i = 0; i <= 2; i++){
                                if(val.style === styles[i].id & styles[i].select === true){
                                    for (let i = 0; i <= 3; i++){
                                        if (val.price === prices[i].id & prices[i].select === true){
                                            return val;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }).map((val) => {
            return (
                <div className = "card-grid">
                <Card
                    name = {val.name}
                    weblink = {val.weblink}
                    imglink = {val.imglink}
                    bodyshape = {val.bodyshape}
                    types = {val.types}
                    style = {val.style}
                    price = {val.price}
                />
                </div>
            )
        })}

        </div>
    </>
    )
}