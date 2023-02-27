import React from 'react'
import Button from '../Home/Button'
import video from '../../assets/video-home-page.mp4'
import styles from './Home.module.css'

type Props = {}

const Home = (props: Props) => {
  return (
      <div className={styles.home}>
        <video className={styles.video} src={video} autoPlay/>
        <section className={styles.button}>
          <Button />
        </section>
      </div>
  );
}

export default Home