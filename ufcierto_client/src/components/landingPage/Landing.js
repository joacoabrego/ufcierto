import React from "react";
import "./Landing.css";
import "../../index.css";

const Landing = () => {
  return (
    <div
      className="ui center aligned container"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#2ab7ca",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: "4vh",
          marginLeft: "-12.5vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#FE4A49",
            height: "30vh",
            width: "30vh",
            borderRadius: "50%",
            marginTop: "7.5vh",
            marginRight: "-15vh",
            zIndex: 1,
          }}
        />
        <div
          style={{
            backgroundColor: "#FED766",
            height: "45vh",
            width: "45vh",
            borderRadius: "50%",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "10vh",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            className="ui left aligned text container"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <div style={{ paddingTop: "5em" }}>
                <h1 className="title-text primary">Uf,</h1>
                <h1
                  className="title-text secondary"
                  style={{ marginTop: "-0.5em" }}
                >
                  cierto
                </h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                <h3 className="normal-text" style={{ marginTop: "-0.5em" }}>
                  I forgot... again.
                </h3>
              </div>
            </div>
            <div
              style={{
                marginLeft: "2.5vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <h3
                className="normal-text"
                style={{
                  color: "white",
                  fontWeight: "100",
                  fontSize: "3vh",
                  marginRight: "-30vh",
                }}
              >
                A simple website to help you remember birthdays.
              </h3>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: "11em",
            marginLeft: "25vh",
          }}
        >
          <button
            className="ui massive white button"
            style={{ fontFamily: "Raleway", backgroundColor: "#E6E6EA" }}
          >
            login
          </button>
          <text
            className="normal-text"
            style={{
              color: "#E6E6EA",
              marginLeft: "1em",
              marginRight: "1em",
            }}
          >
            or
          </text>
          <button
            className="ui massive button"
            style={{ fontFamily: "Raleway", backgroundColor: "#E6E6EA" }}
          >
            sign up
          </button>
        </div>
      </div>
      <div style={{ display: "flex", flex: 2, justifyContent: "flex-end" }}>
        <a
          href="https://github.com/joacoabrego/ufcierto"
          style={{
            height: "62px",
            width: "62px",
            marginTop: "3vh",
            marginRight: "3vh",
          }}
        >
          <img
            src={"/assets/25231.png"}
            width="62"
            height="62"
            alt="github logo"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Landing;
