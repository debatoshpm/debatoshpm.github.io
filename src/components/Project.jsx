import React from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Arrow from "./Arrow";

export default function Project() {
  return (
    <React.Fragment>
      <Nav />
      <Navbar />
      <div className="m-5">
        <div className="abouthead text-center">Project</div>
        <div className="aboutcontent text-center">...</div>
      </div>
      <div className="container">
        <div className="mt-2">
          <div className="restfont">
            1. Decentralised Crowd Funding Site using Blockchain
          </div>
          <div className="mt-2 text-center">
            <button type="button" className="btn btn-light mr-1 maincontent">
              Visit
            </button>
            <a href="https://github.com/debatoshpm/crowd-funding-dapp">
              <button type="button" className="btn btn-light ml-1 maincontent">
                Repository
              </button>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="restfont">2. Blog Site using React (Next.js)</div>
          <div className="mt-2 text-center">
            <button type="button" className="btn btn-light mr-1 maincontent">
              Visit
            </button>
            <a href="https://github.com/debatoshpm/blog-app">
              <button type="button" className="btn btn-light ml-1 maincontent">
                Repository
              </button>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="restfont">3. Chat App using Socket.io and React</div>
          <div className="mt-2 text-center">
            <button type="button" className="btn btn-light mr-1 maincontent">
              Visit
            </button>
            <a href="https://github.com/debatoshpm/chat-app">
              <button type="button" className="btn btn-light ml-1 maincontent">
                Repository
              </button>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="restfont">
            4. Video Chat App using WebRTC and React
          </div>
          <div className="mt-2 text-center">
            <button type="button" className="btn btn-light mr-1 maincontent">
              Visit
            </button>
            <a href="https://github.com/debatoshpm/video-chat-app">
              <button type="button" className="btn btn-light ml-1 maincontent">
                Repository
              </button>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="restfont">
            5. NYT Wordle Game Clone with added features
          </div>
          <div className="mt-2 text-center">
            <a href="https://debatoshpm.github.io/wordle/">
              <button type="button" className="btn btn-light mr-1 maincontent">
                Visit
              </button>
            </a>
            <a href="https://github.com/debatoshpm/wordle">
              <button type="button" className="btn btn-light ml-1 maincontent">
                Repository
              </button>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="restfont">6. URL Shortener</div>
          <div className="mt-2 text-center">
            <a href="https://devshorty.herokuapp.com/">
              <button type="button" className="btn btn-light mr-1 maincontent">
                Visit
              </button>
            </a>
            <a href="https://github.com/debatoshpm/URL-Shortener">
              <button type="button" className="btn btn-light ml-1 maincontent">
                Repository
              </button>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Arrow value={{ to: "/skill" }} />
    </React.Fragment>
  );
}
