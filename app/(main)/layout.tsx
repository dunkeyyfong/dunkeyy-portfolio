import { Heading } from "./_components/heading";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-2 xl:min-w-[480px] xl:mx-9 mx-4">
      <Heading />
      {children}
    </div>
  );
};

export default MainLayout;
