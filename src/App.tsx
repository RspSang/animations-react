import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

function App() {
  return (
    <Wrapper>
      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 5 },
            fill: { duration: 1, delay: 3 },
          }}
          d="M 224 202.66 A 53.34 53.34 0 1 0 277.36 256 A 53.38 53.38 0 0 0 224 202.66 Z m 124.71 -41 a 54 54 0 0 0 -30.41 -30.41 c -21 -8.29 -71 -6.43 -94.3 -6.43 s -73.25 -1.93 -94.31 6.43 a 54 54 0 0 0 -30.41 30.41 c -8.28 21 -6.43 71.05 -6.43 94.33 S 91 329.26 99.32 350.33 a 54 54 0 0 0 30.41 30.41 c 21 8.29 71 6.43 94.31 6.43 s 73.24 1.93 94.3 -6.43 a 54 54 0 0 0 30.41 -30.41 c 8.35 -21 6.43 -71.05 6.43 -94.33 S 357.1 182.74 348.75 161.67 Z M 224 338 a 82 82 0 1 1 82 -82 A 81.9 81.9 0 0 1 224 338 Z m 85.38 -148.3 a 19.14 19.14 0 1 1 19.13 -19.14 A 19.1 19.1 0 0 1 309.42 189.74 Z M 400 32 H 48 A 48 48 0 0 0 0 80 V 432 a 48 48 0 0 0 48 48 H 400 a 48 48 0 0 0 48 -48 V 80 A 48 48 0 0 0 400 32 Z M 382.88 322 c -1.29 25.63 -7.14 48.34 -25.85 67 s -41.4 24.63 -67 25.85 c -26.41 1.49 -105.59 1.49 -132 0 c -25.63 -1.29 -48.26 -7.15 -67 -25.85 s -24.63 -41.42 -25.85 -67 c -1.49 -26.42 -1.49 -105.61 0 -132 c 1.29 -25.63 7.07 -48.34 25.85 -67 s 41.47 -24.56 67 -25.78 c 26.41 -1.49 105.59 -1.49 132 0 c 25.63 1.29 48.33 7.15 67 25.85 s 24.63 41.42 25.85 67.05 C 384.37 216.44 384.37 295.56 382.88 322 Z"
        ></motion.path>
      </Svg>
    </Wrapper>
  );
}

export default App;
