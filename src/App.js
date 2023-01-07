import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Pagination,
  Toolbar,
  Typography,
} from "@mui/material";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";

function App() {
  const [loading, setLoading] = useState(false);
  const { users, cur_user } = useSelector((state) => state.custom);
  const dispatch = useDispatch();

  const getUsersData = () => {
    const url = `https://reqres.in/api/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "addUsers", payload: data.data });
        dispatch({ type: "addCurUser", payload: data.data[0] });
      })
      .catch((err) => console.log(err));
  };

  const getSingleUserData = (id) => {
    const url = `https://reqres.in/api/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "addCurUser", payload: data.data });
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e, value) => {
    setLoading(true);
    const user_id = users[value].id;
    getSingleUserData(user_id);
    setLoading(false);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ padding: "1rem" }}>
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div">
            Customers Info
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        m={2}
        p={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {users.length !== 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loading ? (
              <CircularProgress color="success" />
            ) : (
              <UserCard user={cur_user} />
            )}
            <Pagination
              count={users.length}
              variant="outlined"
              shape="rounded"
              size="large"
              siblingCount={0}
              onChange={handleChange}
            />
          </Box>
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={getUsersData}
            >
              Show Users
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
