import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './email.module.css'
export const Email = () => {
    const form = useRef();
    const [notification, setNotification] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_bd4anjv', 'template_vhhc82a', form.current, {
                publicKey: '3qy1hDTu9rYmzYSUe',
            })
            .then(
                () => {
                    
                    console.log('SUCCESS!');
                    form.current.reset();
                    setNotification(true);
                    setTimeout(() => {
                        setNotification(false); 
                    }, 4000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        
    };

    return (
        <div id='contact' className={styles.contact}>
        <h2  className={styles.title}>Contact</h2>
        <div  className={styles.container}>
            
             {notification && <div className={styles.notification}>Message Sent!</div>}
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <div className={styles.lab}>
                <label>Name</label>
                <input type="text" name="user_name" required />
                </div>
                <div className={styles.lab}><label>Email</label>
                <input type="email" name="user_email" required /></div>
                <div className={styles.lab}><label>Message</label>
                <textarea className={styles.mess} name="message"  required/></div>
                <input type="submit" value="Send" />
            </form>
           
        </div>
        </div>
    )
}
