import { Menu } from "@headlessui/react";
import { useState } from "react";

function CustomMenu({ options, placeholder }) {
  const [selectedOption, setSelectedOption] = useState(null);
  let value;
  if (placeholder.toLowerCase().replace(/\s/g, "").includes("country")) {
    value = "country";
  } else if (placeholder.toLowerCase().replace(/\s/g, "").includes("state")) {
    value = "state";
  } else if (placeholder.toLowerCase().replace(/\s/g, "").includes("city")) {
    value = "city";
  }

  // placeholder
  let bg_color;
  let boxShadow;
  let text_color;

  switch (value) {
    case "country":
      bg_color = "bg-[#E4E4E7]/[0.24]";
      text_color="text-[#404040]/[80%]"
      break;
    case "state":
      bg_color = "bg-[#E4E4E7]/[0.24]";
      text_color="text-[#404040]/[80%]"

      break;
    case "city":
      bg_color = "bg-[#E4E4E7]/[0.24]";
      text_color="text-[#404040]/[80%]"

      break;

    default:
      bg_color = "bg-[#ffff]";
      boxShadow = "0px 3px 12px #00000014";
      text_color="text-[#404040]"
      break;
  }

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Menu
      as="div"
      className={`relative rounded-lg ${bg_color}  py-2 px-2 md:pl-3 md:pr-2.5 w-full`}
      style={{ boxShadow: boxShadow }}
    >
      <Menu.Button className="relative flex items-center justify-between w-full">
        {selectedOption ? (
          <span className="font-nunito font-bold text-sm md:text-base text-[#171717]">
            {selectedOption.label}{" "}
          </span>
        ) : (
          <span className={`font-nunito text-sm md:text-base ${text_color} `}>
            {placeholder}
          </span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7.777"
          height="4.593"
          viewBox="0 0 7.777 4.593"
        >
          <path
            id="white_dropdown_arrow"
            data-name="white dropdown arrow"
            d="M23.5,43.81a.509.509,0,0,1-.225-.093L20.094,40.54a.318.318,0,0,1,.449-.449L23.5,43.042l2.949-2.952a.318.318,0,1,1,.449.449l-3.175,3.175c-.059.06-.25.081-.225.093Z"
            transform="translate(-19.598 -39.594)"
            fill="#171717"
            stroke="#171717"
            strokeWidth="0.75"
          />
        </svg>
      </Menu.Button>

      <Menu.Items
        className="w-full flex flex-col absolute left-0 mt-4  origin-top-right divide-y divide-gray-100 rounded-lg bg-white  ring-1 ring-black/5 focus:outline-none"
        style={{ boxShadow: "0px 3px 12px #00000014" }}
      >
        {options.map((option, index) => (
          <Menu.Item
            key={index}
            className="py-2 px-2 md:pl-3 md:pr-2.5 text-left"
          >
            {({ active }) => (
              <button
                className={`font-nunito text-sm md:text-base text-[#171717] ${
                  active ? "bg-gray-100 text-black" : "bg-white text-black"
                }`}
                onClick={() => {
                  handleSelect(option);
                }}
              >
                {option.label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default CustomMenu;
