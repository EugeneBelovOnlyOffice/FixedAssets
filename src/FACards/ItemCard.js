import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ItemCard = ({device}) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardContent>
          <Typography >{device}</Typography>
          <Typography>Field 2</Typography>
          <Typography>Field 3</Typography>
         <Typography>Field 4</Typography>
          <Typography>Field 5</Typography>
         <Typography>Field 6</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
