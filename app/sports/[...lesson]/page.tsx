"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import footballp from "../../../public/asset/footballp.png";
import footballg from "../../../public/asset/footballg.png";
import badmintong from "../../../public/asset/badmintong.png";
import badmintonp from "../../../public/asset/badmintonp.png";

import { StaticImageData } from "next/image";
import { useState } from "react";
interface Lesson {
  football: StaticImageData;
  badminton: StaticImageData;
}
const playerArray: Lesson = {
  badminton: badmintonp,
  football: footballp,
};
const fieldArray: Lesson = {
  football: footballg,
  badminton: badmintong,
};
const gameRules = {
  football: [
    "Kick-off starts the game",
    "Offside rule enforced",
    "Free kick awarded for fouls",
    "Goal kick after a miss",
    "Throw-in for out-of-bounds",
    "Penalty kick for fouls in box",
    "Corner kick from corner arc",
    "Handball prohibited in play",
    "Yellow card for caution",
    "Red card for ejection",
    "Substitutions allowed during stoppages",
    "Extra time for ties",
    "Injury time added",
    "Direct free kick for major fouls",
    "Indirect free kick for minor fouls",
    "No fouling or misconduct",
    "Equal teams on field",
    "Game duration 90 minutes",
    "Goal scoring objective",
    "Fair play mandatory",
  ],
  badminton: [
    "Rally scoring system used",
    "Match played to 21 points",
    "Players must serve diagonally",
    "Shuttlecock must not hit ground",
    "Server must not step on lines",
    "Fault for illegal serves",
    "Each player serves for one turn",
    "Players switch sides after game",
    "No obstruction of opponent",
    "Shuttlecock must be hit above waist",
    "Match consists of best of three games",
    "Players must not touch net",
    "No hitting shuttlecock twice",
    "Service must be underhand",
    "Double faults result in point loss",
    "Players may only hit shuttlecock once",
    "Shuttlecock must cross the net",
    "Let serves result in replay",
    "Out of bounds if beyond lines",
    "Fair play and sportsmanship required",
  ],
};
const gameSkills = {
  football: [
    "Power",
    "Speed & Agility",
    "Dribbling",
    "Passing & Receiving",
    "Shielding",
    "Tackling",
    "Trapping",
    "Shooting",
    "Goalkeeping",
  ],
  badminton: [
    "Footwork",
    "Grip Technique",
    "Serving",
    "Smash",
    "Clear",
    "Drop Shot",
    "Net Play",
    "Defense",
    "Lifting",
    "Rallying",
    "Court Awareness",
    "Shot Selection",
    "Anticipation",
    "Tactical Play",
    "Mental Toughness",
  ],
};

