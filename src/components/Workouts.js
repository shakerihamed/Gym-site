import React from 'react';
//import data
import { workouts } from '../data';
//import workouts slider
import WorkoutSlider from '../components/WorkoutSlider';

const Workouts = () => {

  const {title , icon} = workouts;
  return <section className='section'>

    <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0' 
    data-aos='fade-up' data-aos-daley='200'>
      <img src={icon} alt='icon'/>
      <h2 className='h2 section-title'>{title}<span className='text-primary-200'>.</span></h2>

    </div>
    <div data-aos='fade-up' data-aos-daley='300'>
      <WorkoutSlider />
    </div>

  </section>;
};

export default Workouts;
