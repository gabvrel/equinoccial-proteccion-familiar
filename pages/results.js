import {useState, useEffect} from "react"
import Head from "next/head"
import {useRouter} from "next/router"
import Emoji from "../components/emoji"
import Form from "../components/form"
import styles from "../styles/Results.module.css"

const Results = () => {
  const router = useRouter()
  let {home, auto, pet, status} = router.query
  home = home === "true" ? true : false
  auto = auto === "true" ? true : false
  pet = pet === "true" ? true : false
  status = parseInt(status)

  const homePrice = !home ? 11.48 : 0
  const petPrice = !pet ? 13.49 : 0
  const autoPrice = !auto ? 60.0 : 0

  let sum = homePrice + petPrice + autoPrice
  sum = sum.toFixed(2)


  return (
    <>
      <div className={styles.resultsPage}>
        <div className={styles.container}>
          <img
            src="/assets/planFmEquiLogo.svg"
            alt="Picture of the author"
            className={styles.mainLogo}
          />
          <div className={styles.blueResults}>
            <Emoji status={status} />
            {status === 0 ? (
              <div className={styles.resultsDesc}>
                <h3>
                  ¡Tu riesgo es muy alto! Necesitas mejorar tu
                  <br /> respaldo
                </h3>
                <p>
                  Conoce las promociones que tenemos para tí. Recuerda que si
                  contratas 2 o más de nuestros productos, puedes ganar una gift
                  card de hasta $200.
                </p>
              </div>
            ) : undefined}
            {status === 1 ? (
              <div className={styles.resultsDesc}>
                <h3>
                  Se ve que has pensado en tu respaldo, pero aún lo puedes
                  mejorar.{" "}
                </h3>
                <p>
                  Conoce las promociones que tenemos para tí. Recuerda que si
                  contratas 2 o más de nuestros productos, puedes ganar una gift
                  card de hasta $200.
                </p>
              </div>
            ) : undefined}
            {status === 2 ? (
              <div className={styles.resultsDesc}>
                <h3>
                  ¡Has pensado casi en todo!
                  <br /> Tenemos la forma perfecta de
                  <br /> completar tu respaldo.
                </h3>
                <p>
                  Conoce las promociones que tenemos para tí.
                  <br /> Recuerda que si contratas 2 o más de nuestros
                  <br /> productos, puedes ganar una gift card de hasta $200.
                </p>
              </div>
            ) : undefined}
            {status === 3 ? (
              <div className={styles.resultsDesc}>
                <h3>¡Felicidades! Tienes un excelente respaldo.</h3>
                <p>
                  Conoce las promociones que tenemos para tí. Recuerda que si
                  contratas 2 o más de nuestros productos, puedes ganar una gift
                  card de hasta $200.
                </p>
              </div>
            ) : undefined}
          </div>
          {status !== 3 ? (
            <div className={styles.infoResults}>
              <div>
                <h3 className={styles.superTitle}>
                  Plan familiar tiene para ti los mejores planes
                </h3>
                <p className={styles.superInfo}>
                  Conoce las mejores opciones para ti y tu familia. Déjanos tus
                  datos y nos contáctaremos contigo para brindarte más
                  información
                </p>
                {home === false ? (
                  <div className={styles.infoDetails}>
                    <img
                      src="/assets/hogarzen.svg"
                      alt="hogarzen"
                      width="125px"
                    />
                    <p>
                      Desde <span>$11.48</span>
                    </p>
                  </div>
                ) : undefined}
                {pet === false ? (
                  <div className={styles.infoDetails}>
                    <img
                      src="/assets/petsafe.svg"
                      alt="hogarzen"
                      width="125px"
                    />
                    <p>
                      Desde <span>$13.49</span>
                    </p>
                  </div>
                ) : undefined}
                {auto === false ? (
                  <div className={styles.infoDetails}>
                    <img src="/assets/acAll.svg" alt="hogarzen" />
                    <p>
                      Desde <span>$60.00</span>
                    </p>
                  </div>
                ) : undefined}
                <div className={styles.results}>
                  <img src="/assets/card.png" />
                  <div className={styles.resultsInfo}>
                    <p>
                      Llévalos desde <span>$ {sum}*</span>
                    </p>
                    <p>
                      Contrata los seguros que necesite tu familia y recibe una
                      Giftcard de descuento.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.formContainer}>
                <h4 className={styles.superFormTitle}>Contáctanos</h4>
                <Form {...{home, auto, pet}}/>
              </div>
            </div>
          ) : undefined}
        </div>
      </div>
    </>
  )
}

export default Results
