import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { ProjectDetail } from "./components/ProjectDetail";
import { Process } from "./components/Process";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "work", Component: Work },
      { path: "work/:projectId", Component: ProjectDetail },
      { path: "process", Component: Process },
      { path: "*", Component: NotFound },
    ],
  },
]);
