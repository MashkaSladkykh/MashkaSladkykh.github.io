import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';

import {selectJobs} from '../../store/jobs/selectors';
import {setJobs} from '../../store/jobs/actions';
import {generateApiUrl} from '../utils';
import JobItem from './JobItem';


const Jobs = ({jobsList, setJobs}) => {  
  const [page, setPage] = useState(1);
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }));

  useEffect(() => {
    fetch(generateApiUrl())
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      })
  }, [page]);

  const handleChange = (event, value) => {
      setPage(value);
  };

  const generateStartPosition = (page) => (
    page % 2 ? 0 : 10
  );

  const generateEndPosition = (page) => (
    page % 2 ? 10 : 20
  );
  
  return (
    <main className='container'>
      <div className='jobs'>
        {jobsList.length === 0 && (
          <div>Empty list</div>
        )}
        {jobsList.slice(generateStartPosition(page), generateEndPosition(page)).map(({id, address, name, title, pictures, createdAt}) => {
          return  <JobItem name={name} title={title} address={address} pictures={pictures} key = {id} id={id} createdAt={createdAt}/>
})}
      </div>
      {matches && jobsList.length !== 0 ? 
      <Stack spacing={2}>
        <Pagination shape='rounded' size='large' className='pagination' count={18} page={page} onChange={handleChange}/>
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