import Header from "../includes/Header";
import Footer from "../includes/Footer";


const Layout = ({children,setIsDarkMode,isDarkMode}) => {

    return (
      <div
        className={`${
          isDarkMode ? "bg-dark text-white" : "bg-light"
        }`}
      >
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        {children}
        <Footer />
      </div>
    );
}

export default Layout;