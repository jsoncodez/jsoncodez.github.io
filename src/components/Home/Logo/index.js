import './index.scss';
import WorkDeskImg from '../../../assets/images/workdeskimg.jpg';
import {useEffect, useRef} from 'react';

const Logo=() => {

    const bgRef=useRef();
    const outlineLogoRef=useRef();
    const solidLogoRef=useRef();

    return (
        <div className="logo-container">
            {/* <img className="solid-log" src={LogoS} alt="J"/> */}
            <img className="scaled-image" src={WorkDeskImg} alt="J"/>
            
            {/* <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                    path d="m2930 4560c-344-16-623-85" 
                    {/* need to find reg path */}
                {/* </g> */}
            {/* </svg>  */}
        </div>
        )
}

export default Logo