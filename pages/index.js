import {useState, useEffect} from "react"
import Head from "next/head"
import Router from "next/router"

import styles from "../styles/Home.module.css"

import Chat from "../components/chat"
import Face from "../components/face"
import Banner from "../components/styled/Banner"

export default function Home() {
  const [status, setStatus] = useState(0)
  const [step, setStep] = useState(0)
  const [pagination, setPagination] = useState(0)
  const [hogar, setHogar] = useState(false)
  const [auto, setAuto] = useState(false)
  const [mascota, setMascota] = useState(false)
  const [facetsArray, setFacetsArray] = useState([])

  useEffect(() => {
    setStatus(4)
  }, [])

  useEffect(() => {
    if (step === 1 && pagination === 0 && (hogar || auto || mascota)) {
      setStatus(0)
      return
    }
    if (step > 1 && status === 4){
      setStatus(0)
      return
    }
  }, [step, setStep, pagination])

  useEffect(() => {
    if (pagination !== 0) {
      setStep(pagination)
    }
  }, [pagination, setPagination])

  const handleNextStep = () => {
    if (pagination !== 0) {
      setStep(pagination)
      return
    }
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    if (step === 2 && pagination !== 0) {
      setPagination(0)
    }
    setStep(1)
  }

  const handleFacetStep = () => {
    if (facetsArray.length === 0) {
      Router.push(`/results?home=${hogar}&&auto=${auto}&&pet=${mascota}&&status=${status}`)
      return
    }
    let facetsArrayPayload = facetsArray.slice(1, 3)
    setFacetsArray(facetsArrayPayload)
    setPagination(facetsArray[0])
  }

  const handleChoise = () => {
    if (status === 3) {
      Router.push(`/results?home=${true}&&auto=${true}&&pet=${true}&&status=${status}`)
      return
    }
    const payloadHogar = hogar ? 0 : 3
    const payloadAuto = auto ? 0 : 4
    const payloadMascota = mascota ? 0 : 5
    const payloadPagination = [payloadHogar, payloadAuto, payloadMascota]
    let facetsArrayPayload = facetsArray
    payloadPagination.map(el => {
      if (el !== 0) {
        facetsArrayPayload.push(el)
      }
    })
    setFacetsArray(facetsArrayPayload)
    handleFacetStep()
  }

  return (
    <>
      <Head>
        <title>Protección Familiar Equinoccial</title>
        <meta
          name="description"
          content="Protección Familiar Seguros Equinoccial"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/HelveticaNeue.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeue-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      {step === 0 ? <Banner /> : undefined}
      <div className={styles.main}>
        <div className={styles.container}>
          {step > 0 ? (
            <img
              src="/assets/planFmEquiLogo.svg"
              alt="face"
              width={350}
              height={90}
              className={styles.mainLogo}
            />
          ) : undefined}
          <Chat
            {...{
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
            }}
          />
        </div>
        {step >= 1 ? 
        <Face {...{status}}/>
      : undefined}
      </div>
    </>
  )
}
