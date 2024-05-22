// Definir los tipos de las props
interface HeroProps {
  title: string;
  text: string;
  page: string;
}

// Definir el componente usando React.FC
const Hero: React.FC<HeroProps> = ({ title, text, page }) => {
  return (
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><a href="/">Home</a></li>
            <li>{page}</li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
