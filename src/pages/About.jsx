import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="hero bg-background-color min-h-screen">
          <div className="hero-content lg:mr-120 text-neutral-content text-left">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold mb-4 text-text-dark">
                Tentang Kami
              </h1>
              <p className="text-lg text-text-dark">
                Selamat datang di{" "}
                <span className="font-semibold">Belanjaku</span>! Kami adalah
                platform <br />
                e-commerce yang menyediakan berbagai produk berkualitas dengan
                harga terjangkau.
              </p>
            </div>
          </div>
          <div className="hero-content lg:ml-140 hidden lg:block">
            <div>
              <div
                style={{
                  backgroundColor: "transparent",
                  backgroundImage: "url('/tentangkami.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "400px",
                  height: "400px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="hero bg-background-color2 min-h-screen">
          <div className="hero-content lg:mr-140 hidden lg:block">
            <div>
              <div
                style={{
                  backgroundColor: "transparent",
                  backgroundImage: "url(visimisi.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  width: "400px",
                  height: "400px",
                  backgroundBlendMode: "multiply",
                }}
              />
            </div>
          </div>
          <div className="hero-content text-white text-right lg:ml-120">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4 text-text-dark">
                Visi & Misi
              </h2>
              <p className="text-lg text-text-dark">
                Kami percaya bahwa belanja online harus praktis dan aman. Kami
                terus berinovasi untuk memberikan layanan terbaik mulai dari
                pemilihan produk, pemesanan, hingga pengiriman.
              </p>
            </div>
          </div>
        </div>

        <div className="hero bg-background-color min-h-screen">
          <div className="hero-content lg:mr-120 text-neutral-content text-left">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4 text-text-dark">
                Hubungi Kami
              </h2>
              <p className="text-lg text-text-dark">
                Apakah kamu memiliki pertanyaan atau keluhan? Tim CS kami siap
                membantu!
              </p>
              <ul className="mt-4 text-text-dark">
                <li>
                  📧 Email: <span className="font-medium">cs@xxxx.com</span>
                </li>
                <li>
                  📱 WhatsApp:{" "}
                  <span className="font-medium">08xx-xxxx-xxxx</span>
                </li>
                <li>🕘 Jam Operasional: Senin – Jumat, 09.00 – 17.00 WIB</li>
              </ul>
            </div>
          </div>
          <div className="hero-content lg:ml-140 hidden lg:block">
            <div>
              <div
                className="sm:hidden"
                style={{
                  backgroundColor: "transparent",
                  backgroundImage: "url('/hubungikami.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "400px",
                  height: "400px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
