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
  const jobs = JSON.parse(localStorage.reduxState).jobs.jobs;
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }));
  
  const detailedJob = jobs.find(({id}) => id === hash);

  return <div className="container_details">
    {detailedJob !== undefined && localStorage.reduxState.length !== 0 ? 
      <div className="details" key={nanoid()}>
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
          <h3 className="details_title">{detailedJob.title}</h3>
          <span className="details_updated">Posted {moment(detailedJob.updatedAt).fromNow()}</span>
          <span className="details_salary__text">Brutto per year</span>
          <p className="details_salary__sum">{detailedJob.salary}</p>
          <p className="details_description">{detailedJob.description}</p>
          <Button/>
          {!matches ? <>
            <AttachedImages images={detailedJob.pictures} name={detailedJob.name}/>
            <AdditionalInfo type={detailedJob.employment_type} benefits={detailedJob.benefits} />
          </> : 
          <>
            <AdditionalInfo type={detailedJob.employment_type} benefits={detailedJob.benefits} />
            <AttachedImages images={detailedJob.pictures} name={detailedJob.name}/>
            <Return/>
          </>}
        </div>
        <div>
        {!matches ? <h2>Contacts</h2> : null }
          <Contacts name={detailedJob.name} address={detailedJob.address} phone={detailedJob.phone} email={detailedJob.email} location={detailedJob.location} />
        </div>
      </div>
    : <Error/> }
  </div>
}

export default JobDetails;