import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Table } from "react-bootstrap";
import "./BestMovies.scss";
import axios from "axios";

const BestMovies = () => {
  const [movies, setMovies] = useState([
    {
      _id: "",
      title: "",
      rank: 0,
      id: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setMovies(jsonRes))
      .catch((err) => console.log(err));
  });

  function addMovie(id) {
    const addedMovie = movies.filter((movie) => movie._id === id);
    alert("Movie added to your list");
    axios({
      method: "post",
      url: "http://localhost:3001/mymovies",
      data: {
        title: addedMovie[0].title,
        rank: addedMovie[0].rank,
        id: addedMovie[0].id,
      },
    });
  }

  return (
    <>
      <Nav tabs className="navigation">
        <NavItem>
          <NavLink href="/movies" active>
            Best Movies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/mymovies">My Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myreviews">My Reviews</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myprofile">My Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/settings">Settings</NavLink>
        </NavItem>
      </Nav>

      <div
        className="movies-list"
        style={{ height: "900px", overflowY: "scroll" }}
      >
        <div className="heading">
          <h1>Best 100 Movies Of All Times</h1>
        </div>
        <Table style={{ width: "60vw" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.rank}</td>
                  <td>{movie.title}</td>
                  <td>
                    <Button
                      onClick={(id) => addMovie(movie._id)}
                      color="primary"
                      style={{ borderRadius: "50%" }}
                    >
                      +
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BestMovies;
