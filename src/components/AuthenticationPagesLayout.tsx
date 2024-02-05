import { PageLayout } from "./layouts";

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};

const AuthenticationPagesLayout: React.FC<ChildrenProps> = ({
  children,
}: ChildrenProps) => {
  return (
    <PageLayout>
      <div className="relative h-full w-full flex flex-row">
        <img
          src="/assets/mg-background.png"
          alt="mg-background"
          className="relative h-full w-1/2 aspect-auto"
        />
        <div className="relative h-full w-1/2 bg-white flex items-center justify-center">
          {children}
        </div>
      </div>
    </PageLayout>
  );
};

export default AuthenticationPagesLayout;
