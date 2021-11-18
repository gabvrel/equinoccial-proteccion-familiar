import React from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"


const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image
        src="/assets/familiarLogo.svg"
        alt="Picture of the author"
        width={300}
        height={50}
      />
    </div>
  )
}
export default Banner
