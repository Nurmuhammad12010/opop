import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CiShoppingBasket } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

import './Material.css';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <>
    <div className='q'>
      <h1>Lorem ipsum dolor.Lorem ipsum dolor.</h1>
      <FaTwitter />
      <FaFacebook />
      <CiInstagram />
      <FaGoogle />
    </div>
    <div>
    <h1>ToyStore</h1>
    <button>Catalog</button>
    <button>Delivery</button>
    <button>About</button>
    <button>Contact</button>
    <button>cart<CiShoppingBasket /></button>
    </div>
    <div className='div'>
    <Card className='card'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="yellow" gutterBottom className='lorem'>
          lorem ipsum dolor lorem ipsum
        </Typography>
        <Typography variant="h1" component="div" className='k'>
          Free Ecommerce
        </Typography>
        <Typography variant='h1' sx={{ mb: 1.5 }} color="text.secondary" className='k j'>
          Template for Webflow
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Open Card</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}