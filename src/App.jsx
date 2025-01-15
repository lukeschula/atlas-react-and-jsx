import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";


function App() {
  return (
  <div className="app">
    <Header />
    <Section title="What is react?">
    React is a powerful and widely-used JavaScript library for building user interfaces, developed and maintained by Facebook. It enables developers to create reusable, modular components that manage their own state, making it easier to design complex, interactive UIs. React utilizes a declarative approach, meaning developers describe what they want the UI to look like, and React efficiently updates and renders the necessary components when the underlying data changes. Central to React’s performance is the Virtual DOM, a lightweight copy of the actual DOM that React uses to efficiently determine and apply changes. React’s component-based architecture encourages the creation of scalable and maintainable code, making it an excellent choice for both small projects and large-scale applications. With features like hooks for managing state and lifecycle methods, along with extensive ecosystem support, React has become a cornerstone of modern front-end development.
    </Section>
    <Section title="Benefits of react">
      <ul>
        <li>Reusable Components</li>
        <li>Virtual DOM for Performance</li>
        <li>Declarative Syntax</li>
        <li>Rich Ecosystem and Community</li>
        <li>Cross-Platform Development</li>
      </ul>

    </Section>
    <Section title="Helpful resources">
      <HelpfulResource link="https://react.dev/" label="React Official Documentation Page" />
      <HelpfulResource link="https://www.youtube.com/watch?v=bMknfKXIFA8" label="React Tutorial for Beginners by freeCodeCamp" />
      <HelpfulResource link="https://scrimba.com/learn-react-c0e" label="Scrimba’s React Course" />
    </Section>

    <AboutMe />

    <Footer />
  </div>
  );
}

export default App;
