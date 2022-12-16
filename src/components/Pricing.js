import React from 'react';
//import data
import {pricing} from '../data';
//import planlist
import Planlist from '../components/PlanList'

const Pricing = () => {
  const {title , icon , plans} = pricing ;
  return <section className='section'>
    <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
      data-aos='fade-up'
      date-aos-offset='200'
       data-aos-delay='200'
       >
      <img src={icon} alt="icon" />
      <h2 className='h2'>{title}<span className='text-primary-200'>.</span></h2>
    </div>
    <Planlist plans={plans} />
  </section>;
};

export default Pricing;
