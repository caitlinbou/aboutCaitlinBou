import React from 'react';
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
    return (
        <div className="container">
        <div id="projects">
          <div className="row title">
            <h3>#1-Ality</h3>
          </div>
          <div className="row">
            <div className="col-3">
    
              <a className="projectLinks" href="https://github.com/natewinter/Ality" target="_blank"><i
                  className="fa fa-github" aria-hidden="true"></i> Ality</a>
              ||
              <a className="projectLinks" href="https://ality-stats.herokuapp.com" target="_blank">Website</a>
              <img className="portfolio-pic"src="../../../assets/ality.png" alt="img"/>
            </div>
    
            <div className="col-9 text-box">
              <p>
                Ality is a flexible statistic-tracking and charting tool that can be
                tailored by the user to fit any situation. No more unwieldy
                spreadsheets--instead, use Ality for simple, easy-to-use number
                crunching.
              </p>
              <h3> My Contribution: </h3>
              <p>
                Project Manager, back-end routing, front-end
                login/user page, overall concept and design.
              </p>
              <h3>Tools Used: </h3>
              <p>
                Ality is powered by Express.js with Handlebars. The
                styling is rendered through foundation and sass, and the database is
                created and accessed using the mysql2 NPM package and the sequelize
                ORM.
              </p>
            </div>
      
          </div>
          <div className="row title">
            <h3>#2-Music Chord Identifier</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <a className="projectLinks" href="https://github.com/GnuArtemis/Music-Chord-Identifier" target="_blank"><i
                  className="fa fa-github" aria-hidden="true"></i> MCI</a>
              ||
              <a className="projectLinks" href=" https://gnuartemis.github.io/Music-Chord-Identifier" target="_blank">Website
              </a>
              <img className="portfolio-pic" src="../../../assets/mci.png" alt="img"/>
            </div>
            <div className="col-9 text-box">
              <p>
                Music Chord Identifier uses complex algorithms to dissect chord
                information returned by APIs based on student note selection. It is
                designed to serve as a chord study tool for the elementary level music
                student.
              </p>
              <h3> My Contribution: </h3>
              <p>
                Project Manager, resource development/api research,
                about-us page and navigation, front-end to back-end connections.
              </p>
              <h3>Tools Used: </h3>
              <p>
                API-Reverse Chord Identifier, API-Chord Sound (for Piano
                Display and Progression), Materialize for design, Audiosynth.js and
                playKeyboard.js.
              </p>
              <h3>Awards: </h3>
              <p>
                Best Functionality-UW Full Stack Coding Bootcamp
              </p>
            </div>
          </div>
          <div className="row title">
            <h3>#3-Thought Bin</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <a className="projectLinks" href="https://github.com/caitlinbou/thought-bin" target="_blank"><i
                  className="fa fa-github" aria-hidden="true"></i> Thought Bin</a> || <a className="projectLinks"
                href="https://thought-bin.herokuapp.com" target="_blank">Website</a>
              <img className="portfolio-pic" src="../../../assets/thoughtbin.png" alt="img"/>
            </div>
            <div className="col-9 text-box">
              <p>
                Thought Bin is a note-taking tool built with an express server. It
                reads and writes to a json database file so the user may create, save,
                and delete notes.
              </p>
              <h3>Tools Used: </h3>
              <p>
                Thought-Bin uses an express server and JSON file for storage. Each
                note is given a unique ID for access through the uuid NPM package.
              </p>
    
            </div>
     
          </div>
          <footer></footer>
        </div>
        </div>
    )
}
