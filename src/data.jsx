import heroImage from "../src/assets/img/hero/mainImage.jpg";
import logoImage from "../src/assets/header/logo2.png";
//https://storyset.com/illustration/social-life/amico
import sectionOneImage from "../src/assets/about-us/sectionOne/social-life.svg";
//https://storyset.com/illustration/manage-money/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
import sectionSecondImage from "../src/assets/about-us/sectionTwo/financial.png";
import footerContactImage from "../src/assets/footer/contact.jpg";
import facebook from "../src/assets/footer/facebook.png";
import instagram from "../src/assets/footer/instagram.png";
import whatsapp from "../src/assets/footer/whatsapp.png";

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

export const pricing = {
  title: "Planes y detalles",
  cards: [
    {
      title: "Básico",
      services: [
        { name: "Almacenamiento financiero" },
        { name: "Seguimiento a bitácora" },
        { name: "Acceso y control de invitados" },
      ],
      price: "$9.99",
      btnText: "Consultar precio",
      delay: 300,
    },
    {
      title: "Estándar",
      services: [
        { name: "Almacenamiento financiero" },
        { name: "Seguimiento a bitácora" },
        { name: "Acceso y control de invitados" },
      ],
      price: "$19.99",
      btnText: "Consultar precio",
      delay: 600,
    },
    {
      title: "Premium",
      services: [
        { name: "Almacenamiento financiero" },
        { name: "Seguimiento a bitácora" },
        { name: "Acceso y control de invitados" },
      ],
      price: "$29.99",
      btnText: "Consultar precio",
      delay: 900,
    },
  ],
};

export const footer = {
  title: "A la distancia de un clic",
  subtitle: "Puedes encontrarnos a través de nuestras redes sociales:",
  image: footerContactImage,
  social: [
    { icon: facebook, href: "/" },
    { icon: instagram, href: "/" },
    { icon: whatsapp, href: "/" },
  ],
};
