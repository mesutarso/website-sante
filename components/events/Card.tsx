import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  color: "pink" | "blue";
  title: string;
  location: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({
  color,
  title,
  location,
  date,
}) => {
  const bgColor = color === "pink" ? "bg-pink-200" : "bg-[#1a2f4b]";
  const textColor = color === "pink" ? "text-pink-500" : "text-white";

  return (
    <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
      <div className={`${bgColor} w-12 h-12 rounded-full flex-shrink-0`}></div>
      <div className="flex-grow w-[50%]">
        <h2 className="text-lg font-bold text-[#1a2f4b] leading-tight">
          {title}
        </h2>
      </div>
      <p className="text-[#1a2f4b] underline ">{location}</p>
      <div className="flex flex-col items-end space-y-2">
        <div
          className={`${bgColor} ${textColor} text-[10px] font-semibold px-3 text-center py-2 rounded w-[150px]`}
        >
          {date}
        </div>

        <Button
          variant={"outline"}
          className="mt-8 bg-transparent shadow-none flex items-center gap-4 text-[11px] border-blue"
        >
          <span>Voir les Détails</span> <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
