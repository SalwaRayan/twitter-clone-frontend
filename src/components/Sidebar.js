import React from "react";
import styled from "styled-components";
import { Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Svg = styled.svg`
  width: 25px;
`;
const SvgLogo = styled.svg`
  width: 50px;
  border-radius: 9999px;
  padding: 10px;
  transition-duration: 0.2s;

  &:hover {
    background: #e8f5fd;
  }

  @media (max-width: 1280px) {
    padding: 0;
    width: 30px;
  }
`;

const Text = styled.h3`
  font-size: 20px;
  margin: 0;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Hover = styled.div`
  border-radius: 9999px;
  border: none;
  width: 84%;
  padding: 10px;
  min-height: 52px;
  font-family: "Twitter bold";
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: #e7e7e8;
  }
`;

const Button = styled.button`
  border-radius: 9999px;
  border: none;
  width: 80%;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 10px;
  background-color: #1da1f2;
  padding-left: 32px;
  padding-right: 32px;
  min-width: 52px;
  min-height: 52px;
  font-family: "Twitter bold";
  color: white;

  &:hover {
    background-color: #1a8cd8;
  }

  @media (max-width: 1280px) {
    min-width: 0;
    min-height: 0;
    width: 35px;
    height: 35px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SvgTweet = styled.svg`
  width: 20px;
  display: none;

  @media (max-width: 1280px) {
    display: initial;
  }
`;

const Sidebar = (props) => {
  return (
    <>
      <Nav defaultActiveKey="/home" className="flex-column center">
        <Nav.Link href="/homepage" style={{ marginLeft: 10 }}>
          <Row>
            <Col xs={6} md={2}>
              <SvgLogo viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path
                    fill="#1da1f2"
                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                  ></path>
                </g>
              </SvgLogo>
            </Col>
            <Col xs={12} md={10} className="none-big"></Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          eventKey="/homepage"
          style={{ color: "black", marginLeft: 10, padding: 0 }}
        >
          <Hover>
            <Row style={{ display: "flex", alignItems: "center" }}>
              <Col xs={6} md={2}>
                <Svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path>
                    <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path>
                  </g>
                </Svg>
                {/* <Svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
              </g>
            </Svg> */}
              </Col>
              <Col xs={12} md={10} className="none-big">
                <Text>Acceuil</Text>
              </Col>
            </Row>
          </Hover>
        </Nav.Link>
        {props.mode === "connected" && 
          <>
            <Nav.Link
              eventKey="profile"
              style={{ color: "black", marginLeft: 10, padding: 0 }}
            >
              <Hover>
                <Row>
                  <Col xs={6} md={2}>
                    <Svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                      </g>
                    </Svg>
                  </Col>
                  <Col xs={12} md={10} className="none-big">
                    <Text>Profil</Text>
                  </Col>
                </Row>
              </Hover>
            </Nav.Link>
            <Button>
              <Text>Tweeter</Text>
              <SvgTweet viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path
                    fill="white"
                    d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"
                  ></path>
                </g>
              </SvgTweet>
            </Button>
          </>
        }
      </Nav>
    </>
  );
};

export default Sidebar;
