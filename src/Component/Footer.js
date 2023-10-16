import Documentation from "./Figma/Documentation";

const Footer = () => {
  return (
    <>
      <div className="flex items-center">
        <Documentation />
        <p>Help</p>
      </div>
      <div className="flex items-center">
        <Documentation />
        <p>Documentation</p>
      </div>
      <button>5</button>
      <button>10</button>
      <button>15</button>
    </>
  );
};

export default Footer;
