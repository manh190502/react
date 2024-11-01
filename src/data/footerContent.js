const footerContent = [
  {
    id: 1,
    title: "For Candidates",
    menuList: [
      { name: "Browse Jobs", route: "/job-list" },
      { name: "Browse Categories", route: "/job-list" },
      { name: "Candidate Dashboard", route: "/candidates-dashboard/dashboard" },
      { name: "CV Manager", route: "/candidates-dashboard/cv-manager" },
    ],
  },
  {
    id: 2,
    title: "For Employers",
    menuList: [
      {
        name: "Browse Candidates",
        route: "/candidates-list",
      },
      { name: "Employer Dashboard", route: "/employers-dashboard/dashboard" },
      { name: "Add Job", route: "/employers-dashboard/post-jobs" },
      { name: "All Applicants", route: "/employers-dashboard/all-applicants" },
    ],
  },
  {
    id: 3,
    title: "About Us",
    menuList: [
      { name: "About Us", route: "/about" },
      { name: "Terms Page", route: "/terms" },
      { name: "Blog", route: "/blog-list-v1" },
      { name: "Contact", route: "/contact" },
    ],
  },
  {
    id: 4,
    title: "Helpful Resources",
    menuList: [
      { name: "Site Map", route: "/" },
      { name: "Terms of Use", route: "/terms" },
      { name: "Privacy Center", route: "/" },
      { name: "Security Center", route: "/" },
      { name: "Accessibility Center", route: "/" },
    ],
  },
];
export default footerContent;
