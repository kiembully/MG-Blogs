import { useEffect } from "react";

type PageLayoutProps = {
  is404?: boolean;
  children: JSX.Element;
};

const PageLayout: React.FC<PageLayoutProps> = ({
  is404,
  children,
}: PageLayoutProps) => {
  useEffect(() => {
    document.title = is404 ? "404 not found" : "MG Blogs";
  }, []);

  return <>{children}</>;
};

export default PageLayout;
