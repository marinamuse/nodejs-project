import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Table } from "react-bootstrap";
import "./BestMovies.scss";
import axios from "axios";

const MyMovies = () => {
  const [myMovies, setMyMovies] = useState([
    {
      title: "",
      rank: null,
      id: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/mymovies")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setMyMovies(jsonRes))
      .catch((err) => console.log(err));
  }, [myMovies]);

  function deleteMovie(id) {
    axios.delete("http://localhost:3001/mymovies/delete/" + id);
    alert("Movie deleted");
  }

  return (
    <>
      <Nav tabs className="sticky-top">
        <NavItem>
          <NavLink href="/movies">My Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/mymovies" active>
            My Movies
          </NavLink>
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
          <h1>My Movies</h1>
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
            {myMovies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.rank}</td>
                  <td>{movie.title}</td>
                  <td>
                    <Button
                      onClick={() => deleteMovie(movie._id)}
                      color="danger"
                      style={{ borderRadius: "50%" }}
                    >
                      -
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

export default MyMovies;
