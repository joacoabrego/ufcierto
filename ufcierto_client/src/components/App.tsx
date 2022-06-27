import { MantineProvider } from "@mantine/core";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
const App = () => {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Raleway",
        headings: {
          fontFamily: "Modak",
          fontWeight: 100,
          sizes: {
            h1: { fontSize: 96, lineHeight: "1em" },
          },
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </MantineProvider>
  );
};

export default App;
