import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import StudentPage from "./components/StudentPage";
import NotFound from "./components/NotFound";

const allPaths = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/students/:id",
    element: <StudentPage/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={allPaths} />;
}

export default App;
