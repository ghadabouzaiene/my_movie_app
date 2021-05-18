import "./App.css";
import TypeMe, { Delete } from 'react-typeme';
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"
import MovieList from "./component/MovieList";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import Add from "./component/Add";


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
];



  const [movieList, setMovieList] = useState(data);
  const [search, setSearch] = useState("");
  const [rate, setRating] = useState(0);

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
    <div className="search">
    <Form inline>
      <FormControl type="text" placeholder="Search by Name" className="mr-sm-2"  
      onChange={(search) => setSearch(search.target.value)}/>   
      <br/><FormControl type="number" placeholder="Search by Rate" className="mr-sm-2"
      onChange={(rate) => setRating(rate.target.value)}></FormControl> </Form></div>

  </Navbar>
  </div>
<div className="add">
      <Add movieAdd={movieAdd} /></div>
      <MovieList movieList={movieList} search={search} rate={rate}/>
    </div>
  );
}

export default App;
