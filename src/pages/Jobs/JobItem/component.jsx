import * as React from 'react';
import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { convertDate, generateRandomPicture } from '../../utils';
import location from '../../../images/location.svg';
import rating from '../../../images/rating.svg';


const JobItem = ({address, name, pictures, title, id, createdAt}) =>( 
 <Card sx={{ maxWidth: 345 }} >
    <img src={rating} alt="rate" />
    <p>{convertDate(createdAt)}</p>
    <CardHeader
      avatar={
        <NavLink to={`jobId=${id}`}>
          <Avatar >
            <img src={pictures[generateRandomPicture(0,2)]} alt={title} />
          </Avatar>
        </NavLink>
      }
      title={
        <NavLink to={`jobId=${id}`}>{title}</NavLink>}
      subheader={name}
    />
    <CardContent>
      <Typography>
      <img src={location} alt="location" /> {address}
      </Typography>
    </CardContent>
</Card>)

export default JobItem;