import Link from 'next/link'

import styles from "./styles.module.css"

const Card = ({ title, body, href }) => {
  return (
    <Link
      href={href}
    >
      <div className={styles.card}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  )
}

export default Card