import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./components/Theme";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import ThemeToggle from "./components/ThemeToggle";

// Lazy load components for better performance
const About = lazy(() => import("./components/about/About"));
const ExperienceEducation = lazy(
  () => import("./components/ExperienceEducation")
);
const Skills = lazy(() => import("./components/skills/Skills"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Languages = lazy(() => import("./components/languages/Languages"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="container" style={{ padding: "2rem", textAlign: "center" }}>
    <p>Loading...</p>
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <ThemeToggle />
        <Header />
        <Nav />
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <ExperienceEducation />
          <Skills />
          <Projects />
          <Languages />
          <Contact />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
