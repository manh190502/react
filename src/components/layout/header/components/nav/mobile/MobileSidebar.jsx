import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

const MobileSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/job-list", label: "Find Job" },
    { path: "/companies-list", label: "Company" },
    { path: "/candidates-list", label: "Candidate" },
    { path: "/blog-list", label: "Blog" },
  ];

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}

      <Sidebar>
        <Menu>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => navigate(item.path)}
              className={pathname === item.path ? "menu-active-link" : ""}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>

      <SidebarFooter />
    </div>
  );
};

export default MobileSidebar;
