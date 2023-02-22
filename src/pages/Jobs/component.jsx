import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
import { nanoid } from 'nanoid';

import { selectJobs } from '../../store/jobs/selectors';
import { setJobs } from '../../store/jobs/actions';
import { generateApiUrl } from '../utils';
import {JobItem} from './JobItem/component';

export const Jobs = ({ jobsList, setJobs }) => {
  const [page, setPage] = useState(1);
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );
  const modifiedData =(data) =>([
    ...data.map((job) => ({ 
      ...job, 
      pictures: job.pictures.map((picture) => ({
        id: nanoid(), 
        url: picture 
      })),
      benefits: job.benefits.map((benefit) => ({
        id: nanoid(),
        item: benefit
      })),
      employment_type: job.employment_type.map((type) => ({
        id: nanoid(),
        type:type
      }))
    }))
  ]) // We did this only because we don't have unique keys for these elements

  useEffect(() => {
    fetch(generateApiUrl())
      .then((res) => res.json())
      .then((data) => {
        setJobs(modifiedData(data))
      });
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  
  const count = 4;

  const generateStartPosition = (page) => ((page - 1) * count);

  const generateEndPosition = (page) => (generateStartPosition(page) + count + 1);

  return (
    <main className='container'>
      <div className='jobs'>
        {jobsList.length === 0 && <div>Empty list</div>}
        {jobsList
          .slice(generateStartPosition(page), generateEndPosition(page))
          .map(({ id, address, name, title, pictures, createdAt }) => {
            return (
              <JobItem
                name={name}
                title={title}
                address={address}
                pictures={pictures}
                key={id}
                id={id}
                createdAt={createdAt}
              />
            );
          })}
      </div>
      {matches && jobsList.length !== 0 ? (
        <Stack spacing={2}>
          <Pagination
            shape='rounded'
            size='large'
            className='pagination'
            count={count}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      ) : null}
    </main>
  );
};

const mapStateToProps = (state) => ({
  jobsList: selectJobs(state),
});

const mapDispatchToProps = {
  setJobs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);