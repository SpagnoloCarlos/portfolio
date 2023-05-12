import Header from "@/components/organisms/Header/Header.component";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
