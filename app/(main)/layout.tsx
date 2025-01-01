import { Heading } from "@/components/heading";
import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`m-auto xl:min-w-[480px] ${mPlus.className}`}>
      <Heading />
      {children}
    </div>
  );
};

export default MainLayout;
