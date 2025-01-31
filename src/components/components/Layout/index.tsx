import React from "react";

type LayoutProps = React.PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
