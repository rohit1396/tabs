import React, { useState, useEffect } from "react";
import "./App.css";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setvalue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    console.log(jobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h3>...Loading</h3>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <div className="App">
      <h1>Jobs container</h1>
      <section>
        {jobs.map((item, index) => {
          return (
            <button key={item.id} onClick={() => setvalue(index)}>
              {item.company}
            </button>
          );
        })}
      </section>
      <section>
        <p>{company}</p>
        <p>{dates}</p>
        <p>{duties}</p>
        <p>{title}</p>
      </section>
    </div>
  );
}

export default App;
