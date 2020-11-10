import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <div id="resume">
        <div className="row justify-content-center">
          <div className="col-10 justify-content-center">
            <img
              src="assets/css/75-pic.png"
              alt="caitPic"
              id="pic"
              className="mx-auto d-block"
            />
          </div>
        </div>
        <div className="row justify-content-center"></div>
      </div>
      <div className="row justify-content-center">
        <div className="summary text-left col-10">
          <h3>
            Summary{" "}
            <a
              className="links"
              id="pdf"
              href="assets/css/technicalResume .pdf"
              target="_blank"
            >
              <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
            </a>
          </h3>
          <br />
          <p>
            Exceptional manager of people and projects with 7+ years experience
            in the financial industry who has recently added Full Stack coding
            expertise to my tool belt. <br />
            <br />
            The years I have spent honing my leadership skills in the customer
            facing financial realm, in conjunction with the coding skills I have
            obtained, make up the link you have been missing when it comes to
            keeping your technology team productive, communicative, and
            connected.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 text-right technical ">
          <div className="edu-width text-left">
            <h3>Technical Skills</h3>
            <br />
            <h4 className="tools">Languages</h4>
            <p>HTML5, CSS3, JavaScript/ECMAScript 6, SQL</p>
            <h4 className="tools">Tools</h4>
            <p>
              Bootstrap, Materialize, jQuery, Node.js, Express, Handlebars.js,
              ReactJS, MongoDB, Firebase
            </p>
            <h4 className="tools">Applications</h4>
            <p>Github, Heroku, mySQL, Postman</p>
          </div>
        </div>
        </div>

        <div className="col-5 text-left education">
          <div className="edu-width">
            <h3>Education</h3>
            <br />
            <h4>UW Full Stack Coding Bootcamp Certificate</h4>
            <p>University of Washington, Seattle, November 2020</p>

            <h4>University of Washington</h4>
            <p>
              Bachelor of Science in PHYSICS with Math emphasis <br />
              UW Honors Program
            </p>
            <p></p>

            <h4>Project Management Certification</h4>
            <p>LinkedIn</p>
          </div>
        </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-10 text-left experience">
          <h3>Experience</h3>
          <br />
          <h4>VP, Financial Center Manager 2005 – Present</h4>
          <h5>Bank of America Seattle, WA</h5>
          <p>
            Manage operations and sales of top 5% Financial Center in the NW
            region within risk framework, company policy, and government
            regulations. Lead and develop a team of 15 people including
            oversight of the following partners in addition to direct reports:
            Loan Officers, Business Specialists, Financial Advisors,
            Relationship Managers. Inspect all aspects of their work for sales
            and operations compliance, accuracy, professionalism, and goal
            achievement. Drive client experience and consistency, with
            validation through recorded outbound calls for problem resolution/
            follow up and sales appointment setting. Lead peers through mock
            audits and skill development presentations. Responsible for regular
            education and launch of new technology without client interruption.
          </p>
          <h5>
            {" "}
            <em> Key Accomplishments:</em>
          </h5>
          <ul>
            <li>
              Signature Series Leadership Mentor, selected by NW regional
              leadership{" "}
            </li>
            <li>
              Sole NW Teller Trainer for nationwide Teller Training Pilot
              Program Responsible for onboarding and success of newly hired
              tellers{" "}
            </li>
            <li>
              Market Operations Champion, selected by market leadership to audit
              my Seattle area peers for operational errors in order to drive
              compliance with the Government Office of the Comptroller of
              Currency.
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="text-left special">
            <h2>Languages/Special Skills</h2>
            <br />
            <h3>Fluent in written and spoken Spanish</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
