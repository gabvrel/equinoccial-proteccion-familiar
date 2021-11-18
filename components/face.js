import React from "react"
import Emoji from "./emoji"
import styles from "../styles//Home.module.css"


const Face = ({status}) => {
  return (
    <div className={styles.face}>
      <Emoji status={status} />
      <p className={styles.contactTitle}>
        Contáctanos
        <br /><br />
        <span>Llena el formulario y uno de nuestros asesores se pondrá en contacto
        contigo</span>
      </p>
      <button className={styles.buttontransparent}>Llenar formulario</button>
    </div>
  )
}

export default Face
