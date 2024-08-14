import Loader from 'react-loaders';
import './index.scss';
import '../Layout/index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };

    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'proton',
                'templateid', // need to set up using link
                refForm.current,
                'usertoken' //need to set up using link
            )
            .then(
                ()=>{
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Faled to send message, please try again.')
                }
            )
    }
    
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c', 't',' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    
                </p>
            </div>
            
                <div className="container contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">

                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className="half">

                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>

                                <input placeholder='Subject' type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea  
                                    placeholder="Message"
                                    name="message"
                                    required>
                                </textarea>                                    
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        {/* </div> */}
        {/* </div> */}
        <Loader type="ball-scale-multiple" />
        </>

    )                
}
export default Contact