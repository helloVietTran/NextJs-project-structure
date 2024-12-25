import React from "react";
import { Layout } from "antd";
import { usePathname } from "next/navigation";
import "./MainHeader.scss";

const { Header } = Layout;

function MainHeader() {
  const pathname = usePathname();
  

  return (
    <Header>
   
    </Header>
  );
}

export default MainHeader;
