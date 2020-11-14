import React, { useRef, useEffect, useState } from "react";
import {
  size,
  lightBackground,
  darkBackground,
} from "../../stylesheets/components/Animations/BackgroundCanvas.module.sass";
import { getInitialTheme } from "../../utils/FileManager.utils";

const BackgroundCanvas = () => {
  let isDark = getInitialTheme();

  const canvasRef = useRef(null);

  const mouseCoordinates = {
    x: undefined,
    y: undefined,
  };

  const draw = (context, frameCount) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.fillStyle = isDark ? "#fff" : "#000";

    context.beginPath();
    context.arc(
      mouseCoordinates.x,
      mouseCoordinates.y,
      frameCount * frameCount * frameCount * 0.04,
      0,
      2 * Math.PI
    );
    context.fill();
    console.log("drawing");
  };

  function startDrawing(context, frameCount) {
    let localFrameCount = frameCount;
    let currentAnimationFrame = null;

    console.log(mouseCoordinates);

    const render = () => {
      localFrameCount += 1;
      draw(context, localFrameCount);
      currentAnimationFrame = window.requestAnimationFrame(render);
      if (localFrameCount > 100) {
        window.cancelAnimationFrame(currentAnimationFrame);
      }
    };
    render();
  }

  function handleClick(event) {
    // fill in the mouse coordinates
    // mouseCoordinates.x = event.x;
    // mouseCoordinates.y = event.y;

    console.log(event.detail);
    isDark = event.detail;

    // get canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const frameCount = 0;

    startDrawing(context, frameCount);
  }

  function resizeCanvas(canvas) {
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      const context = canvas.getContext("2d");
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.scale(ratio, ratio);
      return true;
    }

    return false;
  }

  useEffect(() => {
    console.log("useEffect called");
    const canvas = canvasRef.current;

    mouseCoordinates.x = 1245;
    mouseCoordinates.y = 88;

    canvas.getContext("2d").fillStyle = getInitialTheme() ? "#000" : "#FFF";
    canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);

    resizeCanvas(canvas);
    // startDrawing(canvas.getContext("2d"), 0);

    // window.addEventListener("mousedown", handleClick);
    window.addEventListener("darkModeToggled", handleClick);

    return () => {
      // window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("darkModeToggled", handleClick);
      console.log("destruct object");
    };
  }, [handleClick]);

  return (
    <canvas className={`${size}`} ref={canvasRef} />
  );
};

export default BackgroundCanvas;
