import React from "react";

function Carlist() {
  const carListData = [
    { name: "Honda Vezel", condition: "New", price: 2000 },
    { name: "Honda Civic", condition: "Used", price: 3000 },
  ];

  return (
    <div>
      {carListData.map((car, index) => (
        <>
          <h5>
            {car.name}-{car.condition}-${car.price}
          </h5>
        </>
      ))}
    </div>
  );
}

export default Carlist;
