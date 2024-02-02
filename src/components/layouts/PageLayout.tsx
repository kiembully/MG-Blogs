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

  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center bg-sky-100">
      {children}
    </div>
  );
};

export default PageLayout;
