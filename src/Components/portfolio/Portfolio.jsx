import React from 'react';
import './portfolio.css';
import img from '../../assets/portfolio1.png';
import img1 from '../../assets/portfolio2.png';
import img2 from '../../assets/portfolio3.png';
import img3 from '../../assets/movies.PNG';
import img4 from '../../assets/eldrado.png';
import img5 from '../../assets/budget_app.png';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>
      <div className='container portfolio_container'>
        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img} alt='' />
          </div>
          <h3>Weather App </h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/' className='btn'>
              Github
            </a>
            <a
              href='https://632491962139ab5fda8d33c1--helpful-gelato-7d23f6.netlify.app/'
              className='btn btn-primary'
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img1} alt='' />
          </div>
          <h3>Space Travlers Hub</h3>
          <div className='protfolio_item-cta'>
            <a href='https://github.com/' className='btn'>
              Github
            </a>
            <a
              href='https://delightful-starship-b08d3e.netlify.app//'
              className='btn btn-primary'
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img2} alt='' />
          </div>
          <h3>Calculator</h3>
          <div className='protfolio_item-cta'>
            <a href='https://github.com/' className='btn'>
              Github
            </a>
            <a
              href='https://milencalculator.netlify.app//'
              className='btn btn-primary'
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img3} alt='' />
          </div>
          <h3>Movie Hub</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/' className='btn'>
              Github
            </a>
            <a
              href='https://milen-ale.github.io/movieHub/'
              className='btn btn-primary'
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img4} alt='' />
          </div>
          <h3>Eldrado car rentals</h3>
          <div className='portfolio_item-cta'>
            <a
              href='https://github.com/milen-ale/ElDorado-Frontend'
              className='btn'
            >
              Github
            </a>
            <a
              href='https://eldorado-rentals.netlify.com/'
              className='btn btn-primary'
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img5} alt='' />
          </div>
          <h3>Budget App</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/milen-ale/Budget_app' className='btn'>
              Github
            </a>
            <a
              href='https://budget-app-fz3u.onrender.com/'
              className='btn btn-primary'
              target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
