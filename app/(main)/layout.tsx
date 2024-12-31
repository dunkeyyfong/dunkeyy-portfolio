import { Heading } from "@/components/heading";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto xl:min-w-[480px]">
      <Heading />
      {children}
    </div>
  );
};

export default MainLayout;
