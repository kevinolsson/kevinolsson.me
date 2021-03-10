import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ExperienceBlock } from 'components/ExperienceBlock/ExperienceBlock';

export const ResumeExperience = () => (
  <div>
    <Typography gutterBottom variant="h4">
      Experience
    </Typography>
    <ExperienceBlock
      avatar={`${process.env.PUBLIC_URL}/images/pamind.jpg`}
      company="Påmind AB"
      position="Front-end developer"
      details={['Stockholm, Sweden', 'May 2019 - present']}
    >
      <ul>
        <li>
          Developing Påmind's front-end using React, Redux, and Redux Saga.
        </li>
        <li>Writing tests using Jest and Enzyme</li>
        <li>
          Crafting UI components and molding the design system using
          Storybook.js
        </li>
        <li>
          A bunch of other cool stuff. I'm learning new things day by day!{' '}
          <span role="img" aria-label="emojis to show appreciation">
            💯🙌🏻
          </span>
        </li>
      </ul>
    </ExperienceBlock>

    <ExperienceBlock
      avatar={`${process.env.PUBLIC_URL}/images/comeon.jpg`}
      company={'ComeOn!\nStockholm AB'}
      position="UX Designer &amp; Front-end developer"
      details={['Stockholm, Sweden', 'March 2017 - May 2019']}
    >
      <ul>
        <li>
          Designed and developed prototypes through either code (HTML, Sass, JS)
          or design tools (Proto.io, Principle, Sketch).{' '}
        </li>
        <li>
          Assigned as the key product owner of ComeOn’s promotions platform
          which involved: collaborating with brand teams to determine
          requirements, creating roadmaps to cover short and long term plans for
          platform, developing new while maintaining legacy promotions,
          coordinating with external agencies to get work done for said
          platform, and introducing new workflows which eventually led to
          leading a now dedicated in-house team for said platform.
        </li>
        <li>
          Worked extensively with Wordpress and Advanced Custom Fields for
          developing the back-end of ComeOn's online promotions platform.
        </li>
      </ul>
    </ExperienceBlock>
    <ExperienceBlock
      avatar={`${process.env.PUBLIC_URL}/images/kirigami.jpg`}
      company={'Kirigami\nDesign Company'}
      position="Lead Designer &amp; Co-founder"
      details={['Manila, Philippines', 'August 2015 - March 2017']}
    >
      <ul>
        <li>
          Co-founded Kirigami to introduce world class designs and product
          development to the Filipino Community.
        </li>
        <li>
          Built and maintained strong local and international client
          relationships.
        </li>
        <li>Interpreted and negotiated requirements with stakeholders.</li>
        <li>
          Oversaw the entire design process (which included but was not limited
          to: research, wireframe, prototype, and high-fidelity design.)
          Developed interface portions of projects. Communicated and presented
          progress to stakeholders and managed their expectations towards
          projects.
        </li>
      </ul>
    </ExperienceBlock>
    <ExperienceBlock
      avatar={`${process.env.PUBLIC_URL}/images/pandora.jpg`}
      company="Pandora Security Labs"
      position="Designer &amp; Developer Intern"
      details={['Ortigas, Philippines', ' March 2014 – June 2014']}
    >
      <ul>
        <li>
          Designed and developed websites using either Magento or Wordpress as a
          CMS.
        </li>
        <li>Supported management in daily operating tasks.</li>
      </ul>
    </ExperienceBlock>
  </div>
);
