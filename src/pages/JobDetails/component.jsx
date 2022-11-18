import { useSelector} from 'react-redux';
import { Link , useParams} from "react-router-dom";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import Location from '../../images/location.svg';
import saveIcon from '../../images/save.svg';

import {convertDate} from '../utils';


const JobDetails= () => {
  let { jobId } = useParams();
  let [path, hash] = jobId.split('=')
  const jobs = useSelector(state => state.jobs.jobs)
  return <div className="container_details">
    {jobs.length !== 0 ? jobs.map(({id, address, benefits, createdAt, description, email, employment_type, location, name, phone, pictures, salary, title, updatedAt})=>{
      for (let i =0; i <= jobs.length; i ++) {
        if(id === hash) {
          return <div className="details">
            <div>
              <h2 className="details_head">Job Details</h2>
              <div className="details_actions">
              {window.innerWidth > 900 ?<> <img src={saveIcon} alt='saveIcon'className="details_actions__save"/><span>Save to my list</span> </> : <><StarBorderOutlinedIcon className="details_actions__save"/><span>Save to my list</span> </>}
                <ShareIcon className="details_actions__share"/> <span>Share</span>
              </div>
              {window.innerWidth > 900 ?<div className="details_button">
                <button type="button" className="details_button__apply">Apply now</button>
              </div> :null}
              <h3 className="details_title">{title}</h3>
              <span className="details_updated">Posted {convertDate(updatedAt)}</span>
              <span className="details_salary__text">Brutto per year</span>
              <p className="details_salary__sum">{salary}</p>
              <p className="details_description">{description}</p>
              <div className="details_button">
                <button type="button" className="details_button__apply">Apply now</button>
              </div>
              {window.innerWidth < 900 ? <>
              <h2>Attached images</h2>
              <div className="details_images">
                {pictures.map(picture=>(<img src={picture} alt={name}/>))}
              </div> 
              <h2>Additional info</h2>
              <div className="details_employment">
                <h4>Employment type</h4>
                {employment_type.map(type => (<span className="details_employment__item">{type}</span>))}
              </div>
              <div className="details_benefits">
                <h4>Benefits</h4>
                {benefits.map(benefit => (<span className="details_benefits__item">{benefit}</span>))}
              </div>
              </> : <><h2 className="details_additional">Additional info</h2>
              <div className="details_employment">
                <h4>Employment type</h4>
                {employment_type.map(type => (<span className="details_employment__item">{type}</span>))}
              </div>
              <div className="details_benefits">
                <h4>Benefits</h4>
                {benefits.map(benefit => (<span className="details_benefits__item">{benefit}</span>))}
              </div>
              <h2>Attached images</h2>
              <div className="details_images">
                {pictures.map(picture=>(<img src={picture} alt={name}/>))}
              </div> 
              </>}
            </div>
            <div>
            {window.innerWidth < 600 ? <h2>Contacts</h2> : null }
              <div className="details_contacts">
                <h4>{name}</h4>
                <img src={Location} alt='location' />
                <span className="details_contacts__location">{address}</span>
                <a href={`tell:${phone}`} className="details_contacts__phone">{phone}</a>
                <p className="details_contacts__email">{email}</p>
                <iframe src={`https://maps.google.com/maps?q=${location.lat},${location.long}&t=&z=15&ie=UTF8&iwloc=&output=embed`}/>
              </div>
            </div>
          </div>
        }
      }
    }) : 'else'}
    </div>
   

}

export default JobDetails;