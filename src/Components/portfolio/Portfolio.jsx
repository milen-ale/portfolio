import React from 'react';
import './portfolio.css';
import img from '../../assets/portfolio1.png';
import img1 from '../../assets/portfolio2.png';
import img2 from '../../assets/portfolio3.png';
import img3 from '../../assets/movies.PNG';
import img4 from '../../assets/eldrado.png';
import img5 from '../../assets/budget_app.png';

const Portfolio = () => {
  const styles = {
    width: '100%',
    height: '100%',
    borderRadius: '4%'
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>
      <div className='container portfolio_container'>
        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img4} alt='img' style={styles} />
          </div>
          <h3>Eldrado car rentals</h3>
          <div>
            <p className='text-light'>
              El Dorado Front-end is a luxury car rental application where the
              user can register new accounts, log in and reserve a set of
              different cars. It is built and connected using two repositories:
              The back-end (Rails) and Front-end (React/Redux).
            </p>
          </div>
          <div className='protfolio_item-cta a'>
            <a
              href='https://github.com/milen-ale/ElDorado-Frontend'
              className='btn  btns'
            >
              <b> Github</b>
            </a>
            <a
              href='https://eldorado-rentals.netlify.com/'
              className='btn btn-primary  btns'
              target='_blank'
            >
              <b> Live Demo</b>
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img} alt='' style={styles} />
          </div>
          <h3>Air Pollution Metrics </h3>
          <p className='text-light'>
            An air pollution metrics app is a mobile or web-based application
            that provides information about the air quality in a specific
            location,It is built using React, Redux and Css.
          </p>
          <p></p>
          <div className='protfolio_item-cta a'>
            <a href='https://github.com/' className='btn'>
              <b> Github</b>
            </a>
            <a
              href='https://632491962139ab5fda8d33c1--helpful-gelato-7d23f6.netlify.app/'
              className='btn btn-primary'
              target='_blank'
            >
              <b> Live Demo</b>
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img1} alt='' />
          </div>
          <h3>Space Travlers Hub</h3>
          <p className='text-light'>
            {' '}
            This web application provides commercial and scientific space travel
            services. The application allows users to book rockets and join
            selected space missions.{' '}
          </p>
          <div className='protfolio_item-cta a'>
            <a href='https://github.com/' className='btn'>
              <b> Github</b>
            </a>
            <a
              href='https://delightful-starship-b08d3e.netlify.app//'
              className='btn btn-primary'
              target='_blank'
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img2} alt='' />
          </div>
          <h3>Mekedonia Charity</h3>
          <p className='text-light'>
            {' '}
            In this capstone project, I created a website about the charity by
            using Html, CSS and JavaScript. It is a dynamic two-page responsive
            website.
          </p>
          <div className='protfolio_item-cta a'>
            <a href='https://github.com/milen-ale/Capstone' className='btn'>
              <b> Github</b>
            </a>
            <a
              href='https://milen-ale.github.io/Capstone/'
              className='btn btn-primary'
              target='_blank'
            >
              <b> Live Demo</b>
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img3} alt='' />
          </div>
          <h3>Movie Hub</h3>
          <p className='text-light'>
            This website presents the best Tv shows. We have used TVmaze API to
            get the movie content. we have used Javascript, HTML and CSS to
            build the website, It gives user the ability to browse through
            movies and characters of the series.
          </p>
          <div className='protfolio_item-cta a'>
            <a href='https://github.com/' className='btn'>
              <b> Github</b>
            </a>
            <a
              href='https://milen-ale.github.io/movieHub/'
              className='btn btn-primary'
              target='_blank'
            >
              <b> Live Demo</b>
            </a>
          </div>
        </article>

        <article className='portolio_item'>
          <div className='portfolio_item-image'>
            <img src={img5} alt='' />
          </div>
          <h3>Budget App</h3>
          <p className='text-light'>
            {' '}
            Budget-App is a mobile web application where you can manage your
            budget and have a list of transactions associated with a category so
            that you can see how much money you spend and on what.
          </p>
          <div className='protfolio_item-cta'>
            <a href='https://github.com/milen-ale/Budget_app' className='btn'>
              <b> Github</b>
            </a>
            <a
              href='https://budget-app-fz3u.onrender.com/'
              className='btn btn-primary'
              target='_blank'
            >
              <b>Live Demo</b>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
