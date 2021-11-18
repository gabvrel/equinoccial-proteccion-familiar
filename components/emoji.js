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
        <circle
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
        />
      </svg>
      {status === 0 ? (
        <img className={styles.smile} src="/assets/sad.svg" alt="face" />
      ) : undefined}
      {status === 1 ? (
        <img className={styles.smile} src="/assets/happy4.svg" alt="face" />
      ) : undefined}
      {status === 2 ? (
        <img className={styles.smile} src="/assets/happy2.svg" alt="face" />
      ) : undefined}
      {status === 3 ? (
        <img className={styles.smile} src="/assets/happy3.svg" alt="face" />
      ) : undefined}
      {status === 4 ? (
        <img className={styles.smile} src="/assets/happy.svg" alt="face" />
      ) : undefined}
    </div>
  )
}

export default Emoji
