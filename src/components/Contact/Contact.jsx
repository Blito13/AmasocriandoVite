import React, { useState , useRef} from "react";
/* import axios from "axios"; */
import Infobox from "../InfoBox/InfoBox.jsx";
import style from "./Contact.module.css";
import emailjs from '@emailjs/browser'
const Key1 =  import.meta.env.VITE_KEY_1;
const Key2 =  import.meta.env.VITE_KEY_2;
const Key4 =  import.meta.env.VITE_KEY_3;
const Contact = ()=>{

    const form = useRef();
    const [contacto, setContacto] = useState("open"); //visibility
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState({
      name: "",
      email: "",
      message: "",
      honeypot: "",
    });
    const [confirm, setConfirm] = useState(null);
    const lang= "ES";
    const handleClickOpen = (e) => {
      e.preventDefault();
      setContacto(contacto === "closed" ? "open" : "open");
     /*  document.documentElement.style.overflow = "hidden"; */
     
    };
  
    const handleClickClose = (e) => {
      e.preventDefault();
      setContacto(contacto === "open" ? "closed" : "closed");
     /*  document.documentElement.style.overflow = "auto"; */
  
      setConfirm(null);
    };
   
    
    const handleChange = (e) => {
      e.preventDefault();
      const keyState = e.target.name;
      const valueState = e.target.value;
      setMessage({ ...message, [keyState]: valueState });
     console.log(message)
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (sending) return;
      if (
        message.name.length < 1 ||
        message.name.length > 50 ||
        message.email.length < 1 ||
        message.email.length > 50 ||
        message.message.length < 1 ||
        message.message.length > 700 ||
        message.honeypot.length > 0
      ) {
        setConfirm("exceeded");
        return;
      }
      setConfirm("loading");
      setSending(true);
      console.log(Key1,Key2 ,Key4)
      emailjs.sendForm(Key1, Key2 ,form.current, Key4)
      .then((res)=> {
  
        console.log(res)
        setConfirm(true);
        setMessage({
          name: "",
          email: "",
          message: "",
          honeypot: "",
        });
      })
      .catch((err)=>{
        console.log(err)
      })
      setSending(false);
     
    };
    
  
    return (
      <section>
        <div
          className={style.contact}
          onClick={handleClickOpen}
          rol="button"
          onFocus={handleClickOpen}
          tabIndex="-1"
        >
          {contacto === "open" && (
            <div className={style.containerContacto}>
              {lang === "ES" && (
                <Infobox
                  subtitle={"Charlemos!"}
                  text={
                    "Me encantaría hablar con vos.<br />Desde este formulario la página me envía un email directamente a mi correo."
                  }
                />
              )}
              {lang === "EN" && (
                <Infobox
                  subtitle={"Let's talk!"}
                  text={
                    "I would love to talk with you.<br />Through this form you can email-me.<br />You can test it sending to me a little message "
                  }
                />
              )}
              <form ref={form} className={`${style.form}`} onSubmit={handleSubmit}>
                <input
                  type="text"
                  maxLength="50"
                  className={style.name}
                  onChange={handleChange}
                  name="name"
                  value={message.name}
                  placeholder={lang === "EN" ? "Your name" : "Tu nombre"}
                  id="name"
                  required
                />
                <input
                  type="email"
                  maxLength="50"
                  className={style.name}
                  name="email"
                  onChange={handleChange}
                  value={message.email}
                  placeholder={lang === "EN" ? "Your email address" : "Tu email"}
                  id="email"
                  required
                />
                <textarea
                  className={style.text}
                  maxLength="700"
                  name="message"
                  onChange={handleChange}
                  value={message.message}
                  placeholder={lang === "EN" ? "Your message" : "Tu mensaje"}
                  id="message"
                  required
                />
                <div className={style.btnContainer}>
                  {confirm === "loading" && (
                    <div className={style.confirm}>
                      {lang === "ES" ? "Sending..." : "Enviando..."}
                    </div>
                  )}
                  {confirm === true && (
                    <div className={style.confirm}>
                      {lang === "ES" ? "Thanks!" : "Gracias!"}
                    </div>
                  )}
                  {confirm === "exceeded" && (
                    <div className={style.confirm}>
                      {lang === "ES"
                        ? "Too many characters"
                        : "Demasiados carácteres"}
                    </div>
                  )}
                  {confirm === "false" && (
                    <div className={style.confirm}>"Server Error"</div>
                  )}
                  <button
                    type="submit"
                    className={style.submit}
                    onClick={handleSubmit}
                  >
                    {lang === "EN" ? "Submit" : "Enviar"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        {contacto === "open" && (
          <button
            className={style.btnClose}
            onClick={handleClickClose}
            value="coso"
          ></button>
        )}
      </section>
    );
  };
export default Contact;