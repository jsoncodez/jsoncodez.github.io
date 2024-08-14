import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };

    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>

                    As an adaptable software engineer, I am deeply committed to continuous learning and growth, in particular areas that are new or difficult. With a well-rounded foundation in computer science and personal experience, I am constantly seeking opportunities to expand my skill set and eager to expand my skills. I approach challenges with a growth mindset, embracing the opportunity to learn from both successes and more importantly, failures.


                </p>

                <p>

                    Throughout my career, I have discovered one of my strengths is adaptability to change as that is the one true constant and why software engineering is not just an interest but a passion, whether it's mastering a new programming language, diving into a novel framework, or diving deep into understanding new, emerging technologies.  

                </p>
                    
                <p>
                    In every project I undertake, I prioritize curiosity and adaptability, recognizing that the pursuit of knowledge is an ongoing journey.  This allows me to approach challenges with humility, be unafraid to ask questions or seek guidance when uncertain to not only reach goals but to be receptive to the possibility of a better way of reaching them.  My willingness to embrace new challenges and my dedication to continuous improvement define my approach as a software engineer, ensuring that I remain agile and effective in an ever-evolving technological landscape.
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />    
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>


                </div>
            </div>
        </div>
        <Loader type="ball-scale-multiple" />
        </>
    )
}

export default About