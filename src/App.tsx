import Nav from "./components/Nav.tsx"
import { DiJavascript, DiCss3, DiHtml5, DiReact, DiGit } from "react-icons/di"
import { SiNextdotjs, SiCplusplus, SiPython } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb";

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
              <h3>"Self-taught" developer for the last 10 years who discovered the joy and challenges of Web Development 2 years ago.</h3>
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
                <li><SiNextdotjs /> Next.js</li>
                <li><DiReact /> React</li>
                <li><DiJavascript /> Javascript</li>
                <li><DiHtml5 /> HTML</li>
                <li><DiCss3 />CSS</li>
                <li><DiGit />Git</li>
              </ul>
            </div>
            <div className="sectionbody">
              <h3>Ones I use less often for other stuff</h3>
              <ul>
                <li><TbBrandCSharp /> C#</li>
                <li><SiPython /> Python</li>
                <li><SiCplusplus /> C++</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div className="sectionbody">
            <div className="two-column-layout">
              <div className="projectcard">
                <h3>BendiTrivia</h3>
                <p>A trivia-hosting platform with user authentication, session-based rate limiting, and a moderation system.</p><br/>
                <p>Uses Next.js, PostgreSQL, LuciaAuth, and Redis.</p>
              </div>
              <div className="projectcard">
                <h3>Pateo</h3>
                <p>A frontend designed to search for U.S. patents powered by the PatentsView API and React.</p>
              </div>
              <div className="projectcard">
                <h3>AEIOUCompany</h3>
                <p>A game modification which implements Text-to-Speech into game chat.</p>
              </div>
              <div className="projectcard">
                <h3>Stalcraft Notifier</h3>
                <p>A discord bot which notifies users of marketplace activity in Stalcraft.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contactme">
          <h1>Contact Me</h1>
          <div className="sectionbody">
            <form>
              <label htmlFor="fname">Your name:</label>
              <input type="text" id="fname" name="fname" />

              <label htmlFor="femail">Email:</label>
              <input type="text" id="femail" name="femail" />

              <label htmlFor="fmessage">Message:</label>
              <textarea id="fmessage" name="fmessage" />
              <input type="submit" value="Send" className="cta" />
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
