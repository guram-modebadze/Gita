import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Conponents/Layout/header";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Dashboard from "./Conponents/Layout/Dashboard";
import Contacts from "./Conponents/Layout/Contacts";
import About from "./Conponents/Layout/About";
import Footer from "./Conponents/Layout/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <h1>
        <Dashboard />
      </h1>
    ),
  },
  {
    path: "/contacts",
    element: (
      <h1>
        <Contacts />
      </h1>
    ),
  },
  {
    path: "/about",
    element: (
      <h1>
        <About />
      </h1>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Flex
      gap={"20px"}
      justifyContent={"space-between"}
      paddingX={"100px"}
      paddingY={"50px"}
    >
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Flex>
  </ChakraProvider>
);
