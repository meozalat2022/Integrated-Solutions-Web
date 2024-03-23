import Link from "next/link";
import React from "react";

const NavBarLinks = () => {
  const links = [
    {
      name: "Brands",
      link: "#",
      submenu: true,
      sublink: [
        { name: "Brand 1", link: "/productByBrand/:65fca388a1c55b90ae63d2e8" },
        { name: "Brand 2", link: "/productByBrand/:65fca3c3a1c55b90ae63d2ea" },
        { name: "Brand 3", link: "/productByBrand/:65fca3d2a1c55b90ae63d2ec" },
        { name: "Brand 4", link: "/productByBrand/:65fca3e9a1c55b90ae63d2ee" },
      ],
    },
    { name: "New Arrival", link: "/latestProducts" },
    { name: "Best Deals", link: "/bestDeals" },
    { name: "Contact Us", link: "/contactus" },
  ];
  return (
    <div className="flex gap-8 text-white font-bold z-50">
      {links.map((item, index) => (
        <div key={index}>
          <div className="group">
            <li>
              <Link
                className="hover:underline hover:opacity-80"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
            {item.sublink && (
              <div className="absolute pt-2 hidden group-hover:block hover:block">
                <div className=" rounded-md bg-white px-6 ">
                  <div>
                    {item.sublink.map((sub, index) => (
                      <div key={index} className="p-2">
                        <li className="text-sm text-primary my-2">
                          <Link href={sub.link}>{sub.name}</Link>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBarLinks;
