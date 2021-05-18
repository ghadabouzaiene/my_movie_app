import "./App.css";
import TypeMe, { Delete } from 'react-typeme';
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"
import MovieList from "./component/MovieList";
import { Navbar, Nav } from "react-bootstrap";
import Add from "./component/Add";
import Filter from "./Filter";


function App() {
  const data = [{
    id : uuidv4(),
    title : "the invisible guest",
    description : "The Invisible Guest (Spanish: Contratiempo, lit. 'Setback') is a Spanish mystery thriller film written and directed by Oriol Paulo. It was released in Spain on 6 January 2017. The film opened to lukewarm critical response, but was a commercial success, grossing $30.5 million against its €4 million budget.",
    posterUrl : "https://th.bing.com/th/id/R51ce75bb09991f36bcbc49691529dc3b?rik=PjuK2L8VUZlMMw&pid=ImgRaw",
    rating : 5 ,
    year : "2016"
  },
  {
    id : uuidv4(),
    title : "Your Name.",
    description : "Mitsuha and Taki are total strangers living completely different lives. But when Mitsuha makes a wish to leave her mountain town for the bustling city of Tokyo, they become connected in a bizarre way. She dreams she is a boy living in Tokyo while Taki dreams he is a girl from a rural town he’s never visited.",
    posterUrl : "https://static.cinebel.be/img/movie/poster/full/1017364_fr_your_name_1511451802582.jpg",
    rating : 4 ,
    year : "2017"
  },
  {
    id : uuidv4(),
    title : "Social Dilemma",
    description : "The Social Dilemma is an American docudrama film directed by Jeff Orlowski and written by Orlowski, Davis Coombe, and Vickie Curtis. It goes into depth on how social media's design is meant to nurture an addiction, manipulate people and governments, and spread conspiracy theories and disinformation.",
    posterUrl : "https://th.bing.com/th/id/R0c89ffd52457bf5ca1f3bb1fc65d4b59?rik=OvEZ3CW8Db%2fKcw&pid=ImgRaw",
    rating : 3 ,
    year : "2020"
  },
  {
    id : uuidv4(),
    title : "Soul",
    description : "Produced by Pixar and released by Disney , the story follows a middle school music teacher named Joe Gardner, who seeks to reunite his soul and his body after they are accidentally separated, just before his big break as a jazz musician. Soul is the first Pixar film to feature an African-American protagonist.",
    posterUrl : "https://th.bing.com/th/id/OIP.bRMEBwz-3oMpbc6P-GiOZQHaLH?pid=ImgDet&rs=1",
    rating : 4 ,
    year : "2020"
  },
  {
    id : uuidv4(),
    title : "Parasite",
    description : "The film, starring Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin, and Lee Jung-eun, follows a poor family who scheme to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.",
    posterUrl : "https://th.bing.com/th/id/Rf86d3678f3e71921104d507c5c8830e6?rik=h41UAdnRL9NpfA&pid=ImgRaw",
    rating : 5 ,
    year : "2019"
  },
  {
    id : uuidv4(),
    title : "Mulan",
    description : "Mulan is a girl, the only child of her honored family. When the Huns invade China, one man from every family is called to arms. Mulan's father, who has an old wound and cannot walk properly, decides to fight for his country and the honor of his family though it is clear that he will not survive an enemy encounter.",
    posterUrl : "https://th.bing.com/th/id/OIP.mP5GTM14qZhQzmH7xq8WcwHaK-?pid=ImgDet&rs=1",
    rating : 4 ,
    year : "2020"
  },
];



  const [movieList, setMovieList] = useState(data);
  const [search, setSearch] = useState("");
  const [rate, setRating] = useState(0);

  const handleTitleFilterChange = (value)=>setSearch(value)
  const handleRateFilterChange = (value)=>setRating(value)
  const movieAdd = (id,title,posterUrl,description,rating,year) =>
    setMovieList([...movieList, {id, title,posterUrl,description ,rating,year }]);
  
  return (
    <div className="App">
      <div className='nav'>
        <Navbar bg="transparent" variant="dark">
    <Navbar.Brand href="#home"><span className="typewriter"><TypeMe strings={[
  'Home of Movies', 
  <Delete characters={6} />, 
  'fun.']} /></span>
  </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#latestmovies">Latest Movies</Nav.Link>
      <Nav.Link href="#recomondations">Recomondations</Nav.Link>
    </Nav>
    <div>
      <Filter handleTitleFilterChange={handleTitleFilterChange} handleRateFilterChange={handleRateFilterChange}></Filter>
    </div>

  </Navbar>
  </div>
<div className="add">
      <span className="adding">You Have Something to Add?</span> <Add movieAdd={movieAdd} /></div>
      <MovieList movieList={movieList.filter(movie=>movie.title.toUpperCase().trim().includes(search.trim().toUpperCase()) && movie.rating>=rate)} />
    </div>
  );
}

export default App;
