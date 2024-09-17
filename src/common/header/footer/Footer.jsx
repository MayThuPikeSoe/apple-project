import { useState } from "react";
import "./footer.css";

export const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open

  // Example data for different sections
  const footerData = [
    {
      id: 1,
      title: "Shop and Learn",
      menu: ["Store", "Mac", "iPad", "iPhone"],
    },
    {
      id: 2,
      title: "Apple Watch",
      menu: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
    },
    {
      id: 3,
      title: "Account",
      menu: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    },
    // Add more sections as needed
  ];

  const clickMenu = (e) => {
    const value = e.target.getAttribute("data-value");
    console.log("Menu clicked:", value);
    setOpenMenu(value === openMenu ? null : value); // Toggle the selected menu
  };

  return (
    <div className="flex lg:flex-row flex-col container gap-10 justify-center my-12">
      {footerData.map((section) => (
        <div
          key={section.id}
          className="footer-item flex flex-col lg:px-0 px-10"
        >
          <div>
            <div className="flex justify-between">
              <h4 className="text-lg font-bold text-gray-600">
                {section.title}
              </h4>

              {/* Menu Toggle Button */}
              <svg
                className="lg:hidden flex cursor-pointer icon"
                onClick={clickMenu}
                data-value={section.id} // Assign unique ID for each section
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>

            {/* Menu List */}
            <ul
              className={`menu lg:block hidden ${
                openMenu == section.id ? "open" : ""
              }`}
            >
              {section.menu.map((item, index) => (
                <li key={index}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    data-analytics-title={item.toLowerCase()}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
