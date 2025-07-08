import SidebarMenu from "../Components/Fragments/sidebarMenu";
import CardLayout from "../Components/Layouts/CardLayout";
import ContentLayout from "../Components/Layouts/ContentLayout";

const MainPage = () => {
  return (
    <>
      <SidebarMenu />
      <div className="bg-black min-h-screen flex flex-col sm:flex-col">
        <div className="lg:fixed md:fixed sm:p-4 h-full md:bottom-3 lg:bottom-3">
          <CardLayout />
        </div>
        <ContentLayout/>
      </div>
    </>
  );
};

export default MainPage;
