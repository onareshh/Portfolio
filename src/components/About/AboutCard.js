import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naresh </span>
            from <span className="purple"> Salem, India.</span>
            <br />
            A motivated Computer Science and Engineering graduate with a strong academic background. Eager to learn and thrive in fast-paced environments. Skilled in problem-solving, decision-making, and multitasking, with the ability to adapt swiftly. 

            <br />
           
            <br />
            Keen on contributing to full stack development effectively.
            <br />
            
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Naresh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
