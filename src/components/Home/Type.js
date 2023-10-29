import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('On DVep lvfmetn')
          .pauseFor(600)
          .deleteChars(11)
          .typeString('evelopment . . .')
          .pauseFor(3000)
          .deleteAll()
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
        delay: 50,
      }}
    />
  );
}

export default Type;
