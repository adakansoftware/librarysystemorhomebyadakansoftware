import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../../public/images/banner-img.png";
import bgImage from "../../../../public/images/bg.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container 2xl:max-w-5xl xl:max-w-5xl lg:max-w-5xl md:max-w-3xl">
        <div>
          <div>
            <div className="banner-text-area">
              <h2>Adakan Library Core</h2>
              <h3 className="text-2xl text-white">
                Modern kutuphane yonetim sistemi
              </h3>
              <p>
                Kisisel, okul veya kucuk kurum kutuphaneleri icin kitap,
                yazar, kategori, yayinevi ve kullanici operasyonlarini sade bir
                panelde yoneten profesyonel urun cekirdegi.
              </p>
              <ul className="banner-links">
                <li>
                  <Link
                    href="https://github.com/adakansoftware/librarysystemorhomebyadakansoftware"
                    target="_blank"
                  >
                    <span>GitHub</span>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:adakansoftware@gmail.com">
                    <span>Iletisim</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="banner-image">
              <Image src={bannerImg} alt="Adakan Library Core" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
