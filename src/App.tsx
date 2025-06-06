import { useRef, useState } from "react";
import Nav from "./components/Nav.tsx"
import { DiJavascript, DiCss3, DiHtml5, DiReact, DiGit, DiGithubBadge } from "react-icons/di"
import { SiNextdotjs, SiCplusplus, SiPython, SiThunderstore } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb";
import { LuAppWindow } from "react-icons/lu";
import { BsDiscord } from "react-icons/bs";

function App() {
  const form = useRef<HTMLFormElement>(null);
  const formStatus = useRef<HTMLParagraphElement>(null);
  const formSectionBody = useRef<HTMLDivElement>(null);
  const [inputDisabled, setButtonDisabled] = useState(false);
  const submitForm = (e: React.MouseEvent) => {
    if (form.current === null) {
      form.current = new HTMLFormElement();
    }
    e.preventDefault();
    const formData = new FormData(form.current);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    if (!form.current?.checkValidity() && formSectionBody.current !== null) {
      formSectionBody.current.style = "border-color: red";
      return;
    }
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
      .then(response => {
        if (!formSectionBody.current) {
          formSectionBody.current = new HTMLDivElement();
        }
        if (response.status == 200) {
          formSectionBody.current.style = "border-color: lime";
          setButtonDisabled(true);
        }
        else {
          formSectionBody.current.style = "border-color: red";
        }
        return response.json();
      })
      .then(responseJson => {
        if (!formStatus.current) {
          return;
        }
        formStatus.current.innerText = responseJson.message;
      })
  }
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
                <div className="desc">
                  <h3>BendiTrivia</h3>
                  <p>A trivia-hosting platform with user authentication, session-based rate limiting, and a moderation system.</p><br />
                  <p>Uses Next.js, PostgreSQL, LuciaAuth, and Redis.</p><br/>
                  <p className="hint">Demo Username: testuser</p>
                  <p className="hint">Demo Password: testpassword</p>
                </div>
                <div className="projectlinks">
                  <a target="_blank" href="https://github.com/ArbiterBibendi/BendiTrivia"><DiGithubBadge size={30} /></a>
                  <a target="_blank" href="https://bendi-trivia.vercel.app/"><LuAppWindow size={28} /></a>

                </div>
                <img src="benditrivia2.png" alt="screenshot of benditrivia" />
              </div>
              <div className="projectcard">
                <div className="desc">
                  <h3>Pateo</h3>
                  <p>A frontend designed to search for U.S. patents powered by the PatentsView API and React.</p>
                </div>
                <div className="projectlinks">
                  <a target="_blank" href="https://github.com/ArbiterBibendi/pateo"><DiGithubBadge size={28} /></a>
                </div>
                <img src="pateo2.png" alt="screenshot of pateo" />
              </div>
              <div className="projectcard">
                <div className="desc">
                  <h3>AEIOUCompany</h3>
                  <p>A mod for Lethal Company which implements proximity Text-to-Speech into game chat.</p> <br />
                  <p>Written in C# and uses HarmonyX for function hooking</p> <br />
                  <p><b><i>540,000+</i></b> Downloads</p>
                </div>
                <div className="projectlinks">
                  <a target="_blank" href="https://github.com/ArbiterBibendi/AEIOUCompany"><DiGithubBadge size={28} /></a>
                  <a target="_blank" href="https://thunderstore.io/c/lethal-company/p/Bibendi/AEIOUCompany/"><SiThunderstore id="thunderstoreicon"size={16}/></a>
                  <a target="_blank" href="https://discord.gg/pzpAFhtGaj"><BsDiscord id="thunderstoreicon"size={16}/></a>
                </div>
                <img src="aeioucompany.png" alt="screenshot of aeioucompany page on thunderstore" />
              </div>
              <div className="projectcard">
                <div className="desc">
                  <h3>Stalcraft Notifier</h3>
                  <p>A discord bot which which assists users with marketplace activity in Stalcraft.</p> <br />
                  <p>Uses Javascript, MongoDB, the Stalcraft API, and Discord.js</p>
                </div>
                <div className="projectlinks">
                  <a target="_blank" href="https://github.com/ArbiterBibendi/Stalcraft"><DiGithubBadge size={28} /></a>
                </div>
                <img src="stalcraftnotifier2.png" alt="screenshot of the stalcraft notifier on discrd" />
              </div>
            </div>
          </div>
        </section>
        <section id="contactme">
          <h1>Contact Me</h1>
          <div className="sectionbody" ref={formSectionBody}>
            <form ref={form}>
              <input type="hidden" name="access_key" value="5f7c3879-9bc7-4bf7-ada4-2e84fb49cbe8" />
              <label htmlFor="fname">Your name:</label>
              <input type="text" id="fname" name="fname" disabled={inputDisabled} required />

              <label htmlFor="femail">Email:</label>
              <input type="text" id="femail" name="femail" disabled={inputDisabled} required />

              <label htmlFor="fmessage">Message:</label>
              <textarea id="fmessage" name="fmessage" disabled={inputDisabled} required />
              <div>
                <p ref={formStatus}></p>
                <input type="submit" value="Send" className="cta" onClick={submitForm} disabled={inputDisabled} />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
