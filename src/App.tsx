import Nav from "./components/Nav.tsx"

function App() {

  return (
    <>
      <Nav />
      <div id="main">
        <section id="about">
          <h1>
            Drake Scott
          </h1>
          <h2>
            Fullstack Developer
          </h2>
          <div className="two-column-layout-right">
            <img src="keyboard.png" alt="screenshot of coding" className="filter"/>
            <div className="sectionbody">
              <ul>
                <li>A developer who is comfortable using <b>Next.js</b>, <b>React</b>, and <b>JavaScript</b>/<b>HTML</b>/<b>CSS</b>, but down to learn new technologies :D</li>
                <li>Always excited to take on challenging projects that help me push my skills further.</li>
                <li>An easygoing person who values effectiveness and is always looking for new ways to grow as a developer.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="skills">
          <h1>Skills</h1>
          <div className="sectionbody">
            - Next.js
            <br />
            - React
            <br />
            - Javascript
            <br />
            - HTML
            <br />
            - CSS
            <br />
            - Node.js
            <br />
            - C#
            <br />
            Also:
            <br />
            - Python
            <br />
            - C++
            <br />
            - Reverse Engineering
          </div>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div className="sectionbody">

          </div>
        </section>
        <section id="contactme">
          <h1>Contact Me</h1>
          <div className="sectionbody">

          </div>
        </section>
      </div>
    </>
  )
}

export default App
