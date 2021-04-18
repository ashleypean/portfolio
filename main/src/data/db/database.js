import Mock from '../mock';

const database = {
  information: {
    name: 'Ashley Pean',
    aboutContent: 'I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
    email: 'pean.ashley@gmail.com',
    freelanceStatus: 'Available',
    socialLinks: {
      twitter: 'https://twitter.com/ashleypeandev',
      linkedin: 'https://www.linkedin.com/in/ashley-pean/',
      github: 'https://github.com/ashleypean',
    },
    brandImageLight: '/images/lightLogo.png',
    brandImageDark: 'images/darkLogo.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf',
  },
  services: [
    {
      title: 'Web Design',
      icon: 'color-pallet',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
    },
    {
      title: 'Web Development',
      icon: 'code',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
    },
    {
      title: 'Mobile Application',
      icon: 'mobile',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
    },
  ],
  reviews: [
    {
      id: 1,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company',
      },
    },
    {
      id: 2,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
      author: {
        name: 'Susan Yost',
        designation: 'Client',
      },
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client',
      },
    },
  ],
  skills: {
    frontend: [
      {
        title: 'Bootstrap',
        logo: 'devicon-bootstrap-plain colored',
      },
      {
        title: 'D3',
        logo: 'devicon-d3js-plain colored',
      },
      {
        title: 'React',
        logo: 'devicon-react-original colored',
      },
      {
        title: 'Redis',
        logo: 'devicon-redis-plain colored',
      },
      {
        title: 'Redux',
        logo: 'devicon-redux-original colored',
      },
      {
        title: 'Sass',
        logo: 'devicon-sass-original colored',
      },
    ],
    languages: [
      {
        title: 'TypeScript',
        logo: 'devicon-typescript-plain colored',
      },
      {
        title: 'JavaScript',
        logo: 'devicon-javascript-plain colored',
      },
    ],
    backend: [
      {
        title: 'Express',
        logo: 'devicon-express-original colored',
      },
      {
        title: 'GraphQL',
        logo: 'devicon-graphql-plain colored',
      },
      {
        title: 'MongoDB',
        logo: 'devicon-mongodb-plain colored',
      },
      {
        title: 'Next.js',
        logo: 'devicon-nextjs-original colored',
      },
      {
        title: 'Node.js',
        logo: 'devicon-nodejs-plain colored',
      },
      {
        title: 'Postgres',
        logo: 'devicon-postgresql-plain colored',
      },
      {
        title: 'Sequelize',
        logo: 'devicon-sequelize-plain colored',
      },
    ],
    tools: [
      {
        title: 'AWS',
        logo: 'devicon-amazonwebservices-original colored',
      },
      {
        title: 'Docker',
        logo: 'devicon-docker-plain colored',
      },
      {
        title: 'Figma',
        logo: 'devicon-figma-plain colored',
      },
      {
        title: 'Webpack',
        logo: 'devicon-webpack-plain colored',
      },
    ],
  },
  portfolios: [
    {
      id: 1,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
    },
    {
      id: 2,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
    },
    {
      id: 3,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
    },
    {
      id: 4,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
    },
    {
      id: 5,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
    },
    {
      id: 6,
      title: 'Pendrive',
      subtitle: 'Free pendrive mockup design.',
      imageUrl: '/images/portfolio-image-6.jpg',
      largeImageUrl: ['/images/portfolio-image-6-lg.jpg'],
    },
    {
      id: 7,
      title: 'Beautiful Pendrive',
      subtitle: 'Pendrive with great design & flexible.',
      imageUrl: '/images/portfolio-image-7.jpg',
      largeImageUrl: ['/images/portfolio-image-7-lg.jpg'],
      url: 'https://twitter.com',
    },
    {
      id: 8,
      title: 'Sticker',
      subtitle: 'Clip sticker mockup design.',
      imageUrl: '/images/portfolio-image-8.jpg',
      largeImageUrl: ['/images/portfolio-image-8-lg.jpg'],
    },
    {
      id: 9,
      title: 'Packet',
      subtitle: 'Beautiful packet & product design.',
      imageUrl: '/images/portfolio-image-9.jpg',
      largeImageUrl: ['/images/portfolio-image-9-lg.jpg'],
    },
    {
      id: 10,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
    },
    {
      id: 11,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
    },
    {
      id: 12,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
    },
    {
      id: 13,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
    },
    {
      id: 14,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
    },
    {
      id: 15,
      title: 'Pendrive',
      subtitle: 'Free pendrive mockup design.',
      imageUrl: '/images/portfolio-image-6.jpg',
      largeImageUrl: ['/images/portfolio-image-6-lg.jpg'],
    },
    {
      id: 16,
      title: 'Beautiful Pendrive',
      subtitle: 'Pendrive with great design & flexible.',
      imageUrl: '/images/portfolio-image-7.jpg',
      largeImageUrl: ['/images/portfolio-image-7-lg.jpg'],
      url: 'https://twitter.com',
    },
    {
      id: 17,
      title: 'Sticker',
      subtitle: 'Clip sticker mockup design.',
      imageUrl: '/images/portfolio-image-8.jpg',
      largeImageUrl: ['/images/portfolio-image-8-lg.jpg'],
    },
    {
      id: 18,
      title: 'Packet',
      subtitle: 'Beautiful packet & product design.',
      imageUrl: '/images/portfolio-image-9.jpg',
      largeImageUrl: ['/images/portfolio-image-9-lg.jpg'],
    },
    {
      id: 19,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
    },
    {
      id: 20,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
    },
    {
      id: 21,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
    },
    {
      id: 22,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
    },
    {
      id: 23,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: '2021 - 2021',
        position: 'Volunteer Frontend Web Developer',
        company: 'Black Valley',
      },
      {
        id: 2,
        year: '2021 - Present',
        position: 'Frontend Developer Intern',
        company: 'Mark43',
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2016 - 2016',
        graduation: 'Associates in Economics',
        university: 'Palm Beach State University',
      },
      {
        id: 2,
        year: '2020 - 2021',
        graduation: 'Bacher of Arts - Psychology',
        university: 'Florida Atlantic Unversity',
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
  ],
  contactInfo: {
    emailAddress: ['pean.ashley@gmail.com'],
    socialLinks: {
      Twitter: 'https://twitter.com/ashleypeandev',
      LinkedIn: 'https://www.linkedin.com/in/ashley-pean/',
      Github: 'https://github.com/ashleypean',
    },
  },
};

Mock.onGet('/api/information').reply(() => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/services').reply(() => {
  const response = database.services;
  return [200, response];
});

Mock.onGet('/api/reviews').reply(() => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/skills').reply(() => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/portfolios').reply(() => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet('/api/experience').reply(() => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/blog').reply(() => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply(() => {
  const response = database.contactInfo;
  return [200, response];
});
