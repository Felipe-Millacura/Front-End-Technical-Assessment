import { useEffect, useState } from "react";
import { fetchProducts, type Product } from "../api/products";
import { getProductsPage } from "../api/getProductsPage";
import Navbar from "../components/navBar";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageContent, setPageContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const [productsData, pageData] = await Promise.all([
          fetchProducts(),
          getProductsPage(),
        ]);

        setProducts(productsData);
        setPageContent(pageData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
          <div className="animate-pulse text-slate-500 text-lg">
            Loading products...
          </div>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navbar />
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {pageContent?.title || "Products"}
          </h1>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            {pageContent?.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </div>
        {products.length === 0 && (
          <p className="text-center text-slate-500">No products available.</p>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6
                         shadow-sm hover:shadow-xl transition-all duration-300
                         hover:-translate-y-1"
            >
              <div className="h-40 rounded-xl overflow-hidden mb-5 group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="font-semibold text-lg text-slate-800 group-hover:text-blue-600 transition">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
