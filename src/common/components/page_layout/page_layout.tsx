import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

interface PageLayoutProps {
  children?: JSX.Element;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default PageLayout;
