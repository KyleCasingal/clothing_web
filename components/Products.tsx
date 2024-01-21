/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Black cropped shirt",
    href: "#",
    price: "$48",
    imageSrc:
      "https://i.pinimg.com/564x/cd/82/fd/cd82fd59f34a213cd16f9b46147700bf.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Black pullover",
    href: "#",
    price: "$35",
    imageSrc:
      "https://i.pinimg.com/736x/1f/38/cc/1f38cc7fffe3cdcb828fcaa2eb5a1e6d.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "baggy jeans",
    href: "#",
    price: "$89",
    imageSrc:
      "https://i.pinimg.com/736x/38/ed/4c/38ed4c8bc84fd79fec2cfe586df5b8a7.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "black knitted sweater",
    href: "#",
    price: "$35",
    imageSrc:
      "https://i.pinimg.com/564x/1f/80/43/1f8043b4384348df65301d75bcdedcd6.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Products() {
  return (
    <div className="text-black dark:text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl  text-black dark:text-white pb-5">Products</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full max-h-64 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-gray-300">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 dark:text-gray-400">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
