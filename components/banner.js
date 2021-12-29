import React, {useRef, useEffect} from "react"
import Image from "next/image"
import { gsap, Expo } from "gsap";
import styles from "../styles/Home.module.css"


const Banner = () => {
  const BannerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(BannerRef.current, {yPercent: -350 ,opacity: 0, duration:2, ease:Expo.easeInOut},0.25)
  }, [])
  return (
    <div className={styles.banner} ref={BannerRef}>
      {/* <Image
        src="/assets/familiarLogo.svg"
        alt="Picture of the author"
        width={300}
        height={50}
      /> */}
    </div>
  )
}
export default Banner
