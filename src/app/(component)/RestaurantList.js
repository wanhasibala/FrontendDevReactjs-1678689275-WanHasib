import React from "react";

const RestaurantList = async () => {
  const response = await axios("https://restaurant-api.dicoding.dev/list");
  const restaurant = response.data.restaurants;
  // console.log(restaurant.rating)
  function addOpenStatus(restaurant) {
    return restaurant.map((restaurant) => {
      restaurant.isOpen = Math.random() >= 0.5;
      return restaurant;
    });
  }
    return (
      <>
        <div className="mt-12 grid gap-2 xl:grid-cols-5 grid-cols-2 md:grid-cols-3">
          {restaurant.slice(0, 5).map((data) => {
            const status = data.isOpen ? "Open now" : "Closed";
            console.log(status);
            return (
              <Card
                name={data.name}
                key={data.id}
                star={data.rating}
                status={status}
                image={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
              />
            );
          })}
        </div>
      </>
    );
  }


export default RestaurantList;
