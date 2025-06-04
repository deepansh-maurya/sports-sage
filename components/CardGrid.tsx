"use client";
import badminton from "../public/badminton.png";
import baseball from "../public/baseball.png";
import carrom from "../public/carrom.png";
import cricket from "../public/cricket.png";
import darts from "../public/darts.png";
import football from "../public/football.png";
import Image from "next/image";
import golf from "../public/golf.png";
import hoackey from "../public/hoackey.png";
import kabbadi from "../public/kabbadi.png";
import khokho from "../public/khokho.png";
import kite from "../public/kite.png";

import squash from "../public/squash.png";
import table from "../public/table.png";
import tennis from "../public/tennis.png";
import volleyball from "../public/volleyball.png";

import { useRouter } from "next/navigation";
export default function Cardgrid() {
  const router = useRouter();
  const cards = Array.from({ length: 15 }, (_, i) => `Card ${i + 1}`);
  const photArray = [
    badminton,
    baseball,
    carrom,
    cricket,
    darts,
    football,
    golf,
    hoackey,
    kabbadi,
    khokho,
    kite,
    squash,
    table,
    tennis,
    volleyball,
  ];
  const photNames = [
    "badminton",
    "baseball",
    "carrom",
    "cricket",
    "darts",
    "football",
    "golf",
    "hockey",
    "kabbadi",
    "kho kho",
    "kite flying",
    "squash",
    "table tennis",
    "tennis",
    "volleyball",
  ];
  return (
    <div className=" mt-10 items-center justify-center bg-gradient-to-r min-h-screen bg-gray-100 flex flex-col">
      <h1 className="mt-10 mb-10 text-5xl font-medium text-shadow-lg">
        {" "}
        Pick a Sport and Start Learning
      </h1>

      <div className="flex flex-wrap justify-center p-4 ">
        {cards.map((card, index) => (
          <div
            onClick={() => {
              router.push(`/sports/${photNames[index]}`);
            }}
            key={index}
            className="relative p-4 m-2 w-full shadow-black   h-48 lg:w-1/4  rounded shadow-md hover:bg-gray-100  flex  transform transition-transform duration-300 hover:scale-105  hover:shadow-xl justify-center items-center text-3xl"
          >
            <div className=" hover:opacity-0 hover:bg-black  flex transition duration-300 items-center justify-center">
              <div className="p-8 text-3xl font-medium ">
                {photNames[index]}
              </div>
            </div>
            <Image
              src={photArray[index]}
              alt=""
              className="w-full h-full absolute hover:opacity-50 transition duration-300 filter hover:blur-md transition-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
