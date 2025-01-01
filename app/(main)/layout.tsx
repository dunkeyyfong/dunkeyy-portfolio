const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={`m-auto xl:min-w-[480px]`}>{children}</div>;
};

export default MainLayout;
