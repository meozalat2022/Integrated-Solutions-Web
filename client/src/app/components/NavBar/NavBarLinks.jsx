import Link from "next/link";
import React from "react";

const NavBarLinks = () => {
  const links = [
    {
      name: "Brands",
      link: "./brands",
      submenu: true,
      sublink: [
        { name: "Brand 1", link: "/productByBrand/:b1" },
        { name: "Brand 2", link: "/productByBrand/:b2" },
        { name: "Brand 3", link: "/productByBrand/:b3" },
        { name: "Brand 4", link: "/productByBrand/:b4" },
      ],
    },
    { name: "New Arrival", link: "/sortedProducts/:createdAt" },
    { name: "Best Deals", link: "/sortedProducts/:promotionRate" },
    { name: "Contact Us", link: "/contactus" },
  ];
  return (
    <div className="flex gap-8 text-white font-bold">
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
                <div className=" rounded-md bg-white px-6 z-50">
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
