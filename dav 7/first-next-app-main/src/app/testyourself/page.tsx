"use client";

import React, { useState } from "react";
import { questions_ob } from ".next/././../../../dav 7/first-next-app-main/src/components/questions/questions";
import { GREECE } from "@/src/data/greece";

const handleAnswer = (e) => {
  e.target.value == 0
    ? console.log("Correct Answer")
    : console.log("Wrong Answer");
};

const testYourself = () => {
  return (
    <div className="p-auto flex flex-col font-bold text-center">
      <div className="text-center p-auto"> Quiz Here</div>
      <div className="m-3">
        <ul className="my-5">
          {questions_ob.map((item, index): any => (
            <>
              <li key={index} className="flex gap-4 my-5">
                <h3>{item.question}</h3>
                <h3>
                  <div>
                    {item.options.map((option) => (
                      <button
                        onClick={handleAnswer}
                        className="mx-3 p-2 border border-black"
                        value={option - item.answer}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </h3>
                {/* <h4>{item.answer}</h4> */}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default testYourself;
