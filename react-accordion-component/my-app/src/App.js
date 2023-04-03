import React from "react";
import Accordion from "./Accordion";



const topics = [
  {
    title: "Hypertext Markup Language (HTML)",
    details: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technoloaies for the World Wide Web."
  },
  {
    title: "Cascading Style Sheets (CSS)",
    details: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript."
  },
  {
    title: "JavaScript",
    details: "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based obiect-orientation. and first-class functions."
  },
  {
    title: "City",
    details: <img src="https://picsum.photos/id/238/250" alt="city" />
  },
  {
    title: "Lighthouse",
    details: <img src="https://picsum.photos/id/58/250" alt="lighthouse" />
  },
  {
    title: "Paris",
    details: <img src="https://picsum.photos/id/318/250" alt="paris" />
  },
];

function App() {
  return (
    <>
    <div className="container">
      <Accordion topics={topics} />
    </div>
    </>
  );
}

export default App;
