// const data1 = {
//   title: "Employee Comments Report 2020",
//   subTitle: "Prepared for: Sample Company",
//   body: [
//     {
//       heading: "OVERALL",
//       subHeadings: ["% Agreement", "% Disagreement"],
//     },
//     {
//       heading: 2019,
//       subHeadings: ["% Agreement"],
//     },
//     {
//       heading: "LENGTH OF SERVICE",
//       subHeadings: [
//         "Less than one year",
//         "One year to less than two years",
//         "Two years to less than five years",
//         "Five years to less than ten years",
//         "Ten years or more",
//       ],
//       response: [2, 3, 8, 200, 45],
//     },
//     {
//       heading: "GENERATION",
//       subHeadings: [
//         "Generation Z\n(Born after 1997)",
//         "The Millennial Generation\n(Born 1981 to 1997)",
//         "Generation X\n(Born 1965 to 1980)",
//         "The Baby Boomer Generation\n(Born 1946 to 1964)",
//         "The Silent Generation\n(Born 1928 to 1945)",
//         "The Greatest Generation\n(Born before 1928)",
//       ],
//       response: [2, 3, 56, 8, 200, 45],
//     },
//     {
//       heading: "GENDER",
//       subHeadings: ["Female", "Male"],
//       response: [50, 60],
//     },
//     {
//       heading: "ETHNIC BACKGROUND",
//       subHeadings: [
//         "Black or African-American",
//         "Asian",
//         "White or Caucasian",
//         "Hispanic or Latino",
//         "Native American\n(not Pacific Islander)",
//         "Pacific Islander",
//         "Bi-Racial or Multi-Racial",
//       ],
//       response: [2, 3, 56, 55, 8, 200, 45],
//     },
//     {
//       heading: "STATUS",
//       subHeadings: ["Full-Time", "Part-Time"],
//       response: [50, 60],
//     },
//     {
//       heading: "JOB ROLE",
//       subHeadings: [
//         "Administrative/Clerical",
//         "Executive/Partner",
//         "Manager/Supervisor",
//         "Production/Service",
//         "Professional",
//         "Other",
//       ],
//       response: [2, 3, 56, 8, 200, 45],
//     },
//     {
//       heading: "DEPARTMENT",
//       subHeadings: [
//         "Customer Service/Care/Support",
//         "Development/Fundraising",
//         "Finance/Accounting",
//         "Human Resources",
//         "Information Technology",
//         "Legal",
//         "Marketing/Advertising",
//         "Maintenance/Operations",
//         "Production",
//         "Research & Development",
//         "Sales/Retail/Business Development",
//         "Other",
//       ],
//       response: [2, 3, 56, 8, 200, 45, 2, 3, 56, 8, 200, 45],
//     },
//   ],
//   totalResponses: 578,
//   data: [
//     {
//       heading: "",
//       questions: [
//         {
//           questions: "",
//           results: [],
//         },
//       ],
//     },
//   ],
// };

// const filters = [
//     {
//         heading: "gender",
//         subHeadings: "female",
//         headingId: "g1",
//         subHeadingId: "g1_fe"
//     },
//     {
//         heading: "lenght of service",
//         subHeadings: "female"
//     }
// ]

const attributes = [
  //   {
  //     title: "OVERALL",
  //     id: "OVERALL1",
  //     options: [
  //       { title: "% Agreement", id: "OVERALL11" },
  //       { title: "% Disagreement", id: "OVERALL12" },
  //     ],
  //   },
  {
    title: "LENGTH OF SERVICE",
    id: "SERVICE1",
    options: [
      {
        title: "less than one year",
        id: "SERVICE11",
      },
      {
        title: "one year and less than two year",
        id: "SERVICE12",
      },
      {
        title: "two year less than 5 year ",
        id: "SERVICE13",
      },
      {
        title: "five year less than 10 year",
        id: "SERVICE14",
      },
      {
        title: "more than 10 year",
        id: "SERVICE15",
      },
    ],
  },
  {
    title: "GENERATION",
    id: "GENERATION1",
    options: [
      { title: "Generation Z\n(Born after 1997)", id: "GENERATION11" },
      {
        title: "The Millennial Generation\n(Born 1981 to 1997)",
        id: "GENERATION12",
      },
      { title: "Generation X\n(Born 1965 to 1980)", id: "GENERATION13" },
      {
        title: "The Baby Boomer Generation\n(Born 1946 to 1964)",
        id: "GENERATION14",
      },
      {
        title: "The Silent Generation\n(Born 1928 to 1945)",
        id: "GENERATION15",
      },
      {
        title: "The Greatest Generation\n(Born before 1928)",
        id: "GENERATION16",
      },
    ],
  },
  {
    title: "GENDER",
    id: "GENDER1",
    options: [
      { title: "Female", id: "GENDER11" },
      {
        title: "Male",
        id: "GENDER12",
      },
    ],
  },
  {
    title: "ETHNIC BACKGROUND",
    id: "ETHNIC1",
    options: [
      { title: "Black or African-American", id: "ETHNIC11" },
      { title: "Asian", id: "ETHNIC12" },
      { title: "White or Caucasian", id: "ETHNIC13" },
      { title: "Hispanic or Latino", id: "ETHNIC14" },
      { title: "Native American\n(not Pacific Islander)", id: "ETHNIC15" },
      { title: "Pacific Islander", id: "ETHNIC16" },
      { title: "Bi-Racial or Multi-Racial", id: "ETHNIC17" },
    ],
  },
  {
    title: "STATUS",
    id: "STATUS1",
    options: [
      { title: "Full-Time", id: "STATUS11" },
      {
        title: "Part-Time",
        id: "STATUS12",
      },
    ],
  },
];

const colData = {
  title: "Employee Comments Report 2020",
  subTitle: "Prepared for: Sample Company",
  // filteredTitle: undefined,
  attributes,
};

const topics = [
  {
    title: "LEADERSHIP AND PLANNING",
    id: "LEADERSHIP1",
    questions: [
      {
        title: "I understand the long-term strategy of this organization",
        id: "LEADERSHIP11",
      },
      {
        title: "I have confidence in the leadership of this organization",
        id: "LEADERSHIP12",
      },
      {
        title:
          "The leaders of this organization care about their employees' well being",
        id: "LEADERSHIP13",
      },
      {
        title: "Senior leaders live the core values of the organization",
        id: "LEADERSHIP14",
      },
      {
        title: "There is adequate planning of departmental objectives",
        id: "LEADERSHIP15",
      },
      {
        title: "There is adequate follow-through of departmental objectives",
        id: "LEADERSHIP16",
      },
      {
        title:
          "The leaders of this organization are open to input from employees",
        id: "LEADERSHIP17",
      },
    ],
  },
];

module.exports = {
  colData,
  topics,
};
