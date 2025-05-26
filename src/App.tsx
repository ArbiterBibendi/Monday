import Nav from "./components/Nav.tsx"

function App() {

  return (
    <>
      <Nav />
      <div id="main">
        <section id="about">
          <h1>
            <a href="#contactme">Drake Scott</a>
          </h1>
          <h2>
            Fullstack Developer
          </h2>
          <div className="two-column-layout-right">
            <img src="keyboard.png" alt="screenshot of coding" className="triple-shadow" />
            <div className="sectionbody">
              <ul>
                <li>Comfortable using <b>Next.js</b>, <b>React</b>, and <b>JavaScript</b>/<b>HTML</b>/<b>CSS</b>, but down to learn any stack :D</li>
                <li>Always excited to take on challenging projects that help me push my skills further.</li>
                <li>An easygoing, team player who values effectiveness and is always looking for new ways to grow as a developer.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="skills">
          <h1>Skills</h1>
          <div className="two-column-layout">
            <div className="sectionbody">
              <h3>Technologies I use daily for web development</h3>
              <ul>
                <li>Next.js</li>
                <li>React</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="sectionbody">
              <h3>Ones I use less often for other stuff</h3>
              <ul>
                <li>C#</li>
                <li>Python</li>
                <li>C++</li>
              </ul>
            </div>
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
