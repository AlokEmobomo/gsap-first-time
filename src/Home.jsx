import React, { useEffect } from "react";
import gsap from "gsap";

function Home() {
  useEffect(() => {
    // GSAP Animations with dynamic values for responsiveness
    const tl = gsap.timeline({ repeat: -1 }); // -1 for infinite repeat
    const screenWidth = window.innerWidth; // Get screen width
    const screenHeight = window.innerHeight; // Get screen height

    tl.to(".box1", {
      x: screenWidth * 0.8, // 80% of the screen width
      y: -screenHeight * 0.25, // 25% of the screen height
      duration: 2,
      rotate: 360,
      backgroundColor: "red",
      scale: 1.5,
      borderRadius: "50%",
    });
    tl.to(".box2", {
      x: screenWidth * 0.8,
      duration: 2,
      rotate: 360,
      backgroundColor: "green",
      scale: 1.5,
      borderRadius: "50%",
    });
    tl.to(".box3", {
      x: screenWidth * 0.8,
      y: screenHeight * 0.25,
      duration: 2,
      rotate: 360,
      backgroundColor: "blue",
      scale: 1.5,
      borderRadius: "50%",
    });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        className="box1"
        style={{
          width: "10vw", // 10% of the viewport width
          height: "10vw", // Maintain square with vw
          backgroundColor: "blue",
          textAlign: "center",
          lineHeight: "10vw", // Match height for centering text
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Box 1
      </div>
      <div
        className="box2"
        style={{
          width: "10vw",
          height: "10vw",
          backgroundColor: "green",
          textAlign: "center",
          lineHeight: "10vw",
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Box 2
      </div>
      <div
        className="box3"
        style={{
          width: "10vw",
          height: "10vw",
          backgroundColor: "red",
          textAlign: "center",
          lineHeight: "10vw",
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Box 3
      </div>
    </div>
  );
}

export default Home;
