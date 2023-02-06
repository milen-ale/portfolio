import React, { useState }from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {

  return (
    <section id='experiance'>
      <h5> What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className=' experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='exprience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4> HTML</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4> CSS</h4>
                <small className='text-light'>Exprianced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4>JavaScript </h4>
                <small className='text-lights'>Exprienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4>BootStrap</h4>
                <small className='text-lights'>Exprienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4>Talwind</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* The End Of FRONTEND */}
        <div className=' experience_backend'>
          <h3>Backend Development</h3>
          <div className='exprience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4> Ruby </h4>
                <small className='text-light'>Intermidate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4> Rails</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='text-lights' />
              <div>
                <h4>MySQL </h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
