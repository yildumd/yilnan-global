import Container from './Container';

const Section = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;