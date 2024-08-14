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

                    Hey there! I’m a programming enthusiast who finds joy in coding and building small projects. Whether I’m tinkering with a new app, experimenting with algorithms, or diving into a fresh programming language, I’m always eager to learn and create.


                </p>

                <p>

                    When I’m not coding, you’ll probably find me at a live music venue soaking up some great tunes or enjoying a thrilling video game session. I love the energy of a live band and the challenge of mastering a new game. Each of these passions fuels my creativity and keeps me inspired.

                </p>
                    
                <p>
                    Feel free to reach out if you want to chat about programming, share music recommendations, or discuss your latest gaming adventure.
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