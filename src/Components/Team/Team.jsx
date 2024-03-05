import React from 'react';
import './Team.css';
import Hover2 from './Hover/Hover2';

import Navbar from '../Navbar/Navbar';
import Footer2 from '../Footer/Footer2';

import teamMembers from './Assets/all_product';

const Team = () => {
  return (
    <>
      <div className='team-container'>
        <h1 >Meet Our Teams</h1>

        <section className="team-section">
          <h2>Logistics</h2>
          <div className="card-container">
            {teamMembers.Logistics.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>Marketing</h2>
          <div className="card-container">
            {teamMembers.Marketing.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <h2>Finance</h2>
          <div className="card-container">
            {teamMembers.Finance.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <h2>Social Media Management</h2>
          <div className="card-container">
            {teamMembers['Social Media Management'].map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <h2>Publicity</h2>
          <div className="card-container">
            {teamMembers.Publicity.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <h2>Events</h2>
          <div className="card-container">
            {teamMembers.Events.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <h2>Content</h2>
          <div className="card-container">
            {teamMembers.Content.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <h2>HR</h2>
          <div className="card-container">
            {teamMembers.HR.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <h2>Design</h2>
          <div className="card-container">
            {teamMembers.Design.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <h2>WEb Development</h2>
          <div className="card-container">
            {teamMembers.web.map((item) => (
              <div key={item.id} className="card-wrapper">
                <Hover2 id={item.id} name={item.name} role={item.roll} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
   
  );
};
  


export default Team;