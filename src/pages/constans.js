import { nanoid } from 'nanoid';

export const {REACT_APP_API_KEY} = process.env;
export const API_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
export const modifiedData =(data) =>([
  ...data.map((job) => ({ 
    ...job, 
    pictures: job.pictures.map((picture) => ({
      id: nanoid(), 
      url: picture, 
    })),
    benefits: job.benefits.map((benefit) => ({
      id: nanoid(),
      item: benefit,
    })),
    employment_type: job.employment_type.map((type) => ({
      id: nanoid(),
      type:type,
    })),
  })),
]); // We did this only because we don't have unique keys for these elements