import { formatDistance, formatDistanceToNow } from "date-fns";
import Image from "next/image";
import React from "react";

function ProgressBar({ targetAmount, collectedAmount, bg, date }) {
  // Calculate the percentage of the target amount that has been collected
  const percentage = (collectedAmount / targetAmount) * 100;
  let text_color;
  switch (bg) {
    case "white":
      text_color = "text-[#000000]";
      break;
    case "black":
      text_color = "text-[#ffff]";

    default:
      text_color = "text-[#ffff]";
      break;
  }

  const TimeLeft = () => {
    // Calculate the distance
    const distance = formatDistanceToNow(new Date(date), { addSuffix: true });

    // Extract the relevant part of the distance string and convert it to the desired format
    const match = distance.match(/(\d+ \w+)/);
    const timeLeft = match ? match[1].replace(" ", "") : "0d";

    return (
      <span
        className={`font-nunito text-sm ${text_color} group-hover:text-[#ffff]`}
      >
        {timeLeft} left
      </span>
    );
  };

  return (
    <div className="w-full">
      <div className="w-full h-2 border rounded-full border-[#E4E4E7] bg-[#E4E4E7] overflow-hidden">
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: "#22C55E",
            height: "8px",
            transition: "width 0.5s ease",
          }}
        ></div>
      </div>
      <div className="mt-3 flex justify-between">
        <p
          className={`font-nunito font-semibold text-base ${text_color} group-hover:text-[#ffff]`}
        >{`${percentage.toFixed(0)}% funded  `}</p>
        <div className="flex items-center justify-center gap-[5px] ">
          {bg == "white" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.139"
              height="12.139"
              data-name="Group 34"
              viewBox="0 0 12.139 12.139"
              class="fill-current group-hover:text-red-500"
            >
              <g data-name="Group 20" transform="translate(5.599 2.816)">
                <g data-name="Group 19">
                  <path
                    fill="#171717"
                    className="fill-current"
                    d="M238.8 123.1l-1.693-1.269v-2.586a.47.47 0 00-.94 0v2.821a.469.469 0 00.188.376l1.881 1.41a.47.47 0 00.564-.752z"
                    data-name="Path 5"
                    transform="translate(-236.169 -118.779)"
                  ></path>
                </g>
              </g>
              <g data-name="Group 22">
                <g data-name="Group 21">
                  <path
                    fill="#171717"
                    className="fill-current"
                    d="M6.07 0a6.07 6.07 0 106.07 6.07A6.076 6.076 0 006.07 0zm0 11.2a5.129 5.129 0 115.13-5.13 5.136 5.136 0 01-5.13 5.13z"
                    data-name="Path 6"
                  ></path>
                </g>
              </g>
            </svg>
          ) : (
            <Image src="/time.svg" width={11} height={11} alt="timer-img" />
          )}
          {date && TimeLeft()}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
