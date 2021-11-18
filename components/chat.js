import React, {useState, useEffect} from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const Chat = ({
  step,
  handleNextStep,
  handlePrevStep,
  handleChoise,
  setStatus,
  hogar,
  setHogar,
  auto,
  setAuto,
  mascota,
  setMascota,
  handleFacetStep,
}) => {
  useEffect(() => {
    const totalScore = hogar + auto + mascota
    setStatus(totalScore)
  }, [setStatus, hogar, auto, mascota])

  return (
    <div>
      {step === 0 ? (
        <div className={styles.quarter}>
          <h3 className={styles.title}>
            Toda la protección en un solo seguro 👪🔒❤️
          </h3>
          <h5 className={styles.subtitle}>
            Ten la tranquilidad de tener toda la protección en una sola póliza.
            Con las siguientes preguntas queremos conocer que tan protegido
            estás.
          </h5>
          <button className={styles.button} onClick={handleNextStep}>
            Comenzar
          </button>
        </div>
      ) : undefined}
      {step === 1 ? (
        <div className={styles.third}>
          <h3 className={styles.title}>
            ¿Cuentas con alguno de los
            siguientes seguros?
          </h3>
          <div className={styles.squareContainer}>
            <div className={styles.square} onClick={() => setHogar(!hogar)}>
              <input
                type="checkbox"
                checked={hogar}
                onChange={() => setHogar(!hogar)}
              />
              <img src="/assets/corazonHogar.svg" alt="house" width="150px" />
              <p>Seguro de Hogar</p>
            </div>
            <div className={styles.square} onClick={() => setAuto(!auto)}>
              <input
                type="checkbox"
                checked={auto}
                onChange={() => setAuto(!auto)}
              />
               <img src="/assets/corazonAuto.svg" alt="car" width="135px" />
              <p>Seguro de auto</p>
            </div>
            <div className={styles.square} onClick={() => setMascota(!mascota)}>
              <input
                type="checkbox"
                checked={mascota}
                onChange={() => setMascota(!mascota)}
              />
             <img src="/assets/corazonPerro.svg" alt="pet" width="125px"/>
              <p>Seguro de mascotas</p>
            </div>
          </div>
          <button className={styles.button} onClick={handleChoise}>
            Continuar
          </button>
        </div>
      ) : undefined}
      {step === 3 ? (
        <div className={styles.half}>
          <h5 className={styles.prev} onClick={handlePrevStep}>
            {" "}
            <img src="/assets/prev.svg" alt="prev"  />
            Atrás
          </h5>
          <h3 className={styles.title}>
            ¿Sabías que el robo en casas se ha incrementado en el último año? 🏘
            😥
          </h3>
          <button className={styles.whiteButton} onClick={handleFacetStep}>Si</button>
          <button className={styles.whiteButton} onClick={handleFacetStep}>No</button>
        </div>
      ) : undefined}
      {step === 4 ? (
        <div className={styles.half}>
          <h5 className={styles.prev} onClick={handlePrevStep}>
            {" "}
            <img src="/assets/prev.svg" alt="prev" />
            Atrás
          </h5>
          <h3 className={styles.title}>
            ¿Sabías que la mayor causa de accidentes es por neumáticos lizos?
            💥🚗
          </h3>
          <button className={styles.whiteButton} onClick={handleFacetStep}>Si</button>
          <button className={styles.whiteButton} onClick={handleFacetStep}>No</button>
        </div>
      ) : undefined}
      {step === 5 ? (
        <div className={styles.half}>
          <h5 className={styles.prev} onClick={handlePrevStep}>
            {" "}
            <img src="/assets/prev.svg" alt="prev" />
            Atrás
          </h5>
          <h3 className={styles.title}>
            ¿Sabías que las mascotas pueden sufrir accidentes de forma
            periódica? 😟
          </h3>
          <button className={styles.whiteButton} onClick={handleFacetStep}>Si</button>
          <button className={styles.whiteButton} onClick={handleFacetStep}>No</button>
        </div>
      ) : undefined}
    </div>
  )
}

export default Chat
