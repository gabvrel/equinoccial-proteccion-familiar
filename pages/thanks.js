import React from "react"
import styles from "../styles/Thanks.module.css"

const Thanks = () => {
  return (
    <>
      <div className={styles.thanksPage}>
        <div className={styles.container}>
        <img
            src="/assets/planFmEquiLogo.svg"
            alt="Picture of the author"
            className={styles.mainLogo}
          />
          <div className={styles.blueResults}>
          <img
            src="/assets/check.svg"
            alt="Picture of the author"
            className={styles.check}
          />
            <div className={styles.resultsDesc}>
                <h3>
                ¡Estás más cerca de la protección que necesitas!
                </h3>
                <p>
                Tus datos han sido recibidos éxitosamente. Uno de nuestros asesores se pondrá en contacto contigo para brindarte toda la información que necesitas.
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Thanks
