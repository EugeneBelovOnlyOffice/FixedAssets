import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ItemCard = ({
  dept,
  fa,
  model,
  notes,
  owner,
  responsible,
  selectBrand,
  key,
  sn
}) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardContent>
          <Typography>Department: {dept}</Typography>
          <Typography>Inv: {fa}</Typography>
          <Typography>Model: {model}</Typography>
          <Typography>Serial: {sn}</Typography>
      
          <Typography>Owner: {owner}</Typography>
          <Typography>Issuer: {responsible}</Typography>
          <Typography>Brand: {selectBrand}</Typography>
          <Typography>Notes: {notes}</Typography>
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
