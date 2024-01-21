const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Made with high quality cotton, that was combed to form a fine cloth.",
  },
  { name: "Fit", description: 'Oversized with cropped boxy fit."' },
  { name: "Weave", description: "Jersey knit type weave" },
  { name: "Stitching", description: "Double needle stitching and seams for added durability" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function About() {
  return (
    <div className="text-black dark:text-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-400">
            A perfect blend of comfort and durability. Crafted from high-quality
            combed cotton and polyester, this midweight shirt offers a soft feel
            with long lasting resilience.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-200">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://www.alexanderwang.com/dw/image/v2/BCCC_PRD/on/demandware.static/-/Sites-master/default/dw87ac7863/hi-res/6CC3231009001D.jpg?sw=720"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 max-h-64"
          />
          <img
            src="https://www.alexanderwang.com/dw/image/v2/BCCC_PRD/on/demandware.static/-/Sites-master/default/dw818ba2f9/hi-res/6CC3231009001F.jpg?sw=720"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 max-h-64"
          />
          <img
            src="https://www.alexanderwang.com/dw/image/v2/BCCC_PRD/on/demandware.static/-/Sites-master/default/dw05a2ae22/hi-res/6CC3231009001B.jpg?sw=340"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 max-h-64"
          />
          <img
            src="https://www.alexanderwang.com/dw/image/v2/BCCC_PRD/on/demandware.static/-/Sites-master/default/dwe603af07/hi-res/6CC3231009001A.jpg?sw=720"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 max-h-64"
          />
        </div>
      </div>
    </div>
  );
}
