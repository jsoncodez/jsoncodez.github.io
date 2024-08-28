import { useEffect,useState} from 'react';
import Loader, {Types} from "react-loaders";
import { Link } from 'react-router-dom';
import WorkDeskImg from '../../assets/images/workdeskimg.jpg';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J','a','s','o','n'] //4
    const jobArray = ['<','s','o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r', '>'] //17


    useEffect(() => {
        let timeout = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
        }, []);

    return (
        <>
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
 
                    
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />

                    <br/>

                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={17} />
                </h1>

                {/* <h2 className="skills-label">Python/C++/Full Stack/React/TypeScript</h2> */}
                <p className="skills-label">Python/C++/Full Stack/React/TypeScript</p>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="ball-scale-multiple"/>
        </>
    );
}

export default Home
