import React from 'react'
import Button from '../../components/Button'
import video from '../../Assets/video/video.mp4'
import styles from './Homepage.module.css'

type Props = {}

const Homepage = (props: Props) => {
  return (
      <body className={styles.home}>
        <video className={styles.video} src={video} autoPlay/>
        <section className={styles.button}>
          <Button />
        </section>
      </body>
  );
}

export default Homepage