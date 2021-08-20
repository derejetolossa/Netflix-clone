// import logo from './logo.svg';
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import Row from './Row';

function App() {
  return (
    <div className="App">
    <Nav />
      <Banner />
    <Row title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />

    <Row title="Trending Now" 
      fetchUrl={requests.fetchTrending}
    />

<Row title="Top Rated"
      fetchUrl={requests.fetchTopRatedMovies} />

<Row title="Action Movies"
      fetchUrl={requests.fetchActionMovies} />

<Row title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies} />

<Row title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies} />

<Row title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies} />

<Row title="Documentaries Movies"
      fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

// API KEY: 37d7a6091ca94d2ad2887bbd2949c96b
// https://api.themoviedb.org/3/movie/550?api_key=37d7a6091ca94d2ad2887bbd2949c96b
// netflix-clone-4f625.web.app

// Paused at 48:57/2:17:24 from  https://www.youtube.com/watch?v=zWInNnE8Acw


export default App;

