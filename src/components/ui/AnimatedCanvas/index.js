/**
 * AnimatedCanvas
 *
 * A <canvas /> component that manages a render queue.
 * Pass in an operations `queue` and `fps` to animate
 * the canvas.
 */

import React, { useState, useEffect, useRef } from 'react';

const CANVAS_STYLE_PROP_REGEXP = (
  /Style|Cap|Join|Width|Limit|Blur|Color|OffsetX|OffsetY/g
);

const AnimatedCanvas = ({
  width,
  height,
  queue,
  fps = 30
}) => {
  const timeout = 1000 / fps;
  const canvasRef = useRef(null);
  const [lastRender, setLastRender] = useState(0);

  useEffect(() => {
    if (Date.now() - lastRender < timeout) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    for (const command of queue) {
      for (const method of Object.keys(command)) {
        if (method.slice(-7).match(CANVAS_STYLE_PROP_REGEXP)) {
          context[method] = command[method];
        } else {
          context[method](...command[method]);
        }
      }
    }

    setLastRender(Date.now());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default AnimatedCanvas;
