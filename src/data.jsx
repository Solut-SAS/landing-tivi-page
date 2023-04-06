import heroImage from "../src/assets/img/hero/mainImage.jpg";
import logoImage from "../src/assets/header/logo2.png";
//https://storyset.com/illustration/social-life/amico
import sectionOneImage from "../src/assets/about-us/sectionOne/social-life.svg";
//https://storyset.com/illustration/manage-money/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
import sectionSecondImage from "../src/assets/about-us/sectionTwo/financial.png";

export const header = {
  logo: logoImage,
  btnText: "Login",
};

export const nav = [
  { name: "Inicio", href: "/" },
  { name: "¿Quiénes somos?", href: "/" },
  { name: "Precios", href: "/" },
  { name: "Contacto", href: "/" },
];

export const hero = {
  title: "Disfruta de más tiempo libre",
  subtitle: "Dile adiós a las tareas difíciles y repetitivas en tu condominio.",
  btnFirstModule: "Módulo 1",
  btnSecondModule: "Módulo 2",
  image: heroImage,
};

export const sections = {
  sectionOne: {
    pretitle: "Información principal",
    title: "Espacio para título",
    subtitle:
      "Espacio para agregar una descripción más detallada asociada a la sección",
    btnLink: "Saber más",
    image: sectionOneImage,
  },
  sectionTwo: {
    pretitle: "Información principal",
    title: "Espacio para título",
    subtitle:
      "Espacio para agregar una descripción más detallada asociada a la sección",
    btnLink: "Saber más",
    image: sectionSecondImage,
  },
};
