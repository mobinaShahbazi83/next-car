import CarsPage from "@/components/templates/CarsPage"
import carsData from "../../data/carsdata"
import Categories from "@/components/module/Categories"
import SearchBar from "@/components/module/SearchBar"
import AllButon from "@/components/module/AllButon"

function Details() {
  return (
    <div>
      <SearchBar/>
      <Categories/>
      <AllButon/>
        <CarsPage data={carsData}/>
    </div>
  )
}

export default Details