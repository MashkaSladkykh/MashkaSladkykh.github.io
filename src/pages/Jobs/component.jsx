import {useEffect} from "react";
import {connect} from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {selectJobs} from '../../store/jobs/selectors';
import {setJobs} from '../../store/jobs/actions';
import {generateApiUrl} from '../utils';
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
      {window.innerWidth > 900 && jobsList.length !== 0 ? 
      <Stack spacing={2}>
        <Pagination count={18} shape="rounded"  className="pagination"/>
      </Stack> : null}
    </main>
  )
}

const mapStateToProps = state => ({
  jobsList: selectJobs(state),    
})

const mapDispatchToProps = {
  setJobs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);