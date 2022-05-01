interface PageLayoutProps {
  children?: JSX.Element;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
export default PageLayout;
