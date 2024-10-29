import { Link, useLocation } from "react-router-dom";

const HeaderNavContent = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/job-list", label: "Find Jobs" },
    { path: "/company-list", label: "Employers" },
    { path: "/candidates-list", label: "Candidates" },
    { path: "/blog-list", label: "Blogs" },
  ];
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={isActive(item.path) ? "current" : ""}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
