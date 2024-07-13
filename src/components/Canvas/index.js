import React, { useState, useEffect, useRef } from 'react';

const FPS = 60;
const TIMEOUT = 1000 / FPS;

const CANVAS_STYLE_PROP_REGEXP = (
  /Style|Cap|Join|Width|Limit|Blur|Color|OffsetX|OffsetY/g
);

const Canvas = ({ width, height, operations }) => {
  const canvasRef = useRef(null);
  const [lastRender, setLastRender] = useState(0);

  useEffect(() => {
    if (Date.now() - lastRender < TIMEOUT) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    for (const command of operations) {
      for (const method of Object.keys(command)) {
        if (method.slice(-7).match(CANVAS_STYLE_PROP_REGEXP)) {
          context[method] = command[method];
        } else {
          context[method](...command[method]);
        }
      }
    }

    setLastRender(Date.now());
  }, [operations]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
