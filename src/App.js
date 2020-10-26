import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLargeRow />
     <Row title="TOP TRENDING" fetchURL={request.fetchTrending} />
     <Row title="TOP RATED" fetchURL={request.fetchTopRated} />
     <Row title="ACTION MOVIES" fetchURL={request.fetchActionMovies} />
     <Row title="COMEDY MOVIES" fetchURL={request.fetchComedyMovies} />
     <Row title="HORROR MOVIES" fetchURL={request.fetchHorrorMovies} />
     <Row title="ROMANCE MOVIES" fetchURL={request.fetchRomanceMovies} />
     <Row title="DOUCMENTARIES" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
