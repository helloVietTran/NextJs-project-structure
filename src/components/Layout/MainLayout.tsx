import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

const { Content } = Layout;

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div></div>
      ) : (
        <Layout>
          <MainHeader />
          <Content>
            {children}
          </Content>
          <MainFooter />
        </Layout>
      )}
    </div>
  );
}

export default MainLayout;
