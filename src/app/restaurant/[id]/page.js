"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const apiUrl = "https://restaurant-api.dicoding.dev/detail/";

const Page = ({ params: { id } }) => {
  const [restaurant, setRestaurant] = useState([]);
  const router = useRouter
  useEffect(() => {
    if (id) {
      axios
        .get(`https://restaurant-api.dicoding.dev/detail/${id}`)
        .then((response) => {
          setRestaurant(response.data.restaurant);
        })
        .catch((error) =>
          console.error("Error fetching restaurant data:", error)
        );
    }
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;
  const categories= restaurant.categories
  return (
    <div>
        <Link className="absolute text-gray-100 bg-black p-2 rounded-full left-2 top-2" href={"/"}>

        <ArrowLeft />
        </Link>
      <Image
        src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`}
        width={1200}
        height={400}
      />
      <div className="p-4">
        <h1 className="text-4xl">{restaurant.name}</h1>
        {/* <p className="text-sm text-gray-400">{restaurant.description}</p> */}
        <p className="mt-2"> City : {restaurant.city}</p>
        <p> Address : {restaurant.address}</p>
        <div className="flex gap-2 mt-2">
        
          {/* {restaurant.categories.map((data) => {
            return (
              <div className="px-2 py-1 text-sm rounded-full border border-gray-400 w-fit ">
                {data.name}
              </div>
            );
    })} */}
        </div>
      </div>
    </div>
  );
};

export default Page;
