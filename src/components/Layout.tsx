import { FC } from "react";
import SideBar from "./sideBar/Sidebar";
import "../index.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">{children}</div>
    </div>
  );
};

export default Layout;
