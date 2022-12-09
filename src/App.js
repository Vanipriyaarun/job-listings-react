import "./App.css";
import { useState } from "react";
import NavBar from "./NavBar";

function App(props) {
  const data = props.jobData;
  const [activeNav, setActiveNav] = useState(false);
  const [filteredJobList, setFilteredJobList] = useState(props.jobData);
  const [catagories, setCatagories] = useState([]);

  const addedFilters = (filterValue) => {
    setActiveNav(true);
    const filtersArray = [...catagories];
    if (filtersArray.indexOf(filterValue) === -1) {
      filtersArray.push(filterValue);
    }
    setCatagories(filtersArray);
    console.log(filtersArray);
    const jobsListArray = [...filteredJobList];
    setFilteredJobList(
      jobsListArray.filter(
        (job) =>
          job.role === filterValue
          || job.level === filterValue
          || job.languages.includes(filterValue)
          || job.tools.includes(filterValue)
      )
    );
  };
  console.log(filteredJobList);

  const removeOneFilter = (filterValue) => {
    const filtersArray = [...catagories];
    const newFilteredArray = filtersArray.filter(
      (item) => item !== filterValue
    );
    setCatagories(newFilteredArray);
    const jobsListArray = [...data];
    if (newFilteredArray.length > 0) {
      setFilteredJobList(
        jobsListArray.filter(
          (job) =>
            newFilteredArray.includes(job.role)
            || newFilteredArray.includes(job.level)
            || newFilteredArray.some((item) => job.languages.includes(item))
            || newFilteredArray.some((item) => job.tools.includes(item))
        )
      );
    } else {
      setFilteredJobList(jobsListArray);
      setActiveNav(false);
    }
  };
  const clearAllFilter = () => {
    setCatagories([]);
    setFilteredJobList(props.jobData);
    setActiveNav(false);
  };

  return (
    <div>
      {activeNav ? (
        <NavBar
          catagories={catagories}
          removeOneFilter={removeOneFilter}
          clearAllFilter={clearAllFilter}
        />
      ) : null}
      {filteredJobList.map((data, index) => (
        <div key={index} className="main-grid">
          <div className="main-flex">
            <img src={data.logo} alt=""></img>
            <div className="title">
              <ul className="title-list">
                <li className="company">{data.company}</li>
                {data.new === true ? <li className="new">NEW!</li> : <li></li>}
                {data.new === true ? (
                  <li className="featured">FEATURED</li>
                ) : (
                  <li></li>
                )}
              </ul>
              <h3>{data.position}</h3>
              <ul className="post-time">
                <li>{data.postedAt}</li>
                <li>{data.contract}</li>
                <li>{data.location}</li>
              </ul>
            </div>
          </div>
          <ul className="skill-list">
            <li onClick={() => addedFilters(data.role)}>{data.role}</li>
            <li onClick={() => addedFilters(data.level)}>{data.level}</li>
            {data.languages.map((lang, index) => (
              <li onClick={() => addedFilters(lang)} key={index}>
                {lang}
              </li>
            ))}
            {data.tools.map((tool, index) => (
              <li onClick={() => addedFilters(tool)} key={index}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
