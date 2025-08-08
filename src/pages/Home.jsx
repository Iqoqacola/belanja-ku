import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(bgimage1.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-left lg:mr-96">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">BelanjaKu</h1>
            <p className="mb-5">
              Temukan berbagai kebutuhan harian dengan harga terbaik, pengiriman
              cepat, dan pengalaman belanja yang menyenangkan langsung dari
              rumah.
            </p>
            <Link className="mr-4" to={"/product"}>
              <button className="btn bg-primary-color border-border-color">
                Lihat Produk
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(bgimage2.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content flex flex-wrap gap-8">
          <div>
            {/*  */}
            <h1 className="mb-3 text-3xl font-bold">🔹Produk Lengkap</h1>
            <p className="mb-3 pl-4">
              Temukan ribuan produk kebutuhan sehari-hari — mulai dari makanan,
              alat rumah tangga, hingga elektronik. Semua ada di satu tempat.
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className="mb-3 text-3xl font-bold">🔹Harga Terjangkau</h1>
            <p className="mb-3 pl-4">
              Nikmati promo eksklusif dan diskon menarik setiap hari. Belanja
              hemat jadi makin mudah!
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className="mb-3 text-3xl font-bold">
              🔹Pengiriman Cepat & Aman
            </h1>
            <p className="mb-3 pl-4">
              Barang dikirim cepat dan aman langsung ke rumahmu. Didukung oleh
              mitra logistik terpercaya.
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className="mb-3 text-3xl font-bold">🔹Mudah Digunakan</h1>
            <p className="mb-3 pl-4">
              Desain aplikasi yang simpel dan ramah pengguna. Cocok untuk semua
              kalangan, dari muda hingga dewasa.
            </p>
            {/*  */}
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(bgimage3.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-right lg:ml-96">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Yuk Belanja Sekarang!</h1>

            <p className="mb-5">
              Ayo mulai belanja sekarang juga di <span>BelanjaKu</span> dan
              rasakan kemudahannya! Nikmati pengalaman belanja online yang
              praktis, hemat, dan menyenangkan.
            </p>
            <Link className="mr-4" to={"/login"}>
              <button className="btn bg-primary-color border-border-color">
                Mulai Belanja Sekarang{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
