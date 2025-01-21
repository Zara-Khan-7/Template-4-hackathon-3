'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../../sanity/lib/client'; // Adjust path as needed
import Header from './Header';
import Footer from './Footer';

type Product = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
};

const ProductDetailPage = () => {
  const { id } = useParams(); // Extract product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `
        *[_type == "product" && _id == "${id}"] {
          _id,
          name,
          "imageUrl": image.asset->url,
          price,
          description,
          discountPercentage,
          stockLevel
        }[0] // Get the first matching product
      `;

      try {
        const productData = await client.fetch(query);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
        toast.error('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto p-4">
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative w-full h-[500px] bg-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mt-4">
              ${product.price}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-lg text-red-500 mt-2">
                Discount: {product.discountPercentage}%
              </p>
            )}
            <p className="text-md text-gray-500 mt-2">
              Stock Level: {product.stockLevel}
            </p>

            <button
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-all"
              onClick={() => toast.success(`${product.name} added to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
