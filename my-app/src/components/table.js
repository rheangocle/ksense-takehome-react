import React, { useState, useEffect } from "react";
import { Table, Card, Nav } from "react-bootstrap";
import axios from "axios";

export default function UsersData() {
  // Variables for getting user data
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Variables for getting post data
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  // fetching user data from api
  const getUsers = async () => {
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response);
    } catch (error) {
      console.error("There was an error fetching the data: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // fetching post data from api
  const getPosts = async (userId) => {
    try {
      const posts = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      setPosts(posts);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  if (loading || isLoading) return "Loading...";
  if (error || err) return "Error!";

  return (
    <>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Nav.Link key={user.id} onClick={() => getPosts(user.id)}>
                    {user.name}
                  </Nav.Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center'>
        <h5>User's Posts</h5>
      </div>

      {/* Looping through user's post from fetch api */}
      <div className='container d-flex flex-wrap p-2 justify-content-evenly'>
        {posts ? (
          posts.data.map((post) => (
            <Card className='mb-5' style={{ width: "18rem" }} key={post.id}>
              <Card.Header as='h5' className='bg-secondary'>
                {post.title}
              </Card.Header>
              <Card.Body>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>This user does not have any posts.</p>
        )}
      </div>
    </>
  );
}
