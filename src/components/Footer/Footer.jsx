import { BsGithub, BsInstagram } from "react-icons/bs";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterLinks}>
        <div className={styles.LinksContact}>
          <h1 className={styles.HeadText}>
            <span>Contate</span>-nos
          </h1>
          <p>musicamente7@gmail.com</p>
          <p>@musicamente7</p>
        </div>
        <div className={styles.LinksLogo}>
          <h1 className={styles.LogoName}>
            <span>Musica</span>Mente
          </h1>
          <p>
            &quot;A música é o vínculo que une a vida do espírito à vida dos
            sentidos. A melodia é a vida sensível da poesia.&quot;
          </p>
          <div className={styles.borderline}></div>
          <div className={styles.LinksIcons}>
            <a
              href="https://github.com/Biganao/musicamente-page"
              target="blank"
            >
              <BsGithub />
            </a>
            <a href="https://www.instagram.com/musicamente7/" target="blank">
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className={styles.LinksWork}>
          <h1 className={styles.HeadText}>
            <span>Seções</span> Anteriores
          </h1>
          <p>
            <a href="#aboutus">Sobre</a>
          </p>
          <p>
            <a href="#dynamics">Recursos</a>
          </p>
          <p>
            <a href="#preregister">Explore</a>
          </p>
        </div>
      </div>
      <div className={styles.Copyright}>
        <p>2023 &copy; MusicaMente. Todos os Direitos Reservados</p>
      </div>
    </div>
  );
};

export default Footer;
