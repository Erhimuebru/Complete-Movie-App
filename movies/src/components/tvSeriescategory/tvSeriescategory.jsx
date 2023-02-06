import "./tsSeriescategor.css"
const TvSeriesCategory = ({ handleRequest }) => {
  return (
    <div>
      <div className="div">
        <ul className="ul">
          <li className="di" onClick={() => handleRequest("Action and Adventure")}>
            Action & Adventure
          </li>
          <li className="div" onClick={() => handleRequest("Animation")}>Animation</li>
          <li className="div" onClick={() => handleRequest("Comedy")}>Comedy</li>
          <li className="div" onClick={() => handleRequest("Crime")}>Crime</li>
          <li className="div" onClick={() => handleRequest("Documentary")}>Documentary</li>
          <li className="div" onClick={() => handleRequest("Drama")}>Drama</li>
          <li className="div" onClick={() => handleRequest("Family")}>Family</li>
          <li className="div" onClick={() => handleRequest("Kids")}>Kids</li>
          <li className="div" onClick={() => handleRequest("Mystery")}>Mystery</li>
        </ul>
      </div>
      <div className="ul-div">
        <ul className="ul">
          <li className="div" onClick={() => handleRequest("News")}>News</li>
          <li className="div" onClick={() => handleRequest("Reality")}>Reality</li>
          <li className="div" onClick={() => handleRequest("Sci-Fi & Fantasy")}>
            Sci-Fi & Fantasy
          </li>
          <li className="div" onClick={() => handleRequest("Soap")}>Soap</li>
          <li className="div" onClick={() => handleRequest("Talk")}>Talk</li>
          <li className="div" onClick={() => handleRequest("War & Politics")}>
            War & Politics
          </li>
          <li className="div" onClick={() => handleRequest("Western")}>Western</li>
        </ul>
      </div>
    </div>
  );
};

export default TvSeriesCategory;
