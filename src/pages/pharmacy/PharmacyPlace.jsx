
import { useMemo, useState } from "react";
import Layout from "../../components/layouts/Layout";

const medicineImage = "/images/pill1.PNG";

const pharmacies = {
  caring: {
    name: "Carry Medical",
    image: "/images/caring-pharmacy.jfif",
    initials: "CM",
    color: "bg-blue-100 text-blue-700",
  },
  pool: {
    name: "Pool Medical",
    image: "images/ok-pharma.jfif",
    initials: "PM",
    color: "bg-green-100 text-green-700",
  },
  ok: {
    name: "OK Pharmacy",
    image: "/images/ok-pharma.jfif",
    initials: "OK",
    color: "bg-purple-100 text-purple-700",
  },
  hamza: {
    name: "Hamza Pharma",
    image: "/images/hamza-pharmacy.jfif",
    initials: "HP",
    color: "bg-orange-100 text-orange-700",
  },
  hilton: {
    name: "Hilton Medical",
    image: "/images/hilton-medical.jfif",
    initials: "HM",
    color: "bg-pink-100 text-pink-700",
  },
  hinucion: {
    name: "Hinucion Pharma",
    image: "/images/hinucion-pharma.jfif",
    initials: "HP",
    color: "bg-cyan-100 text-cyan-700",
  },
};

const featuredMedicines = [
  {
    id: "featured-1",
    name: "Esomephrazole",
    price: 10,
    pharmacyKey: "caring",
    description:
      "Carry Medical Provide Fresh and Excellent Quality Drugs",
  },
  {
    id: "featured-2",
    name: "Esomephrazole",
    price: 9,
    pharmacyKey: "pool",
    description: "High Quality is Our Strenght we provide good",
  },
  {
    id: "featured-3",
    name: "Esomephrazole",
    price: 8,
    pharmacyKey: "ok",
    description:
      "Different people have different taste, and various types of tablet.",
  },
  {
    id: "featured-4",
    name: "Esomephrazole",
    price: 11,
    pharmacyKey: "hamza",
    description:
      "Different people have different taste, and various types of music.",
  },
];

const medicineResults = [
  {
    id: "8234",
    name: "Esso",
    category: "Tablet",
    pharmacy: "Caring Pharmacy",
    pharmacyKey: "caring",
    discount: 1,
    price: 5,
  },
  {
    id: "872",
    name: "Esso",
    category: "Tablet",
    pharmacy: "OK Pharmacy",
    pharmacyKey: "ok",
    discount: 3,
    price: 9,
  },
  {
    id: "0134",
    name: "Esso",
    category: "Tablet",
    pharmacy: "Hilton Medical",
    pharmacyKey: "hilton",
    discount: 5,
    price: 7,
  },
  {
    id: "113",
    name: "Esso",
    category: "Tablet",
    pharmacy: "Hinucion Pharma",
    pharmacyKey: "hinucion",
    discount: 5,
    price: 9,
  },
  {
    id: "6347",
    name: "Esso",
    category: "Tablet",
    pharmacy: "Pool Medical",
    pharmacyKey: "pool",
    discount: 2,
    price: 8,
  },
  {
    id: "4729",
    name: "Esso",
    category: "Tablet",
    pharmacy: "Hamza Pharma",
    pharmacyKey: "hamza",
    discount: 0,
    price: 11,
  },
];

