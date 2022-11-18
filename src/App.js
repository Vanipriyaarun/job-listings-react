import "./App.css";

function App(props) {
  return (
    <div>
      {props.jobData.map((data,index)=>(
        <div className="main-grid">
          <div className="main-flex">
          <img key={index} src={data.logo} alt=""></img>
          <div className="title">
            <ul className="title-list">
              <li className="company" key={index}>{data.company}</li>
              {data.new===true ? <li className="new" key={index}>NEW!</li> : <li></li>}
              {data.new===true ? <li className="featured" key={index}>FEATURED</li> : <li></li>}
            </ul>
            <h3 key={index}>{data.position}</h3>
            <ul className="post-time">
              <li key={index}>{data.postedAt}</li>
              <li key={index}>{data.contract}</li>
              <li key={index}>{data.location}</li>
            </ul>
          </div>
          </div>
          <ul className="skill-list">
            <li key={index}>{data.role}</li>
            <li key={index}>{data.level}</li>
            {data.languages.map((lang,index)=>(
              <li key={index}>{lang}</li>
            ))}
            {data.tools.map((tool,index)=>(
            <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
