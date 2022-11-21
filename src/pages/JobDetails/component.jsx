import * as React from 'react';
import { useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import moment from 'moment';
import { nanoid } from 'nanoid';

import Button from './Button';
import AttachedImages from './AttachedImages';
import AdditionalInfo from './AdditionalInfo';
import Contacts from './Contacts';
import Return from './Return';
import Error from '../Error';

const JobDetails= () => {
  let { jobId } = useParams();
  let [ , hash] = jobId.split('=');
  const jobs = useSelector(state => state.jobs.jobs);
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }));

  return <div className="container_details">
    {jobs.length !== 0 ? jobs.map(({id, address, benefits, description, email, employment_type, location, name, phone, pictures, salary, title, updatedAt})=>{
      for (let i =0; i <= jobs.length; i ++) {
        if(id === hash) {
          return <div className="details" key={nanoid()}>
            <div>
              <h2 className="details_head">Job Details</h2>
              <div className="details_actions">
                {matches ? <> 
                  <BookmarkBorderOutlinedIcon className="details_actions__save"/>
                  <span>Save to my list</span> 
                </> : <>
                  <StarBorderOutlinedIcon className="details_actions__save"/>
                  <span>Save to my list</span> 
                </>}
                <ShareIcon className="details_actions__share"/> 
                <span>Share</span>
              </div>
              {matches ? <Button/> :null}
              <h3 className="details_title">{title}</h3>
              <span className="details_updated">Posted {moment(updatedAt).fromNow()}</span>
              <span className="details_salary__text">Brutto per year</span>
              <p className="details_salary__sum">{salary}</p>
              <p className="details_description">{description}</p>
              <Button/>
              {!matches ? <>
                <AttachedImages images={pictures} name={name}/>
                <AdditionalInfo type={employment_type} benefits={benefits} />
              </> : 
              <>
                <AdditionalInfo type={employment_type} benefits={benefits} />
                <AttachedImages images={pictures} name={name}/>
                <Return/>
              </>}
            </div>
            <div>
            {!matches ? <h2>Contacts</h2> : null }
              <Contacts name={name} address={address} phone={phone} email={email} location={location} />
            </div>
          </div>
        }
      }
    }) : <Error/> }
    </div>
}

export default JobDetails;