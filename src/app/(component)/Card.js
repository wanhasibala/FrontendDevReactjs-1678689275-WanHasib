import { Button } from "@/components/ui/button";
import { Circle, Star } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className="w-full border border-gray-200 flex flex-col p-2 gap-4">
      <div className="w-full bg-gray-400 h-[200px] "></div>
      <div className="flex gap-2 flex-col">
        <h1 className="text-xl">Very long name restaurant</h1>
        <div className="flex gap-1">
          <Star fill="000" size={16} />
          <Star fill="000" size={16} />
          <Star fill="000" size={16} />
          <Star fill="000" size={16} />
          <Star fill="000" size={16} />
        </div>
        <div className="text-xs flex justify-between text-gray-500">
          <p>Thai -$$$$</p>
          <div className="flex items-center gap-2">
            <Circle size={10} />
            Open Now
          </div>
        </div>

      </div>
      <Button variant="secondary" className="rounded-none">Learn More</Button>
    </div>
  );
};

export default Card;
