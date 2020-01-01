import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExperienceBlock from 'components/ExperienceBlock/ExperienceBlock';

const ResumeExperience = () => (
  <div>
    <Typography gutterBottom variant="h4">
      Experience
    </Typography>
    <ExperienceBlock
      avatar={`${process.env.PUBLIC_URL}/images/pamind.jpg`}
      company="Påmind AB"
      position="Front-end developer"
      details={['Stockholm, Sweden', 'May 2019 - present']}
      description="Having a blast @ Påmind! 💯🙌🏻 Getting to build user interfaces with an amazing group of individuals is a dream come true!"
    />
    <ExperienceBlock
      avatar={`${process.env.PUBLIC_URL}/images/comeon.jpg`}
      company={'ComeOn!\nStockholm AB'}
      position="UX Designer &amp; Front-end developer"
      details={['Stockholm, Sweden', 'March 2017 - May 2019']}
      description="Collaborated closely with designers and developers to come up with solutions to various problems. Developed prototypes through either code (HTML, Sass, JS) or design tools (Proto.io, Principle, Sketch). Took ownership of ComeOn!’s promotions platform which involved: working with brand teams to determine requirements, creating roadmaps to cover short and long term plans for platform, developing new while maintaining legacy promotions, coordinating with external agencies to get work done for said platform, and introducing new workflows which eventually led to (briefly) leading the now dedicated in-house team for said platform."
    />
    <ExperienceBlock
      avatar={`${process.env.PUBLIC_URL}/images/kirigami.jpg`}
      company={'Kirigami\nDesign Company'}
      position="Lead Designer &amp; Co-founder"
      details={['Manila, Philippines', 'August 2015 - March 2017']}
      description="Co-founded Kirigami. Built and maintained strong local and international client relationships. Interpreted and negotiated requirements with stakeholders. Oversaw the entire design process (which included but was not limited to: research, wireframe, prototype, and high-fidelity design.) Developed interface portions of projects. Communicated and presented progress to stakeholders and managed their expectations towards projects."
    />
    <ExperienceBlock
      avatar={`${process.env.PUBLIC_URL}/images/pandora.jpg`}
      company="Pandora Security Labs"
      position="Designer &amp; Developer Intern"
      details={['Ortigas, Philippines', ' March 2014 – June 2014']}
      description="Designed and developed websites using Magento and Wordpress."
    />
  </div>
);


export default ResumeExperience;
