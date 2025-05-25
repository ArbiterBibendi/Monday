import { useEffect, useRef, useState } from 'react'
import Nav from "./components/Nav.tsx"
import mondayText from "./assets/monday.js";

function App() {

  const [currentLine, setCurrentLine] = useState(0);
  const mondayTextRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((cur) => {
        console.log(cur);
        if (cur < mondayText.length - 1) {
          return cur + 1;
        }
        return cur;
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    }
  }, []);
  return (
    <>
      <Nav />
      <div id="main">
        <h1 ref={mondayTextRef} id="mondayText">
          {mondayText[currentLine]}
        </h1>
      </div>
    </>
  )
}

export default App
