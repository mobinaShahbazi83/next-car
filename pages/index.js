import CarsPage from "../components/templates/CarsPage"
import carsData from "../data/carsdata"
import Categories from "../components/module/Categories"
import SearchBar from "../components/module/SearchBar"
import AllButon from "@/components/module/AllButon"

function Home() {
  const cars = carsData.slice(0 , 3)

  return (
    <div>
      
      
      <SearchBar/>
      <Categories/>
      <AllButon/>
        <CarsPage data={cars}/>
    </div>
  );
}

export default  Home
