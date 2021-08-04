import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Aboutus (){
    const [mama, setMama] = useState([]);

//     axios.post('https://swifttailorserver.herokuapp.com/databaseAPI/test', {}).then(res => {
//         console.log(res.data.bodyshape);
//         console.log(res.data.swratio);
//         console.log(res.data);
//         setMama(res.data);
//       })
//   }
    // useEffect(()=>{
    //     axios.post('https://swifttailorserver.herokuapp.com/databaseAPI/test').then((response) => {
    //         setMama(response.data)
    //         console.log(response.data)
    //     }); 
    // }, [])

    async function testpost() {
      const res = fetch(
        'https://swifttailorserver.herokuapp.com/databaseAPI/test',
        {
          method: 'POST'
        }
      )
      .then (function (response){
        return response.text();
      })
      .then(function(data) {
            console.log(data);
        });

        // const res = await fetch('https://swifttailorserver.herokuapp.com/databaseAPI/test', {method: 'POST'})
        // .then(response => response.body)
        // .then(body => {
        // const reader = body.getReader();
             
        // });

    //   const data = res.body;
    //   console.log(data);
    //   setMama(data);
    }
      
    return (
    <>
        {/* {mama.map((val)=> {
            return (
                <h1>{val.name}</h1>
            )
        })
        } */}
        <h1 onClick = {testpost}>pepe</h1>
    </>
    )
}    