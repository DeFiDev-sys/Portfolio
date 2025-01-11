import React from "react";
import Header from "./Header/Header";

type LayoutProps = React.PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
