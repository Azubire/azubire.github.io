import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, setIsDarkMode, isDarkMode }) => {
  return (
    <div className={`${isDarkMode ? "bg-dark text-white" : "bg-light"}`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
