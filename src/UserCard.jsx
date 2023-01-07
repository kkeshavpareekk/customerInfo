import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {user.first_name[0]}
          </Avatar>
        }
        title={`${user.first_name} ${user.last_name}`}
        subheader={user.email}
      />
      <CardMedia
        component="img"
        height="194"
        image={user.avatar}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora
          natus consectetur cum praesentium numquam nostrum, alias nihil facere
          minima illo distinctio explicabo.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
