import React, {useState, useEffect, useRef} from "react"
import { gsap, Expo } from "gsap";
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
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  const mainChoose = useRef(null);

  const houseChoose = useRef(null);

  const autoChoose = useRef(null);

  const petChoose = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, {yPercent: -350 ,opacity: 0, duration:2, ease:Expo.easeInOut},1)
      .from(subtitleRef.current, {yPercent: -350 ,opacity: 0, duration:2, ease:Expo.easeInOut},1.5)
      .from(buttonRef.current, {yPercent: -350 ,opacity: 0, duration:2, ease:Expo.easeInOut},2)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline();
    if (step === 1){
      tl.from(mainChoose.current, {yPercent: 500 ,opacity: 0, duration:1.5, ease:Expo.easeInOut},.5)
      return
    }
    if (step == 3){
      tl.from(houseChoose.current, {yPercent: 500 ,opacity: 0, duration:1.5, ease:Expo.easeInOut},.5)
        return;
    }
    if (step === 4){
      tl.from(autoChoose.current, {yPercent: 500 ,opacity: 0, duration:1.5, ease:Expo.easeInOut},.5)
        return;
    }
    if (step === 5){
      tl.from(petChoose.current, {yPercent: 550 ,opacity: 0, duration:1.5, ease:Expo.easeInOut},.5)
        return;
    }
  }, [step])

  useEffect(() => {
    const totalScore = hogar + auto + mascota
    setStatus(totalScore)
  }, [setStatus, hogar, auto, mascota])

  return (
    <div>
      {step === 0 ? (
        <div className={styles.quarter}>
          <h3 ref={titleRef} className={styles.title}>
            Toda la protección en un solo seguro 👪🔒❤️
          </h3>
          <h5 ref={subtitleRef} className={styles.subtitle}>
            Ten la tranquilidad de tener toda la protección en una sola póliza.
            Con las siguientes preguntas queremos conocer que tan protegido
            estás.
          </h5>
          <button ref={buttonRef} className={styles.button} onClick={handleNextStep}>
            Comenzar
          </button>
        </div>
      ) : undefined}
      {step === 1 ? (
        <div ref={mainChoose} className={styles.third}>
          <h3 className={styles.title}>
            ¿Cuentas con alguno de los
            siguientes seguros?
          </h3>
          <div className={styles.squareContainer}>
            <div className={styles.square} onClick={() => setHogar(!hogar)} style={hogar ? {backgroundColor: "#BBE5F9"} : {}}>
              <input
                type="checkbox"
                checked={hogar}
                onChange={() => setHogar(!hogar)}
              />
              <img src="/assets/casa.svg" alt="house" width="150px" />
              <p>Seguro de Hogar</p>
            </div>
            <div className={styles.square} onClick={() => setAuto(!auto)} style={auto ? {backgroundColor: "#BBE5F9"} : {}}>
              <input
                type="checkbox"
                checked={auto}
                onChange={() => setAuto(!auto)}
              />
               <img src="/assets/carro.svg" alt="car" width="135px" />
              <p>Seguro de auto</p>
            </div>
            <div className={styles.square} onClick={() => setMascota(!mascota)} style={mascota ? {backgroundColor: "#BBE5F9"} : {}}>
              <input
                type="checkbox"
                checked={mascota}
                onChange={() => setMascota(!mascota)}
              />
             <img src="/assets/perro.svg" alt="pet" width="125px"/>
              <p>Seguro de mascotas</p>
            </div>
          </div>
          <button className={styles.button} onClick={handleChoise}>
            Continuar
          </button>
        </div>
      ) : undefined}
      {step === 3 ? (
        <div ref={houseChoose} className={styles.half}>
          <h5 className={styles.prev} onClick={handlePrevStep}>
            {" "}
            <img src="/assets/atras.png" alt="prev"  />
            Atrás
          </h5>
          <h3  className={styles.title}>
            ¿Sabías que el uso de engaños o reemplazo de identidad es la primera forma de robo de casa? 
            
          </h3>
          <button  className={styles.whiteButton} onClick={handleFacetStep}>Si</button>
          <button  className={styles.whiteButton} onClick={handleFacetStep}>No</button>
        </div>
      ) : undefined}
      {step === 4 ? (
        <div ref={autoChoose}  className={styles.half}>
          <h5 className={styles.prev} onClick={handlePrevStep}>
            {" "}
            <img src="/assets/atras.png" alt="prev" />
            Atrás
          </h5>
          <h3 className={styles.title}>
            ¿Sabías que 4 de cada 10 accidentes de tránsito se produce por fallas en el vehículo?
          </h3>
          <button className={styles.whiteButton} onClick={handleFacetStep}>Si</button>
          <button className={styles.whiteButton} onClick={handleFacetStep}>No</button>
        </div>
      ) : undefined}
      {step === 5 ? (
        <div ref={petChoose} className={styles.half}>
          <h5 className={styles.prev} onClick={handlePrevStep}>
            {" "}
            <img src="/assets/atras.png" alt="prev" />
            Atrás
          </h5>
          <h3  className={styles.title}>
            ¿Sabías que 2 de cada 5 perros o gatos pueden llegar a tener cáncer? 
          </h3>
          <button className={styles.whiteButton} onClick={handleFacetStep}>Si</button>
          <button className={styles.whiteButton} onClick={handleFacetStep}>No</button>
        </div>
      ) : undefined}
    </div>
  )
}

export default Chat
