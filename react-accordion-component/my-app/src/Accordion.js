import { useState } from 'react';
import './Accordion.css';

export default function Accordion(props) {
  const { topics } = props;
  const [openAccordion, setOpenAccordion] = useState(-1);

  function handleTopicClick(index) {
    openAccordion === index ? setOpenAccordion(-1) : setOpenAccordion(index);
  }

  return (
    <div className="accordion rounded overflow-hidden mt-4 w-50 mx-auto">
      {topics.map((topic, index) => (
        <div key={index}>
          <button
            className="accordion-header d-block w-100 p-3 text-left cursor-pointer accordion-button"
            onClick={() => handleTopicClick(index)}
          >
            {topic.title}
          </button>
          {openAccordion === index && (
            <div className="accordion-details p-3 bg-white">{topic.details}</div>
          )}
        </div>
      ))}
    </div>
  );
}
