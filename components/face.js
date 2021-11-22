import React,{useState, useRef, useEffect} from "react"
import { gsap, Expo } from "gsap";
import Emoji from "./emoji"
import Form from "../components/form"
import styles from "../styles//Home.module.css"

const Face = ({status, home, auto, pet}) => {
  const [show, setShow] = useState(false)
  const panel = useRef(null);


  const handleShow = () =>{
    const tl = gsap.timeline();
    if(window.innerWidth <= 480){
      window.scrollTo(0,document.body.scrollHeight);
    } else {
      tl.to(panel.current, {xPercent: show ? 0 : -142, ease:Expo.easeInOut})
    }
    setShow(!show);
  }

  return (
    <div className={styles.rightContainer}>
      <div ref={panel} className={styles.rightWindow}>
      <img src="/assets/equis.png" alt="face" className={styles.equis} onClick={handleShow}/>
        <img src="/assets/familia.png" alt="face" className={styles.family} />
        <div className={styles.formContainer}>
          <Form {...{home, auto, pet}} />
        </div>
      </div>
      <div className={styles.face}>
        <Emoji status={status} />
        <p className={styles.contactTitle}>
          Contáctanos
          <br />
          <br />
          <span>
            Llena el formulario y uno de nuestros asesores se pondrá en contacto
            contigo
          </span>
        </p>
        <button onClick={handleShow} className={styles.buttontransparent}>Llenar formulario</button>
      </div>
    </div>
  )
}

export default Face
