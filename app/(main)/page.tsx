import { ThemeSwitcher } from "@/components/theme-switcher";
import Banner from "./_components/banner";
import Introduction from "./_components/introduction";
import { Text } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 max-w-2xl">
        <Introduction />
      </div>
    </>
  );
};

export default MainPage;
