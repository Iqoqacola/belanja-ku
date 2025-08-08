import { useEffect, useState } from "react";
import Card from "../components/Fragments/Card";
import Navbar from "../components/Navbar";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const jsonData = await res.json();
      setProduct(jsonData);
    };
    getData();
  }, []);

  // Filter produk berdasarkan input search
  const filteredProduct = product.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar
        isProduct={true}
        isLogin={false}
        searchValue={search}
        onSearchChange={setSearch}
      />{" "}
      <div id="product" className="pt-14">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content py-18">
            <div className="flex flex-wrap gap-12">
              {filteredProduct.length > 0 ? (
                filteredProduct.map((product) => (
                  <Card
                    key={product.id}
                    title={
                      product.title.length > 50
                        ? product.title.substring(0, 50) + " ..."
                        : product.title
                    }
                    desc={
                      product.description.length > 150
                        ? product.description.substring(0, 150) + " ..."
                        : product.description
                    }
                    img={product.image}
                    price={product.price}
                  />
                ))
              ) : (
                <p className="text-center w-full text-white text-xl">
                  Produk Tidak Ditemukan!!!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
