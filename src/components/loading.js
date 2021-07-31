import React, {useState, useEffect} from 'react';
import './loading.css';

export default function Loading() {

    const [transition, setTransition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setTransition(transition => transition < 14 ? transition + 1 : 0);
        }, 400);
        return () => clearInterval(interval);
      }, []);

    return (
        <>
        <div class="redir-load">
            <div className= "image">
                <i className = {
                    transition >= 10 ? `fas fa-cut` : 
                    transition >= 5 ? `fas fa-highlighter` :
                    transition >= 0 ? `fas fa-ruler` : ``
                }
                />
                <br/>
                <span>{transition >= 10 ? `Tailoring your fit` : 
                       transition >= 5 ? `Sharpening your features` :
                       transition >= 0 ? `Making measurements` :``
                       }{transition % 3 <= 0 ? `.` :
                         transition % 3 <= 1 ? `..`:
                         `...`}  </span>           
            </div>
        </div>
        </>
    )
}
