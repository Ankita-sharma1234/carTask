import React, { useState } from "react";

const CarItem = () => {
  const CAR_LIST = [
    {
      id: 1,
      make: "Mitsubishi",
      model: "Lancer",
      type: "Used",
    },
    { id: 2, make: "Honda", model: "Vezel", type: "New" },
    { id: 3, make: "Honda", model: "Civic", type: "Used" },
    { id: 4, make: "Audi", model: "A3", type: "New" },
    { id: 5, make: "Audi", model: "A4", type: "Used" },
    { id: 6, make: "Audi", model: "A7", type: "New" },
    { id: 7, make: "BMW", model: "i8", type: "Used" },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
    FilterCar(e.target.value);
  };

  const FilterCar = (query) => {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) {
      setSearchResults([]);
      return;
    }

    const FilteredCar = CAR_LIST.filter(
      (car) =>
        car.make.toLowerCase().includes(normalizedQuery) || 
        car.model.toLowerCase().includes(normalizedQuery)
    );
    setSearchResults(FilteredCar);
  };
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInput}
        placeholder="Search by make or model"
      />

      <ul>
        {searchResults.map((car) => (
          <li key={car.id}>
            {car.make} - {car.model} - {car.type} - ${car.id}
          </li>
        ))}
      </ul>
     
    </div>
  );
};
export default CarItem;
