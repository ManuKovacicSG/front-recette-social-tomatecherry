import React from 'react'
import BonAppetitButton from '../../components/BonAppetitButton'
import video from '../../Assets/video/video.mp4'
import styles from './Homepage.module.css'

type Props = {}

const Homepage = (props: Props) => {
  return (

      <body className={styles.home}>
        <video className={styles.video} src={video} autoPlay/>
        <section className={styles.button}>
          <BonAppetitButton />
        </section>
      </body>
  );
}

export default Homepage