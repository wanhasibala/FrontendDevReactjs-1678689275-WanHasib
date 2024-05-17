"use client";
import Image from "next/image";
import Card from "./(component)/Card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./(component)/Navbar";

const pageSize = 5;

export default function Home() {
  const [restaurant, setRestaurant] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    response(currentPage, minRating);
  }, [currentPage,minRating]);

  const response = (page) => {
    axios
      .get("https://restaurant-api.dicoding.dev/list")
      .then((response) => {

        let allRestaurants = response.data.restaurants;

        // if (rating > 0) {
        //   allRestaurants = allRestaurants.filter(
        //     restaurant => restaurant.rating >= rating
        //   );
        // }

        const startIndex = (page -1 ) *pageSize;
        const endIndex = startIndex + pageSize;
        const newRestaurants = allRestaurants.slice(startIndex, endIndex);

        console.log(allRestaurants);
        if (newRestaurants.length > 0) {
          if(page ===1) {
            setRestaurant(newRestaurants)
          } else{
          setRestaurant((prevRestaurants) => [
            ...prevRestaurants,
            ...newRestaurants,
          ]);
        }
        } else {
          setHasMore(false);
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };
  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // const handleRatingChange =(rating) => {
  //   setCurrentPage(1);
  //   setMinRating(rating);
  // }
  return (
    <>
      <Navbar  />
      <main className="flex min-h-screen flex-col  p-8">
        <div className="text-2xl">All Restaurant</div>
        <div className="mt-12 grid gap-2 xl:grid-cols-5 grid-cols-2 md:grid-cols-3">
          {restaurant.map((restaurant, index) => {
            return (
              <Card
                name={restaurant.name}
                key={index}
                star={restaurant.rating}
                image={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}
                id={restaurant.id}
              />
            );
          })}
        </div>
        <p>{/* {response.data} */}</p>
        <div className="flex justify-center mt-12">
          {" "}
          <Button variant="outline" className="w-[400px]" onClick={loadMore}>
            Load More
          </Button>
        </div>
      </main>
    </>
  );
}
