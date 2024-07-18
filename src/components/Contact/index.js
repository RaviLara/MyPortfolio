import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_dsosjnz',
                'template_e50xql9',
                refForm.current,
                'zL_baQx2_5h0mciRb'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message')
                }
            )
    }

    const clearForm = () => {
        refForm.current.reset(); // Reset the form fields
    }

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <div className="top-line"></div>
                    <h1 className="underline">Contact Me!</h1>
                    <p>
                +63 (905-312-3052) · laraemmanuelravi@gmail.com · ermlara@live.mcl.edu.ph
                </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'></input>
                                    <button type='button' className='flat-button' onClick={clearForm}>CLEAR</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className="top-line"></div>
                </div>
            </div>
        </>
    )
}

export default Contact