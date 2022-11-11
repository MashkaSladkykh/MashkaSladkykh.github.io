import {useEffect} from "react";
import {connect} from 'react-redux';

import {selectJobs} from '../../store/jobs/selectors';
import {setJobs} from '../../store/jobs/actions';

import {generateApiUrl} from '../utils';

import { NavLink } from "react-router-dom";
import JobItem from "./JobItem";


const Jobs = ({jobsList, setJobs}) => { 
  useEffect(() => {
    fetch(generateApiUrl())
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        console.log(data, 'data')
      })
  }, [])

  return (
    <main className="container">
      <div className="jobs">
        {jobsList.length === 0 && (
          <div>Empty list</div>
        )}
        {jobsList.map(({id, address, name, title, pictures, createdAt}) => {
          return  <JobItem name={name} title={title} address={address} pictures={pictures} key = {id} id={id} createdAt={createdAt}/>
})}
      </div>
    </main>
  )
}



{/* <article key={jobItem.id} className="popular__item">
            <NavLink to={`jobId=${jobItem.id}`}>
            <img src={jobItem.pictures[0]} className="img" alt='img'/>
            </NavLink>
            <section>
              <h3></h3>
              <p></p>
            </section>
            <p></p>
          </article> */}


const mapStateToProps = state => ({
  jobsList: selectJobs(state),    
})

const mapDispatchToProps = {
  setJobs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);