import { useRouter } from "next/router"
import carsData from "../../data/carsData"
import CarsList from "@/components/templates/CarsList"

function FilterdCars() {
    const router = useRouter()

    const [min, max] = router.query.slug || []

    const filterdData = carsData.filter(item => item.price > min && item.price < max)
    if(!filterdData.length) return <h3>NotFound</h3>

  return (
    <div>
        <CarsList data={filterdData}/>
    </div>
  )
}

export default FilterdCars