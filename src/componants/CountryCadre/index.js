import { useState } from "react";
import useStyle from "./style";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import Popover from '@mui/material/Popover';

import CountryInfo from "../CountryInfo";

const CountryCadre = ({ country }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setHorizontal(event.pageX);
    setVertical(event.pageY)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyle();
  return (
    <>
      <Card className={classes.cardWrapper} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={country.flags.svg}
            alt={country.name.common}
            width="100%"
          />
        </CardActionArea>
      </Card>
      
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: vertical,
          horizontal: horizontal,
        }}
        PaperProps={{
          style: { width: '50%' },
        }}
      >
        <CountryInfo data={country}/>
      </Popover>
    </>
  );
};

export default CountryCadre;
