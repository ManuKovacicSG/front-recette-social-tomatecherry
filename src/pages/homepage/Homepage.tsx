import React from 'react'
import styles from './Homepage.module.css'
import BonAppetitButton from '../../components/BonAppetitButton'


type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className={styles.body}>
      <BonAppetitButton />
    </div>
  )
}

export default Homepage