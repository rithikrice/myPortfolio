import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 1.5px;
    }
  }
`;
// dekho apn har baar h1 pura upr jaisa likhne ki jagah ek baar define krke ye MyTitleMessage wala custom form use krre hai
const TitleMessage = () => {
    return (
        <MyTitleMessage>
            <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Rithik Chopra</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "Cuber", "Learner"],
              autoStart: true,
              loop: true,
              delay: 100
            }}
          />
        </div>
      </div>
    </div>
        </MyTitleMessage>
    )
}

export default TitleMessage
