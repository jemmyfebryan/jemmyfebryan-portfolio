import React from 'react';
import { journeyData } from "../Projects/journey.js";
import { Carousel } from '@trendyol-js/react-carousel';

const JourneySlide = () => {
  return (
      <Carousel>
        {journeyData.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
              <div>
                <img src={d.imgPath} alt="" className="h-44 w-44 rounded-full "/>
              </div>

              <div>
                <p>{d.title}</p>
                <p>{d.description}</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
  );
};

export default JourneySlide;