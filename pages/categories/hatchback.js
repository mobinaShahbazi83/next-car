import CarsList from "@/components/templates/CarsList";
import carsData from "../../data/carsData"

function Hatchback() {
  const hatchbackCars = carsData.filter(car => car.category === "hatchback");
  return (
    <div>
      <CarsList data={hatchbackCars}/>
    </div>
  )
}

export default Hatchback