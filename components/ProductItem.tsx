import Link from 'next/link';
import React from 'react';

function ProductItem({ product }: any) {
  return (
    <div className="card">
      <Link href={`product/${product.slug}`}>
        <img
          className="rounded shadow object-cover h-64 w-full"
          src={product.image}
          alt={product.name}
        />
        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-lg">{product.name}</h2>
          <p className="mb-2">{product.brand}</p>
          <p>${product.price}</p>
          <button className="primary-button">Add to cart</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
