import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Resume from '../components/Resume';

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [information, setInformation] = useState('');
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    document.title = 'Ashley Pean - Resume';
    axios.get('/api/skills')
      .then((response) => {
        console.log('skills', skills);
        setSkills(response.data);
      });
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/experience')
      .then((response) => {
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      });
  }, []);

  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Skills" />
          <div className="mi-skills">
            {Object.keys(skills).map((category) => (
              <div>
                <h4>{category.toUpperCase()}</h4>
                <div className="skills-options">
                  {skills[category].map((skill) => (
                    <div className="skill-block">
                      <i className={`skill-icon-image  ${skill.logo}`} />
                      <p className="skill-title">{skill.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />

          <div className="mi-resume-download">
            <a
              target="__blank"
              href={information.cvfile}
              className="mi-button"
              style={{ margin: 'auto' }}
            >
              Download CV
            </a>
          </div>

          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30" />
          <Smalltitle title="Education" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