function PharmacyAvatar({ pharmacyKey, small = false }) {
  const pharmacy = pharmacies[pharmacyKey];

  if (!pharmacy) return null;

  return (
    <div
      title={pharmacy.name}
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full ${
        small ? "h-9 w-9 text-xs" : "h-11 w-11 text-sm"
      } ${pharmacy.color}`}
    >
      {pharmacy.image ? (
        <img
          src={pharmacy.image}
          alt={pharmacy.name}
          className="h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <span className="font-semibold">{pharmacy.initials}</span>
      )}
    </div>
  );
}

function MedicinePicture({ className = "" }) {
  return (
    <img
      src={medicineImage}
      alt="ESSO 40 Esomeprazole 40 mg"
      className={className}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

function PharmacyPlace() {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState("7");

  const filteredMedicines = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return medicineResults;

    return medicineResults.filter((medicine) =>
      [
        medicine.name,
        medicine.category,
        medicine.pharmacy,
        medicine.id,
        String(medicine.price),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  const visibleMedicines = filteredMedicines.slice(
    0,
    Number(entries)
  );

  return (
    <Layout>
      <div className="min-w-0 space-y-6 pt-5">
        {/* Featured medicine cards */}
        <section className="rounded-2xl bg-white p-4 shadow-sm sm:p-6">
          <h1 className="mb-6 text-xl font-semibold leading-7 text-[#344767]">
            Search Pharmacies for Medicines
          </h1>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredMedicines.map((medicine) => (
              <article
                key={medicine.id}
                className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="flex h-44 items-center justify-center bg-[#f8f9fa] p-3 sm:h-48">
                  <MedicinePicture className="h-full w-full object-contain" />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex min-h-12 items-start justify-between gap-2">
                    <h2 className="min-w-0 text-sm font-semibold leading-5 text-[#344767]">
                      {medicine.name}
                    </h2>

                    <span className="shrink-0 whitespace-nowrap text-lg font-semibold text-[#17bce2]">
                      {medicine.price} RM
                    </span>
                  </div>

                  <div className="mt-4 flex min-h-12 items-center gap-3">
                    <PharmacyAvatar pharmacyKey={medicine.pharmacyKey} />

                    <h3 className="text-sm font-semibold leading-5 text-[#344767]">
                      {pharmacies[medicine.pharmacyKey].name}
                    </h3>
                  </div>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#677a9e]">
                    {medicine.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      alert(
                        `You selected ${medicine.name} from ${
                          pharmacies[medicine.pharmacyKey].name
                        }.`
                      );
                    }}
                    className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#f00083] to-[#a817b9] px-3 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    BUY NOW
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Medicine results table */}
        <section className="overflow-hidden rounded-2xl bg-white py-5 shadow-sm">
          <h2 className="px-4 text-lg font-semibold leading-7 text-[#344767] sm:px-6">
            {filteredMedicines.length} Medicine returned for the
            keyword Esso
          </h2>

          <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-2">
              <select
                aria-label="Entries per page"
                value={entries}
                onChange={(event) => setEntries(event.target.value)}
                className="h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#677a9e] outline-none focus:border-cyan-400"
              >
                <option value="4">4</option>
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>

              <span className="whitespace-nowrap text-sm text-[#8392ab]">
                entries per page
              </span>
            </div>

            <input
              type="search"
              aria-label="Search medicines"
              placeholder="Search..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none placeholder:text-gray-400 focus:border-cyan-400 sm:max-w-[250px]"
            />
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-y border-gray-100 text-xs font-semibold uppercase tracking-wide text-[#8392ab]">
                  <th className="px-5 py-4">Name</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Service By</th>
                  <th className="px-4 py-4">Discount</th>
                  <th className="px-4 py-4">Price</th>
                  <th className="px-4 py-4">ID</th>
                </tr>
              </thead>

              <tbody>
                {visibleMedicines.map((medicine) => (
                  <tr
                    key={medicine.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <MedicinePicture className="h-12 w-14 shrink-0 object-contain" />
                        <span className="font-semibold text-[#344767]">
                          {medicine.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-[#677a9e]">
                      {medicine.category}
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <PharmacyAvatar
                          pharmacyKey={medicine.pharmacyKey}
                          small
                        />
                        <span className="whitespace-nowrap font-medium text-[#344767]">
                          {medicine.pharmacy}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-[#677a9e]">
                      {medicine.discount}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-[#677a9e]">
                      {medicine.price} RM
                    </td>

                    <td className="px-4 py-4 text-[#677a9e]">
                      {medicine.id}
                    </td>
                  </tr>
                ))}

                {visibleMedicines.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-10 text-center text-sm text-[#677a9e]"
                    >
                      No medicines found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default PharmacyPlace;
