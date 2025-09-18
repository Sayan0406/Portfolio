'use client'

// All external libraries have been removed to ensure the code is self-contained.
// This file now uses only native HTML elements and Tailwind CSS for styling.

// --- Inlined Data and Config for a Single, Self-Contained File ---

const siteConfig = {
  profile: {
    name: 'Sayan Sarkar',
    title: 'Software Engineer',
    avatar: '/assets/avatar.png',
    location: 'Durgapur, West Bengal',
    experience: '7th Semester Undergraduate',
    about:
      'Highly skilled Computer Science undergraduate (7th Semester) specializing in full-stack development with a strong academic foundation in Data Structures, Algorithms, and Core CS principles. Proficient in React.js, Node.js, Python, and MongoDB.\n\nDemonstrated ability to conceptualize, develop, and deploy scalable solutions. Key experience includes integrating AI/ML models with modern web frameworks. Specific projects like the Plant Disease Detection system (utilizing a CNN model) and the GlobalTranslate AI API (integrated with Hugging Face transformers) validate this proficiency.\n\nSeeking a Software Engineering Intern/Fresher opportunity to immediately contribute strong technical skills to real-world projects. I am eager to collaborate with dynamic teams to drive optimized, enterprise-grade software outcomes upon graduation.',
    keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'AI/ML', 'Python'],
  },
  contact: {
    email: 'sayanpokai2004@gmail.com',
    phone: '7029122273',
    emailHref: 'mailto:sayanpokai2004@gmail.com',
    phoneHref: 'tel:+917029122273',
  },
  social: {
    githubHandle: 'Sayan-Sarkar',
    githubHref: 'https://github.com/Sayan0406',
    twitterHandle: 'john-doe',
    twitterHref: '#',
    linkedinHandle: 'Sayan-Sarkar',
    linkedinHref: 'https://www.linkedin.com/in/sayan-sarkar-724007306/',
  },
}

const projectsData = [
  {
    title: 'Plant Disease Detection',
    description: 'A machine learning application that identifies plant diseases from images using a trained model.',
    href: 'https://github.com/Sayan0406/Plant-disease-detection',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and experience with a modern design.',
    href: 'https://github.com/Sayan0406/Portfolio',
  },
]

const worksData = [
  {
    company: 'Job-Seeking Fresher',
    deliverable: [
      'Actively seeking a challenging Software Engineer or Frontend Developer role where I can immediately apply my expertise in React, JavaScript, and web development.',
      'Eager to contribute to innovative projects and collaborate with dynamic teams to drive impactful solutions.',
    ],
  },
]

const CNLink = ({ href, children, ...props }) => (
  <a href={href} className="text-blue-500 hover:underline" {...props}>
    {children}
  </a>
)

// --- End of Inlined Data ---

const About = () => {
  const socials = [
    {
      name: 'GitHub',
      href: siteConfig.social.githubHref,
    },
    {
      name: 'LinkedIn',
      href: siteConfig.social.linkedinHref,
    },
  ]
  return (
    <div className="p-6 space-y-4 border border-gray-subtel rounded-md h-fit lg:sticky lg:top-24">
      <h1 className="text-xl font-bold text-brand">
        {siteConfig.profile.name}
      </h1>
      <p className="text-sm text-brand-secondary">
        {siteConfig.profile.about}
      </p>
      <div className="flex justify-center">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-2 border border-gray-subtel rounded-full hover:bg-brand-muted"
            aria-label={item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col justify-between space-y-4">
        <div className="flex justify-between space-x-2">
          <div className="flex flex-col flex-1">
            <h3 className="text-sm font-bold leading-short text-brand">
              {siteConfig.profile.experience}
            </h3>
            <p className="text-xs text-brand-secondary">Experience</p>
          </div>
          <div className="flex flex-col flex-1 text-right">
            <h3 className="text-sm font-bold leading-short text-brand">
              {siteConfig.profile.location}
            </h3>
            <p className="text-xs text-brand-secondary">Location</p>
          </div>
        </div>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Hire me
        </a>
      </div>
    </div>
  )
}

const TechStack = () => {
  const items = [
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Next' },
    { name: 'Tailwind' },
    { name: 'Python' },
    { name: 'C++' },
    { name: 'CSS3' },
    { name: 'Node' },
    { name: 'Express' },
    { name: 'MongoDB' },
    { name: 'AWS' },
    { name: 'Google Cloud' },
    { name: 'OpenAI' },
    { name: 'Git' },
  ]

  return (
    <div id="home" className="space-y-4">
      <h2 className="text-xl font-bold text-brand">Tech Stack</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((tech, index) => (
          <button
            key={index}
            className="px-4 py-2 border border-gray-subtel rounded-md hover:bg-brand-muted text-brand"
          >
            {tech.name}
          </button>
        ))}
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="space-y-4">
      <h2 className="text-2xl font-bold text-brand">Projects</h2>
      {projectsData.map((project, index) => (
        <CNLink
          key={index}
          href={project.href}
          className="block p-6 transition-colors duration-200 ease-in-out border border-gray-subtel rounded-md hover:bg-brand-muted"
          target="_blank"
        >
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-left text-brand">
              {project.title}
            </h3>
            <p className="text-sm text-brand-secondary">
              {project.description}
            </p>
          </div>
        </CNLink>
      ))}
    </div>
  )
}

const Work = () => {
  return (
    <div id="work" className="space-y-4">
      <h2 className="text-2xl font-bold text-brand">Work</h2>
      <div className="p-6 space-y-5 border border-gray-subtel rounded-lg">
        {worksData.map((work, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="flex items-end justify-between">
              <h3 className="text-lg font-bold text-left text-brand">
                {work.company}
              </h3>
            </div>
            <ul className="ml-4 text-sm list-disc text-brand-secondary">
              {work.deliverable.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div id="contact" className="mb-10 space-y-6">
      <h2 className="text-xl font-bold md:text-2xl text-brand">Contact</h2>
      <div className="p-5 border border-gray-subtel rounded-lg">
        <p className="text-sm text-center text-brand-secondary">
          Best way to reach me is through:{' '}
          <CNLink
            href={siteConfig.contact.emailHref}
          >
            {siteConfig.contact.email}
          </CNLink>
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="w-full lg:w-2/5">
        <About />
      </div>
      <div className="flex-1 space-y-10">
        <TechStack />
        <Projects />
        <Work />
        <Contact />
      </div>
    </div>
  )
}