const lectures = {
  football: {
    basic: [
      "https://www.youtube.com/embed/naEccnjzLxM?si=4UwhvyyB7E75XPKb",
      "https://www.youtube.com/embed/__kbC4hzcTo?si=tMlRpd82D3O18sZu",
      "https://www.youtube.com/embed/_f9ZIh8ESn4?si=InRldp_E6mw19CAF",
      "https://www.youtube.com/embed/g930trA83j0?si=-4BvK1gPoArp5Zl2",
      "https://www.youtube.com/embed/U9OcS2kPECk?si=Mwvj5lTWoCf7H8Ku",
    ],
    intermediate: [
      "https://www.youtube.com/embed/KDgc1smpJuc?si=dbLqxmjkYdgRAxWz",
      "https://www.youtube.com/embed/YHnQtydwmdQ?si=SFFvC-QzPYaC_wiM",
      "https://www.youtube.com/embed/XxKLHd1_oVs?si=0kPILoemLd_kM6sS",
      "https://www.youtube.com/embed/SxVaMcHqcoU?si=FcZSoiR0GnZDgX55",
      "https://www.youtube.com/embed/6mFfS1PE3Vo?si=4ner02xiWIo665E8",
    ],
    advance: [
      "https://www.youtube.com/embed/efdxdNxqBQI?si=T1e6_KLly4-Y71e3",
      "https://www.youtube.com/embed/YrH-Hky1WI0?si=pIUOTyIUSW6_7F31",
      "https://www.youtube.com/embed/1yPMlA2tbGw?si=AVUAy-L3DOfFXoC-",
      "https://www.youtube.com/embed/fVX_3AVVDRM?si=Eq2ldvgG30nmx9z_",
      "https://www.youtube.com/embed/V6JbOjYoTf8?si=j9GwKwL2B1k435H1",
    ],
  },
  badminton: {
    basic: [
      "https://www.youtube.com/embed/H47o5uOV2Rc?si=a7rPbT2BB65Jc6Mn",
      "https://www.youtube.com/embed/fQsL6MdDpZ4?si=v4MsXoOj7CL8N5Zv",
      "https://www.youtube.com/embed/AGY-gQ_3O8Y?si=4clxpSwOTcUwinIz",
      "https://www.youtube.com/embed/xRv1JLg4NMM?si=51h2QDTq9x1_hnxh",
      "https://www.youtube.com/embed/CC0FGFSarhQ?si=3t9csJK64sWfxDrL",
    ],
    intermediate: [
      "https://www.youtube.com/embed/doV0m6MNTCo?si=ubsN-VwC2927dK3h",
      "https://www.youtube.com/embed/u5cyCi7fu7c?si=NQr18FVT5CB8h6Xj",
      "https://www.youtube.com/embed/3l16uxb7Lgo?si=w7FdGBAPrIks_0dp",
      "https://www.youtube.com/embed/xRv1JLg4NMM?si=GxhlKSRpWZH4V5cF",
      "https://www.youtube.com/embed/etlilryD2bY?si=0y9w5WHJhmdPAqAB",
    ],
    advance: [
      "https://www.youtube.com/embed/06tQXbHbXhA?si=QhnaHeTVUrqc6lrZ",
      "https://www.youtube.com/embed/x13pHLR2wXg?si=ScH8gwfDiWZYMVoA",
      "https://www.youtube.com/embed/mMUXYqbpID4?si=uvicRt7q9PtAnm5T",
      "https://www.youtube.com/embed/B1AL910jsvA?si=IyacEf12Mv4ryDAK",
      "https://www.youtube.com/embed/ByzrIHGS1xQ?si=1h1VxMwtx8NuU8R4",
    ],
  },
};

