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
import saveIcon from '../../../images/save.svg';


const JobItem = ({address, name, pictures, title, id, createdAt}) =>( 
 <Card className='jobs_item' >
    <img src={rating} alt="rate"  className='jobs_raiting'/>
    <span className='jobs_date'>{convertDate(createdAt)}</span>
    <CardHeader style={window.innerWidth > 900 ? {padding:'0'} : {paddingBottom:'0'}}
      avatar={
          <Avatar className="jobs_avatar" style={window.innerWidth > 900 ? {width: '85px', height: '85px'} : {width: '66px', height: '66px'}}>
            <img src={pictures[generateRandomPicture(0,2)]} alt={title} />
          </Avatar>
      }
      title={
        <NavLink to={`jobId=${id}`} className='jobs_title'>{title}</NavLink>}
      subheader={name}
    />
    <CardContent style={window.innerWidth > 900 ? {padding:'0 0 0 103px'}:{padding:'8px 0 27px 100px'}}>
      <Typography className='jobs_location__text'>
        {window.innerWidth > 900 ? <img src={saveIcon} alt='saveIcon' className='jobs_saveIcon'/> : null}
      <img src={location} alt="location" className='jobs_location__icon'/> {address}
      </Typography>
    </CardContent>
</Card>)

export default JobItem;