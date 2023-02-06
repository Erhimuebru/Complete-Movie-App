import "./moviesCategory.css";
const MoviesCategory = ({ handleRequest }) => {
  return (
    <>
      <div>
        <ul className="ul">
          <li className="div" onClick={() => handleRequest("Action")}>Action</li>
          <li className="div"  onClick={() => handleRequest("Adventure")}>Adventure</li>
          <li className="div"  onClick={() => handleRequest("Animation")}>Animation</li>
          <li className="div"  onClick={() => handleRequest("Comedy")}>Comedy</li>
          <li className="div"  onClick={() => handleRequest("Crime")}>Crime</li>
          <li className="div"  onClick={() => handleRequest("Documentary")}>Documentary</li>
          <li className="div"  onClick={() => handleRequest("Drama")}>Drama</li>
          <li className="div"  onClick={() => handleRequest("Family")}>Family</li>
          <li className="div"  onClick={() => handleRequest("Fantasy")}>FAntasy</li>
          <li className="div"  onClick={() => handleRequest("History")}>History</li>
        </ul>
      </div>
      <div className="ul-div">
        <ul className="ul">
          <li className="div"  onClick={() => handleRequest("Horror")}>Horror</li>
          <li className="div" onClick={() => handleRequest("Music")}>Music</li>
          <li className="div" onClick={() => handleRequest("Mystery")}>Mystery</li>
          <li className="div" onClick={() => handleRequest("Romance")}>Romance</li>
          <li className="div" onClick={() => handleRequest("Science")}>Science Fiction</li>
          <li className="div" onClick={() => handleRequest("TV Movie")}>TV Movie</li>
          <li className="div" onClick={() => handleRequest("Thriller")}>Thriller</li>
          <li className="div" onClick={() => handleRequest("War")}>War</li>
          <li className="div" onClick={() => handleRequest("Western")}>Western</li>
        </ul>
      </div>
    </>
  );
};

export default MoviesCategory;
