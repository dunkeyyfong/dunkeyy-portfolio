import { ThemeSwitcher } from "@/components/theme-switcher";
import Banner from "./_components/banner";
import Introduction from "./_components/introduction";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="md:flex md:justify-between">
          <div>
            <Heading as="h1" size="xl" mt={8}>
              Nguyen Trong Phong
            </Heading>
            <Text>Indie developer ( Rapper / Developer )</Text>
          </div>
          <div className="flex justify-center mt-7">
            <Image
              w={32}
              h={32}
              rounded={100}
              border={"2px solid white"}
              shadow={"lg"}
              src="/avt.jpeg"
              alt="Nguyen Trong Phong"
            />
          </div>
        </div>
        <Introduction />
      </div>
    </>
  );
};

export default MainPage;
