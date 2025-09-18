export type Work = {
  company: string
  deliverable: string[]
  fromDate: string
  toDate: string
}

export const worksData: Work[] = [
  {
    company: 'Seeking a Role',
    deliverable: [
      'Actively seeking a challenging Software Engineer or Frontend Developer role where I can immediately apply my expertise in React, JavaScript, and web development.',
      'Eager to contribute to innovative projects and collaborate with dynamic teams to drive impactful solutions.',
    ],
    // fromDate: '#',
    // toDate: '#',
  },
  // {
  //   company: 'NextGen Software',
  //   deliverable: [
  //     'Developed a full-stack e-commerce platform with product listings, cart functionality, and payment integration.',
  //     'Integrated a payment gateway for seamless transactions.',
  //   ],
  //   fromDate: '2017-08',
  //   toDate: '2019-02',
  // },
]
