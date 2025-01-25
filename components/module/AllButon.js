import Link from "next/link"
import styles from "./AllButon.module.css"

function AllButon() {
  return (
    <div className={styles.container}>
      <Link href="/cars">See all cars</Link>
    </div>
  )
}

export default AllButon