export default function Lesson({ params }: { params: { lesson: string } }) {
  const router = useRouter();
  const lesson: string = params.lesson;
  console.log(lesson);

  const [gameRule, setGamerules] = useState<boolean>(true);
  const [gameSkill, setGameSkill] = useState<boolean>(false);
  const [basic, setbasic] = useState<boolean>(true);
  const [Intermediate, setIntermediate] = useState<boolean>(false);
  const [Advance, setAdvance] = useState<boolean>(false);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="w-[100vw] mt-3 bg-gradient-to-r from-orange-300 to-rose-100 ">
        <main className="w-[100%] flex justify-evenly ">
          <Image
            src={(playerArray as any)[lesson]}
            alt=""
            width={350}
            height={350}
            className="mt-20 shadow-xl shadow-black   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl hover:shadow-black"
          />
          <Image
            src={(fieldArray as any)[lesson]}
            alt=""
            width={700}
            height={100}
            className="mt-20 shadow-xl shadow-black  transform transition-transform duration-300 hover:scale-105  hover:shadow-xl   hover:shadow-black"
          />
        </main>
        <main className="w-[100vw] flex justify-evenly">
          <div className="w-[20%] relative left-20 mt-7 ">
            <h1 className="text-center font-bold text-xl ">
              Sportsy → Sports → {lesson}
            </h1>
            <div className="text-center mt-7  ">
              <h1
                onClick={() => {
                  setGamerules(!gameRule);
                }}
                className="inline w-[200px] px-10 bg-gradient-to-r from-orange-400 to-indigo-600  text-center text-lg font-medium   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl shadow-black"
              >
                Game Rules 🠻
              </h1>
              {gameRule && (
                <div>
                  {(Array.isArray((gameRules as any)[lesson])
                    ? (gameRules as any)[lesson]
                    : []
                  ).map((data: string) => {
                    return (
                      <p
                        key={data}
                        className="text-center bg-white mt-2 mb=2 bg-gradient-to-r from-orange-100 to-red-100"
                      >
                        {data}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="text-center mt-8  mb-24">
              <h1
                onClick={() => {
                  setGameSkill(!gameSkill);
                }}
                className="inline px-10 bg-gradient-to-r from-orange-400 to-indigo-600  w-[600px] text-center text-lg font-medium    transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl shadow-black"
              >
                Game Skills 🠻
              </h1>
              {gameSkill && (
                <div key={Math.random()}>
                  {(gameSkills as any)[lesson].map((data: string) => {
                    return (
                      <p className="text-center bg-white mt-2 mb=2 bg-gradient-to-r from-orange-100 to-red-100">
                        {data}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-[70%] justify-center  relative left-20 mt-10">
            <section className="relative left-44 w-[100%] ">
              <h1
                onClick={() => {
                  setbasic(!basic);
                }}
                className=" border bg-gradient-to-r from-orange-400 to-indigo-600  w-[600px] text-center text-lg font-medium   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl shadow-black"
              >
                Basic Skills
              </h1>
              {basic && (
                <div
                  key={Math.random()}
                  className="flex flex-wrap gap-2 relative right-16 mt-7"
                >
                  {(lectures as any)[lesson].basic.map((data: string) => {
                    return (
                      <iframe
                        width="360"
                        height="215"
                        src={data}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    );
                  })}

                  <div className=" border  w-[300px] text-center text-lg font-medium  flex justify-center items-center relative left-4 ">
                    <button
                      onClick={() => {
                        router.push(
                          `/test/advance-${lesson}-assessment?lesson=${[
                            lesson,
                            "basic",
                          ]}`
                        );
                      }}
                      className=" border bg-gradient-to-r from-orange-100 to-red-400 w-[300px] text-center text-lg font-medium   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl shadow-black py-4 rounded-md"
                    >
                      Check your skills
                    </button>
                  </div>
                </div>
              )}

              <h1
                onClick={() => {
                  setIntermediate(!Intermediate);
                }}
                className=" border mt-5 bg-gradient-to-r from-orange-400 to-indigo-600   w-[600px] text-center text-lg font-medium   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl shadow-black"
              >
                Intermediate
              </h1>
              {Intermediate && (
                <div
                  key={Math.random()}
                  className="flex flex-wrap gap-2 relative right-16 mt-7"
                >
                  {(lectures as any)[lesson].intermediate.map(
                    (data: string) => {
                      return (
                        <iframe
                          width="360"
                          height="215"
                          src={data}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      );
                    }
                  )}

                  <div className=" border  w-[300px] text-center text-lg font-medium  flex justify-center items-center relative left-4 ">
                    <button
                      onClick={() => {
                        router.push(
                          `/test/advance-${lesson}-assessment?lesson=${[
                            lesson,
                            "intermediate",
                          ]}`
                        );
                      }}
                      className=" border bg-gradient-to-r from-orange-100 to-red-400 w-[300px] text-center text-lg font-medium   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl shadow-black py-4 rounded-md"
                    >
                      Check your skills
                    </button>
                  </div>
                </div>
              )}

              <h1
                onClick={() => {
                  setAdvance(!Advance);
                }}
                className=" border mt-5 bg-gradient-to-r from-orange-400 to-indigo-600  w-[600px] text-center text-lg font-medium   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl shadow-black"
              >
                Advance
              </h1>
              {Advance && (
                <div
                  key={Math.random()}
                  className="flex flex-wrap gap-2 relative right-16 mt-7 mb-7"
                >
                  {(lectures as any)[lesson].advance.map((data: string) => {
                    return (
                      <iframe
                        width="360"
                        height="215"
                        src={data}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    );
                  })}

                  <div className=" border  w-[300px] text-center text-lg font-medium  flex justify-center items-center relative left-4 ">
                    <button
                      onClick={() => {
                        router.push(
                          `/test/advance-${lesson}-assessment?lesson=${[
                            lesson,
                            "advance",
                          ]}`
                        );
                      }}
                      className=" border bg-gradient-to-r from-orange-100 to-red-400 w-[300px] text-center text-lg font-medium   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl shadow-black py-4 rounded-md"
                    >
                      Check your skills
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}
