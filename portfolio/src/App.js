import React from 'react';
import {Carousel, Badge} from 'react-bootstrap';
import {Link, Element} from 'react-scroll';
import Topbar from './components/topbar/topbar';
import EWQ from './images/EvilWillConquer/slider.png'
import Particle from './images/particlesystem/part.png';
import watchIt1 from './images/watchit/start.png';
import watchIt2 from './images/watchit/detailpage3.png';
import watchIt3 from './images/watchit/episode.png';
import watchIt4 from './images/watchit/plan2.png';
import watchit from './images/watchit/front.png';

import EWQ1 from './images/EvilWillConquer/idle2.png';
import EWQ2 from './images/EvilWillConquer/attack2.png';
import EWQ3 from './images/EvilWillConquer/chase3.png';
import EWQ4 from './images/EvilWillConquer/deat.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar />
      </header>
      <div className="MainWrapper">
        <div className="Carousel">
        <Carousel wrap={true} indicators={false} controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Particle}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={EWQ}
              alt="second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={watchit}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
        <Element name="about">
        <div className="About">
          <h1>About Me</h1>
          <p>My name is Joakim Lilja, I am currently studying my master's in
            computer science at the Royal Institute of Technology in Stockholm Sweden.
            I am about to write my master thesis in the spring of 2020. My dream is to
            one day work at a game studio, developing great games for gamers to enjoy.
            On this site, you can see some of the projects I have developed. I have
            been a gamer during my entire life and love developing games. I am especially
            interested in graphics and gameplay. I like to understand gamers in the
            core and would rather spend some extra time perfecting the game than showing
            it off first.</p>
        </div>
        </Element>
        <Element name="projects">
        <div className="Projects">
          <h1>Projects</h1>
          <div className="projectsGrid">
            <div className="projectsGridRow">
              <div>
                <div className="videoWraper">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/tBOh0sItLdI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="BadgeWrapper">
                  <div><Badge variant="danger">C++</Badge></div>
                  <div><Badge variant="success">OpenGL</Badge></div>
                </div>
              <p>
                A particle system completelty built in OpenGL and C++.
                The particle system implements a bloom effect that was built with inspiration from this 
                <a href="http://developer.download.nvidia.com/books/HTML/gpugems/gpugems_ch21.html">
                 GPU Gem chapter</a>
              </p>
              </div>
              <div>
                VR GAME HERE
              </div>
            </div>
            <div className="projectsGridRow">
              <div>
                <Carousel wrap={true} indicators={false} controls={true} className="watchitSlider">
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={EWQ1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={EWQ2}
                      alt="second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={EWQ3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={EWQ4}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="BadgeWrapper">
                  <div><Badge variant="danger">Unity</Badge></div>
                  <div><Badge variant="success">C#</Badge></div>
                </div>
                <p>
                  This is a 2D platformer game built in Unity. Unfortunately it never got finished but all the controls
                  such as movement, attack, jump, AI, dash, death etc was implemented. The only thing missing was
                  the actual levels for the game.
                </p>
              </div>
              <div>
                <Carousel wrap={true} indicators={false} controls={true} className="watchitSlider">
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={watchIt1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={watchIt2}
                      alt="second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={watchIt3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={watchIt4}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="BadgeWrapper">
                  <div><Badge variant="primary">React</Badge></div>
                  <div><Badge variant="warning">Firebase</Badge></div>
                </div>
                <p>
                  A website where the user can serch for movies and
                  TV shows and add them to their backlog or mark them as seen. For the TV shows the user can mark
                  which individual episodes that has been watched and which has not. This website uses TheMovieDB as the
                  source for movie and series information. It is built with React and uses Firebase to
                  handle users accounts and saved movie backlogs etc.
                </p>
              </div>

            </div>
            <div className="projectsGridRow">
              <div>QUINT QUACK QUO</div>
            </div>
          </div>
        </div>
        </Element>
        <Element name="contact">
        <div className="Contact">
          <h1>Contact</h1>
          <p>Feel free to contact me at jolil@kth.se</p>
        </div>
        </Element>
      </div>
    </div>
  );
}

export default App;
