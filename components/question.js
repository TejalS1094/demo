import Image from "next/image";
import React from "react";

const Question = ({ question, answer, isAnswerShown, toggleAnswer }) => {
  return (
    <div className="flex md:gap-[52px] items-baseline justify-between gap-5 mb-5 md:mb-8 transition-all">
      <div className="w-full">
        <h3 className="font-nunito font-bold text-base lg:text-xl ">
          {question}
        </h3>

        {isAnswerShown && (
          <p className="font-nunito text-base lg:text-lg text-[#404040] mt-2 md:mt-4 transition-all">
            {answer}
          </p>
        )}
      </div>
      <button
        onClick={() => {
          setTimeout(toggleAnswer, 120); // Delay the toggle by 100ms
        }}
        className="w-[16px] h-[17px] transition-all"
      >
        {isAnswerShown ? (
          <div className="w-full h-full">
            <Image
              src="/minus.svg"
              width={16}
              height={17}
              alt="close-button"
              className="w-full h-full"
            />
          </div>
        ) : (
          <div>
            <Image src="/add.svg" width={16} height={17} alt="close-button" />
          </div>
        )}
      </button>
    </div>
  );
};

export default Question;
