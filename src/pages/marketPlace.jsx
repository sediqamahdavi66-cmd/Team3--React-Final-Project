
import { useState } from "react";
import Layout from "../components/layouts/Layout";

const healthyDietImage = "/images/healthy-diet.jpg";

const products = [
  {
    id: "243598234",
    name: "Healthy Diet",
    category: "Food",
    provider: "Food Panda",
    cardPrice: 5,
    price: 10,
    discount: 0,
    logo: "foodpanda",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    id: "877712",
    name: "Healthy Diet",
    category: "Food",
    provider: "Grab Food",
    cardPrice: 10,
    price: 9,
    discount: 5,
    logo: "grab",
    description:
      "Music is something that every person has his or ing that every person has his or",
  },
  {
    id: "0134729",
    name: "Healthy Diet",
    category: "Food",
    provider: "Deliveroo",
    cardPrice: 15,
    price: 25,
    discount: 9,
    logo: "deliveroo",
    description:
      "Different people have different taste, and various types of music.",
  },
  {
    id: "113213",
    name: "Healthy Diet",
    category: "Food",
    provider: "Minimalist",
    cardPrice: 20,
    price: 15,
    discount: 5,
    logo: "minimalist",
    description:
      "Different people have different taste, and various types of music.",
  },
  {
    id: "634729",
    name: "Healthy Diet",
    category: "Food",
    provider: "Food Panda",
    price: 25,
    discount: 7,
    logo: "foodpanda",
    description: "",
  },
  {
    id: "634729",
    name: "Healthy Diet",
    category: "Food",
    provider: "Food Panda",
    price: 20,
    discount: 0,
    logo: "foodpanda",
    description: "",
  },
];

function ProviderLogo({ provider }) {
  const styles = {
    "Food Panda": "text-pink-600",
    "Grab Food": "text-green-600",
    Deliveroo: "text-cyan-600",
    Minimalist: "text-gray-600",
  };

  return (
    <span className={`text-xs font-semibold ${styles[provider] || "text-gray-600"}`}>
      {provider}
    </span>
  );
}

function MarketPlace() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <main className="min-w-0 space-y-5 bg-gray-50 p-4 md:p-6">
        {/* Page heading and search */}
        <section className="rounded-xl bg-white p-4 md:p-5">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h1 className="text-lg font-semibold text-[#394d70]">
              Search Marketplaces and order what you need
            </h1>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search healthy diet..."
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none focus:border-cyan-400 sm:max-w-52"
            />
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.slice(0, 4).map((product, index) => (
              <article
                key={`${product.id}-${index}`}
                className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
              >
                <img
                  src={healthyDietImage}
                  alt="Healthy Diet meal"
                  className="h-36 w-full shrink-0 object-cover"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />

                <div className="flex flex-1 flex-col p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h2 className="text-sm font-semibold text-[#394d70]">
                      {product.name}
                    </h2>
                    <ProviderLogo provider={product.provider} />
                  </div>

                  <p className="mb-3 min-h-[60px] text-xs leading-5 text-[#71819f]">
                    {product.description}
                  </p>

                  <div className="mb-3 mt-auto">
                    <span className="text-sm font-semibold text-[#394d70]">
                      {product.cardPrice} RM
                    </span>
                  </div>

                  <button
                    type="button"
                    className="h-9 w-full shrink-0 rounded-md bg-gradient-to-r from-[#f00083] to-[#a817b9] px-3 text-xs font-medium text-white transition hover:opacity-90"
                  >
                    Buy Now
                  </button>
                </div>
              </article>
            ))}

            {filteredProducts.length === 0 && (
              <p className="col-span-full py-5 text-center text-xs text-gray-500">
                No products found.
              </p>
            )}
          </div>
        </section>

        {/* Results table */}
        <section className="overflow-hidden rounded-xl bg-white p-4 md:p-5">
          <h2 className="mb-4 text-base font-semibold text-[#394d70]">
            Other results for healthy diet search
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[620px] table-auto text-left text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-[#71819f]">
                  <th className="px-3 py-3 text-xs font-semibold">Name</th>
                  <th className="px-3 py-3 text-xs font-semibold">Category</th>
                  <th className="px-3 py-3 text-xs font-semibold">Service By</th>
                  <th className="px-3 py-3 text-xs font-semibold">Discount</th>
                  <th className="px-3 py-3 text-xs font-semibold">Price</th>
                  <th className="px-3 py-3 text-xs font-semibold">ID</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={`${product.id}-row-${index}`}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={healthyDietImage}
                          alt=""
                          className="h-8 w-8 shrink-0 rounded-md object-cover"
                          onError={(event) => {
                            event.currentTarget.style.visibility = "hidden";
                          }}
                        />
                        <span className="whitespace-nowrap font-medium text-[#394d70]">
                          {product.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-3 py-3 text-[#71819f]">
                      {product.category}
                    </td>

                    <td className="px-3 py-3">
                      <ProviderLogo provider={product.provider} />
                    </td>

                    <td className="px-3 py-3 text-[#71819f]">
                      {product.discount}
                    </td>

                    <td className="px-3 py-3 font-medium text-[#394d70]">
                      {product.price} RM
                    </td>

                    <td className="px-3 py-3 text-[#71819f]">
                      {product.id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default MarketPlace;
