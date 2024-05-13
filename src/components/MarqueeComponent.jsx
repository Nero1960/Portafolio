import Marquee from "react-fast-marquee";
import bootstrapImg from "../public/bootstrap.png";
import css3Img from "../public/css-3.png";
import gitIcon from "../public/git-icon.svg";
import jsImg from "../public/js.png";
import html5Img from "../public/html-5.png";
import reactImg from "../public/react-2.svg";
import nodeJsImg from "../public/node-js.png";
import tailwindImg from "../public/Tailwind.png";
import sassImg from "../public/sass-1.svg";
import typescriptImg from "../public/typescript.svg";
import mysqlImg from "../public/mysql-3.svg";

const images = [
  { src: html5Img, alt: "HTML5" },
  { src: css3Img, alt: "CSS3" },
  { src: jsImg, alt: "JavaScript" },
  { src: typescriptImg, alt: "TypeScript" },
  { src: bootstrapImg, alt: "Bootstrap" },
  { src: sassImg, alt: "Sass" },
  { src: tailwindImg, alt: "Tailwind CSS" },
  { src: mysqlImg, alt: "MySQL" },
  { src: reactImg, alt: "React" },
  { src: nodeJsImg, alt: "Node.js" },
  { src: gitIcon, alt: "Git" },
];

const MarqueeComponent = () => {
  return (
    <div className="my-10 relative -z-10">
      <Marquee speed={70} autoFill={false}>
        {images.map((image, index) => (
          <div className="mx-5" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width={40}
              height={40}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
