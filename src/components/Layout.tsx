import { FC } from "react";
import NavBar from "./navBar/NavBar";
import "../index.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main">
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
