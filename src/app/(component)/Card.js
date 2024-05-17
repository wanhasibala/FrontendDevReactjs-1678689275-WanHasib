import { Button } from "@/components/ui/button";
import { Circle, Star, StarHalf, StarHalfIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ name, star, image, id }) => {
  return (
    <div className="w-full border border-gray-200 flex flex-col p-2 gap-4">
      <Image
        src={image}
        className="w-full h-[200px] object-cover"
        width={200}
        height={200}
      />
      <div className="flex gap-2 flex-col">
        <h1 className="text-xl">{name}</h1>
        <div className="flex gap-1">
          <Rating star={star} />
        </div>
        <div className="text-xs flex justify-between text-gray-500">
          <p>Thai -$$$$</p>
          <div className="flex items-center gap-2">
            <Circle size={10} />
            Open now
          </div>
        </div>
      </div>

      <Link href={`/restaurant/${id}`} className="self-center">
        <Button
          variant="secondary"
          className="rounded-none"
          href={`/restaurant/${id}`}
        >
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default Card;

const Rating = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <Star fill="111" size={14} color="yello" />
        ) : star >= number ? (
          <StarHalf fill="111" strokeWidth={1} size={14} color="111" />
        ) : (
          <Star size={14} color="111" strokeWidth={1} />
        )}
      </span>
    );
  });
  return <div className="flex">{ratingStar}</div>;
};
