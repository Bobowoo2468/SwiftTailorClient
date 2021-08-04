import {React, useEffect} from 'react';
import './filter.css';

export default function Filter(props) {

    const toggleGenderFilter = () => {
        props.setDropGender (!props.dropGender);
    }

    const toggleBodyshapeFilter = () => {
        props.setDropBodyshape (!props.dropBodyshape);
    }

    const toggleTypeFilter = () => {
        props.setDropType (!props.dropType);
    }

    const togglePriceFilter = () => {
        props.setDropPrice (!props.dropPrice);
    }

    const toggleStyleFilter = () => {
        props.setDropStyle (!props.dropStyle);
    }

    useEffect(() => {
        let genders = [
            {id: 1, gender: "Male"},
            {id: 2, gender: "Female"},            
        ];  

        let bodyshape = [
            {id: 1, body: "Triangle"},
            {id: 2, body: "Inverted Triangle"},
            {id: 3, body: "Oval"},
            {id: 4, body: "Rectangle"},
            {id: 5, body: "Trapezoid"},
            {id: 6, body: "Pear"},
            {id: 7, body: "Inverted Triangle"},
            {id: 8, body: "Apple"},
            {id: 9, body: "Rectangle"},
            {id: 10, body: "Hourglass"}
        ];

        let prices = [
            {id: 1, price: "$"},
            {id: 2, price: "$$"},
            {id: 3, price: "$$$"},
            {id: 4, price: "$$$$"}
        ];

        let types = [
            {id: 1, type: "Tops"},
            {id: 2, type: "Bottoms"},
            {id: 3, type: "Dresses"}
        ];

        let styles = [
            {id: 1, style: "Casual"},
            {id: 2, style: "Smart Casual"},
            {id: 3, style: "Formal"}
        ];

        props.setGender(
            genders.map(d => {
                return {
                    select: true,
                    display: false,
                    id: d.id,
                    gender: d.gender
                };
            })  
        );  

        props.setBodyshape(
            bodyshape.map(d => {
                return {
                    select: true,
                    display: false,
                    id: d.id,
                    body: d.body
                };
            })  
        );  
        
        props.setTypes(
            types.map(d => {
                return {
                    select: true,
                    display: false,
                    id: d.id,
                    type: d.type
                };
            })  
        );

        props.setPrices(
            prices.map(d => {
                return {
                    select: true,
                    display: false,
                    id: d.id,
                    price: d.price
                };
            })  
        );

        props.setStyles(
            styles.map(d => {
                return {
                    select: true,
                    display: false,
                    id: d.id,
                    style: d.style
                };
            })  
        );
        
    }, [])

    return(
    <>
        <div className = 'filter-container'>
            <div className = "wrapper">
                <inlinespan>
                    <h5>Gender</h5>
                    <i className = {props.dropGender ? 'fas fa-minus' : 'fas fa-plus'} onClick = {toggleGenderFilter}/> 
                </inlinespan>
                <div className = {props.dropGender ? "show gender-filter" : 'hide gender-filter'}>
                {props.gender.map((d) => {
                    return(
                    <>
                    <label>
                    <input type = "checkbox" checked = {d.display}
                    onChange = {e => {
                        let checked = e.target.checked;
                        props.setGender(
                            props.gender.map((data) => {
                                if (d.id === data.id) {
                                    data.display = checked;
                                }
                                data.select = data.display;
                                return data;
                            }))
                        }}/>
                    <span>{d.gender}</span>
                    </label>
                    <br/>
                    </>
                    )
                })}
                </div>
            </div>
            <div className = "wrapper">
                <inlinespan>
                    <h5>Bodyshape</h5>
                    <i className = {props.dropBodyshape ? 'fas fa-minus' : 'fas fa-plus'} onClick = {toggleBodyshapeFilter}/> 
                </inlinespan>
                <div className = {props.dropBodyshape ? "show bodyshape-filter" : 'hide bodyshape-filter'}>
                {props.bodyshape.map((d) => {
                    if ((props.gender[0].display === true & d.id <= 5) || (props.gender[1].display === true & d.id > 5)) {
                    return(
                    <>
                    <label>
                    <input type = "checkbox" checked = {d.display}
                    onChange = {e => {
                        let checked = e.target.checked;
                        props.setBodyshape(
                            props.bodyshape.map((data) => {
                                if (d.id === data.id) {
                                    data.display = checked;
                                }
                                data.select = data.display;
                                return data;
                            }))
                        }}/>
                    <span>{d.body}</span>
                    </label>
                    <br/>
                    </>
                    )
                    }
                })}
                </div>
            </div>

            <div className = "wrapper">
                <inlinespan>
                    <h5>Types</h5>
                    <i className = {props.dropType ? 'fas fa-minus' : 'fas fa-plus'} onClick = {toggleTypeFilter}/> 
                </inlinespan>
                <div className = {props.dropType ? "show type-filter" : 'hide type-filter'}>                
                {props.types.map((d) => {
                        return(
                        <>
                        <label>
                        <input type = "checkbox" checked = {d.display}
                        onChange = {e => {
                            let checked = e.target.checked;
                            props.setTypes(
                                props.types.map((data) => {
                                    if (d.id === data.id) {
                                        data.display = checked;
                                    }
                                    data.select = data.display;
                                    return data;
                            }))
                        }}/>
                        <span>{d.type}</span>
                        </label>
                        <br/>
                        </>
                        )
                })}         
            </div>
            </div>
            <div className = "wrapper">
                <inlinespan>
                    <h5>Price</h5>
                    <i className = {props.dropPrice ? 'fas fa-minus' : 'fas fa-plus'} onClick = {togglePriceFilter}/> 
                </inlinespan>
                <div className = {props.dropPrice ? "show price-filter" : 'hide price-filter'}>  
                {props.prices.map((d) => {
                        return(
                        <>
                        <label>
                        <input type = "checkbox" checked = {d.display}
                        onChange = {e => {
                            let checked = e.target.checked;
                            props.setPrices(
                                props.prices.map((data) => {
                                    if (d.id === data.id) {
                                        data.display = checked;
                                    }
                                    data.select = data.display;
                                    return data;
                            }))
                        }}/>
                        <span>{d.price}</span>
                        </label>
                        <br/>
                        </>
                        )
                    })}                      
            </div>
            </div>
            <div className = "wrapper">
                <inlinespan>
                    <h5>Style</h5>
                    <i className = {props.dropStyle ? 'fas fa-minus' : 'fas fa-plus'} onClick = {toggleStyleFilter}/> 
                </inlinespan>
                <div className = {props.dropStyle ? "show style-filter" : 'hide style-filter'}>  
                {props.styles.map((d) => {
                        return(
                        <>
                        <label>
                        <input type = "checkbox" checked = {d.display}
                        onChange = {e => {
                            let checked = e.target.checked;
                            props.setStyles(
                                props.styles.map((data) => {
                                    if (d.id === data.id) {
                                        data.display = checked;
                                    }
                                    data.select = data.display;
                                    return data;
                            }))
                        }}/>
                        <span>{d.style}</span>
                        </label>
                        <br/>
                        </>
                        )
                })} 
            </div>
            </div>
        </div>
    </>
    )
}
