import React from "react"
import styled from "styled-components"
import Image from "next/image"
import styles from "../../styles/Home.module.css"

const StyledBanner = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  background-size: cover;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 20px;
`

const Banner = () => {
  return (
    <StyledBanner className={styles.banner}>
      <Image
        src="/assets/familiarLogo.svg"
        alt="Picture of the author"
        width={300}
        height={50}
      />
    </StyledBanner>
  )
}
export default Banner
