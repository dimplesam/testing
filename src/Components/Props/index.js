import React from "react";
import ProductCard from "../../Shared/ProductCard";
import productImage from "../../Assets/test.jpg";
const Props = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      products: [
        {
          id: 101,
          name: "Smartphone",
          price: 599.99,
          description: "A high-end smartphone with advanced features.",
          imageUrl: productImage,
        },
        {
          id: 102,
          name: "Laptop",
          price: 1299.99,
          description: "A powerful laptop for both work and entertainment.",
          imageUrl: "https://example.com/laptop.jpg",
        },
        {
          id: 103,
          name: "Headphones",
          price: 99.99,
          description:
            "Over-ear headphones with noise-cancellation technology.",
          imageUrl: "https://example.com/headphones.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Clothing",
      products: [
        {
          id: 201,
          name: "T-Shirt",
          price: 19.99,
          description: "Comfortable cotton t-shirt for everyday wear.",
          imageUrl: "https://example.com/tshirt.jpg",
        },
        {
          id: 202,
          name: "Jeans",
          price: 49.99,
          description: "Classic denim jeans for a casual look.",
          imageUrl: "https://example.com/jeans.jpg",
        },
        {
          id: 203,
          name: "Hoodie",
          price: 39.99,
          description: "Warm and cozy hoodie for chilly days.",
          imageUrl: "https://example.com/hoodie.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Books",
      products: [
        {
          id: 301,
          name: "Fantasy Novel",
          price: 14.99,
          description: "An epic tale of adventure and magic.",
          imageUrl: "https://example.com/fantasy.jpg",
        },
        {
          id: 302,
          name: "Self-Help Book",
          price: 9.99,
          description: "Guide to personal growth and achieving success.",
          imageUrl: "https://example.com/self-help.jpg",
        },
        {
          id: 303,
          name: "Cookbook",
          price: 24.99,
          description: "Delicious recipes for every occasion.",
          imageUrl: "https://example.com/cookbook.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Toys",
      products: [
        {
          id: 401,
          name: "Action Figure",
          price: 12.99,
          description: "Collectible action figure of your favorite character.",
          imageUrl: "https://example.com/action-figure.jpg",
        },
        {
          id: 402,
          name: "Building Blocks",
          price: 29.99,
          description: "Colorful building blocks for creative play.",
          imageUrl: "https://example.com/building-blocks.jpg",
        },
        {
          id: 403,
          name: "Board Game",
          price: 34.99,
          description: "Fun board game for family game nights.",
          imageUrl: "https://example.com/board-game.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Home Appliances",
      products: [
        {
          id: 501,
          name: "Coffee Maker",
          price: 79.99,
          description: "Automatic coffee maker for brewing fresh coffee.",
          imageUrl: "https://example.com/coffee-maker.jpg",
        },
        {
          id: 502,
          name: "Vacuum Cleaner",
          price: 149.99,
          description: "Powerful vacuum cleaner for hassle-free cleaning.",
          imageUrl: "https://example.com/vacuum-cleaner.jpg",
        },
        {
          id: 503,
          name: "Toaster",
          price: 29.99,
          description: "Stylish toaster for perfectly toasted bread.",
          imageUrl: "https://example.com/toaster.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Sports & Outdoors",
      products: [
        {
          id: 601,
          name: "Tennis Racket",
          price: 89.99,
          description: "High-quality tennis racket for competitive play.",
          imageUrl: "https://example.com/tennis-racket.jpg",
        },
        {
          id: 602,
          name: "Camping Tent",
          price: 199.99,
          description: "Spacious camping tent for outdoor adventures.",
          imageUrl: "https://example.com/camping-tent.jpg",
        },
        {
          id: 603,
          name: "Bicycle",
          price: 299.99,
          description: "Durable bicycle for leisurely rides or commuting.",
          imageUrl: "https://example.com/bicycle.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Beauty & Personal Care",
      products: [
        {
          id: 701,
          name: "Skincare Set",
          price: 49.99,
          description: "Complete skincare set for radiant skin.",
          imageUrl: "https://example.com/skincare-set.jpg",
        },
        {
          id: 702,
          name: "Hair Dryer",
          price: 34.99,
          description: "Professional hair dryer for salon-quality results.",
          imageUrl: "https://example.com/hair-dryer.jpg",
        },
        {
          id: 703,
          name: "Perfume",
          price: 59.99,
          description: "Elegant perfume with a captivating fragrance.",
          imageUrl: "https://example.com/perfume.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Furniture",
      products: [
        {
          id: 801,
          name: "Sofa",
          price: 499.99,
          description: "Comfortable sofa for lounging and entertaining.",
          imageUrl: "https://example.com/sofa.jpg",
        },
        {
          id: 802,
          name: "Dining Table",
          price: 299.99,
          description: "Sturdy dining table for family meals and gatherings.",
          imageUrl: "https://example.com/dining-table.jpg",
        },
        {
          id: 803,
          name: "Bookshelf",
          price: 129.99,
          description: "Modern bookshelf for organizing books and decor.",
          imageUrl: "https://example.com/bookshelf.jpg",
        },
      ],
    },
  ];

  console.log(categories);

  return (
    <div className="flex flex-col gap-2 p-2 bg-gray-200">
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col gap-1">
          <p className="text-center text-xl font-bold">{category.name}</p>
          <div className="grid grid-cols-3 gap-5 p-1">
            {/* {category.products.map((item) => (
              <div className="flex flex-col p-2 bg-white gap-2">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            ))} */}
            {category.products.map((item) => (
              <React.Fragment key={item.id}>
                <ProductCard p={item} />
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}

      {/* {arr.map((i) => (
        <ProductCard data={i} />
      ))} */}
    </div>
  );
};

export default Props;
