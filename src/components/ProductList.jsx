import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const timeout = setTimeout(() => {
      source.cancel("Request timed out");
    }, 3000);

    axios
      .get("https://dummyjson.com/products", {
        cancelToken: source.token,
      })
      .then((res) => {
        clearTimeout(timeout);
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (axios.isCancel(err)) {
          setError("⏱️ Request timed out. Please try again.");
        } else {
          setError("❌ Failed to load products.");
        }
      });

    return () => {
      clearTimeout(timeout);
      source.cancel();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">🔥 Trending Products</h1>

      {loading && (
        <div className="text-center text-lg font-medium text-gray-700">Loading products...</div>
      )}

      {error && (
        <div className="text-center text-red-500 font-semibold text-lg">{error}</div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-indigo-600">{product.title}</h2>
              <p className="text-gray-700 mt-2 text-sm">{product.description}</p>
              <div className="mt-4 text-lg font-bold text-green-600">₹ {product.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
