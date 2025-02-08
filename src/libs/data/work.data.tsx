export type Work = {
  company: string
  deliverable: string[]
  fromDate: string
  toDate: string
}

export const worksData: Work[] = [
  {
    company: 'Alme Crops Ltd.',
    deliverable: [
      'Developed a web application to manage the company’s inventory and sales.',
      'Implemented a barcode scanner to track inventory.',
    ],
    fromDate: '2022-04',
    toDate: 'Present',
  },
  {
    company: 'NextGen Software',
    deliverable: [
      'Developed a full-stack e-commerce platform with product listings, cart functionality, and payment integration.',
      'Integrated a payment gateway for seamless transactions.',
    ],
    fromDate: '2017-08',
    toDate: '2019-02',
  },
]
