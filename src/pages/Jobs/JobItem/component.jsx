import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
import PlaceIcon from '@mui/icons-material/Place';

import { generateRandomNumber } from '../../utils';
import rating from '../../../images/rating.svg';

const JobItem = ({ address, name, pictures, title, id, createdAt }) => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );

  return (
    <Card className='jobs_item'>
      <img src={rating} alt='rate' className='jobs_raiting' />
      <span className='jobs_date'>Posted {moment(createdAt).fromNow()}</span>
      <CardHeader
        className='jobs_card-header'
        avatar={
          <Avatar className='jobs_avatar'>
            <img src={pictures[generateRandomNumber(0, 2)]} alt={title} />
          </Avatar>
        }
        title={
          <NavLink to={`jobId=${id}`} className='jobs_title'>
            {title}
          </NavLink>
        }
        subheader={name}
      />
      <CardContent id='jobs_card-conent'>
        <Typography className='jobs_location__text'>
          {matches ? (
            <BookmarkBorderOutlinedIcon className='jobs_saveIcon' />
          ) : null}
          <PlaceIcon className='jobs_location__icon' /> {address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobItem;