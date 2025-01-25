import { useState } from "react"
import styles from "./SearchBar.module.css"
import { useRouter } from "next/router"
function SearchBar() {
   const router = useRouter()

    const searchHandler = () => {
        if(min & max) {
          router.push(`/filter/${min}/${max}`)
        }else {
            alert("Please Enter minmum and maximum price!")
        }
    }

    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
  return (
    <div className={styles.container}>
       <div>
        <input placeholder="Inter min-price" value={min} onChange={(e) => setMin(e.target.value)}/>
        <input placeholder="Inter max-price" value={max} onChange={(e) => setMax(e.target.value)}/>
        <button onClick={searchHandler}>Search</button>
       </div>
    </div>
  )
}

export default SearchBar