import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";

const MainLayouPage = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default MainLayouPage;
