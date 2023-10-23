import styles from "./Home.module.css";
import { cars as carsData } from "./cars.data.js";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { useState } from "react";

// const cars = [];

function Home() {
  const [cars, setCars] = useState(carsData);
  console.log("cars", cars);

  return (
    <div>
      <h1>Cars Catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>Theres no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
