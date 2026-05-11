import Link from "next/link";
import Container from "../../Container";
import FooterList from "./FooterList";
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-sm text-gray-300">
      <Container>
        <div className="flex flex-col justify-between gap-10 py-10 md:flex-row">
          <FooterList>
            <Link href="/">Anasayfa</Link>
            <Link href="/allbooks">Tum kitaplar</Link>
            <Link href="/users">Uyeler</Link>
          </FooterList>

          <div className="w-full md:w-1/3">
            <h3 className="text-base font-bold text-white">Adakan Library Core</h3>
            <p className="mt-3 leading-6">
              Kisisel, okul veya kucuk kurumlar icin modern kutuphane yonetim
              sistemi. Adakan Software tarafindan urun cekirdegi olarak
              gelistirilmektedir.
            </p>
            <p className="mt-4">
              &copy; {new Date().getFullYear()} Adakan Software. Tum haklari
              saklidir.
            </p>
          </div>

          <FooterList>
            <h3 className="text-base font-bold text-white">Iletisim</h3>
            <Link href="mailto:adakansoftware@gmail.com" className="flex gap-2">
              <AiOutlineMail size={20} />
              adakansoftware@gmail.com
            </Link>
            <Link href="tel:+905399416521" className="flex gap-2">
              <AiOutlinePhone size={20} />
              5399416521
            </Link>
            <Link
              href="https://github.com/adakansoftware/librarysystemorhomebyadakansoftware"
              target="_blank"
              className="flex gap-2"
            >
              <AiOutlineGithub size={20} />
              GitHub
            </Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
