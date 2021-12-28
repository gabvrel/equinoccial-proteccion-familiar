import React from "react"
import styles from "../styles//Home.module.css"

const Emoji = ({status}) => {
  const payloadStatus =
    status === 4
      ? 0
      : status === 0
      ? 100
      : status === 1
      ? 66
      : status === 2
      ? 33
      : status === 3
      ? 1.5
      : 0
  const payloadColor =
    status === 0
      ? "#E79496"
      : status === 1
      ? "#F8DBCA"
      : status === 2
      ? "#D7EDA4"
      : status === 3
      ? "#00ACFF"
      : "white"

  const sqSize = 280
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - 20) / 2
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * payloadStatus) / 100

  const strokeWidth = 20
  return (
    <div className={styles.progress}>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        {/* <circle
          className={styles.circlebackground}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className={styles.circleprogress}
          stroke={payloadColor}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        /> */}
      </svg>
      {status === 0 ? (
        <img className={styles.smile} src="/assets/triste.svg" alt="face" />
      ) : undefined}
      {status === 1 ? (
        <img className={styles.smile} src="/assets/regular.svg" alt="face" />
      ) : undefined}
      {status === 2 ? (
        <img className={styles.smile} src="/assets/medio.svg" alt="face" />
      ) : undefined}
      {status === 3 ? (
        <img className={styles.smile} src="/assets/feliz.svg" alt="face" />
      ) : undefined}
      {status === 4 ? (
        <img className={styles.smile} src="/assets/feliz.svg" alt="face" />
      ) : undefined}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 416.62 35.1"
        width="350"
      >
        <rect
          className={status >= 1 ? styles.rectActive : styles.rect}
          width="137.12"
          height="35.1"
        />
        <rect
          className={status >= 2 ? styles.rectActive : styles.rect}
          x="139.75"
          width="137.12"
          height="35.1"
        />
        <rect
          className={status >= 3 ? styles.rectActive : styles.rect}
          x="279.5"
          width="137.12"
          height="35.1"
        />
      </svg>
      <div className={styles.descFace}>
        {status === 1 ? (
          <p>
            <b>¡Mmm ya vas cerca! Estás 33% protegido </b>
             ante eventualidades con tu familia.
          </p>
        ) : 
        status === 2 ? (
          <p>
            <b>¡Ya casi! Estás 66% protegido</b> y tu familia
            ante los percances en tu vehículo, hogar o
            con tu mascota. 
          </p>
        ): 
        status === 3 ? (
          <p>
            <b>¡Felicidades! Estás 100% protegido!</b>
          </p>
        ): 
        status === 0 ? (
          <p>
            <b>¡Oh no! Estás 0% protegido </b>ante cualquier
eventualidad en tu vehículo, hogar o
mascota.
          </p>
        )
      : undefined}
      </div>
    </div>
  )
}

export default Emoji
