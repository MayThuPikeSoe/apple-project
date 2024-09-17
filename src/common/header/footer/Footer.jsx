import { useState } from "react";
import "./footer.css";
export const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const clickMenu = (e) => {
    console.log(e);
    const value = e.target.getAttribute('data-value');
    setOpenMenu(value);
  };

  console.log(openMenu);

  return (
    <div className="flex lg:flex-row flex-col container gap-10 justify-center my-12">
      {/* col1 */}
      <div className="footer-item flex flex-col lg:px-0 px-10">
        <div>
          <div className="flex justify-between">
            <h4 className="text-lg font-bold text-gray-600">Shop and Learn</h4>

            <svg
              className="lg:hidden flex cursor-pointer icon"
              onClick={clickMenu}
              data-value="12"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>

          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a href="/us/shop/goto/store" data-analytics-title="store">
                Store
              </a>
            </li>
            <li>
              <a href="/mac/" data-analytics-title="mac">
                Mac
              </a>
            </li>
            <li>
              <a href="/ipad/" data-analytics-title="ipad">
                iPad
              </a>
            </li>
            <li>
              <a href="/iphone/" data-analytics-title="iphone">
                iPhone
              </a>
            </li>
            <li>
              <a href="/watch/" data-analytics-title="watch">
                Watch
              </a>
            </li>
            <li>
              <a href="/apple-vision-pro/" data-analytics-title="vision">
                Vision
              </a>
            </li>
            <li>
              <a href="/airpods/" data-analytics-title="airpods">
                AirPods
              </a>
            </li>
            <li>
              <a href="/tv-home/" data-analytics-title="tv and home">
                TV &amp; Home
              </a>
            </li>
            <li>
              <a href="/airtag/" data-analytics-title="airtag">
                AirTag
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/buy_accessories"
                data-analytics-title="accessories"
              >
                Accessories
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/giftcards"
                data-analytics-title="gift cards"
              >
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
        <div className="my-7">
          <div className="flex justify-between">
            <h4 className="text-lg font-bold text-gray-600">Apple Watch</h4>

            <svg
              className={`lg:hidden flex cursor-pointer icon ${
                openMenu ? "open" : ""
              }`}
              data-value="123"
              onClick={clickMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>Wallet</li>
            <li>Apple Card</li>
            <li>Apple Pay</li>
            <li>Apple Cash</li>
          </ul>
        </div>
      </div>
      {/* col2 */}
      <div className="footer-item flex flex-col  sm:px-0 px-10">
        <div>
          <h4 className="text-lg font-bold text-gray-600">Account</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a
                href="https://appleid.apple.com/us/"
                data-analytics-title="manage your apple id"
                data-analytics-exit-link=""
              >
                Manage Your Apple&nbsp;ID
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/account"
                data-analytics-title="apple store account"
              >
                Apple Store Account
              </a>
            </li>
            <li>
              <a
                href="https://www.icloud.com"
                data-analytics-title="icloud.com"
                data-analytics-exit-link=""
              >
                iCloud.com
              </a>
            </li>
          </ul>
        </div>
        <div className="my-7">
          <h4 className="text-lg font-bold text-gray-600">Entertainment</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a href="/apple-one/" data-analytics-title="apple one">
                Apple&nbsp;One
              </a>
            </li>
            <li>
              <a href="/apple-tv-plus/" data-analytics-title="apple tv plus">
                Apple&nbsp;TV+
              </a>
            </li>
            <li>
              <a href="/apple-music/" data-analytics-title="apple music">
                Apple&nbsp;Music
              </a>
            </li>
            <li>
              <a href="/apple-arcade/" data-analytics-title="apple arcade">
                Apple&nbsp;Arcade
              </a>
            </li>
            <li>
              <a
                href="/apple-fitness-plus/"
                data-analytics-title="apple fitness plus"
              >
                Apple&nbsp;Fitness+
              </a>
            </li>
            <li>
              <a href="/apple-news/" data-analytics-title="apple news plus">
                Apple&nbsp;News+
              </a>
            </li>
            <li>
              <a href="/apple-podcasts/" data-analytics-title="apple podcasts">
                Apple Podcasts
              </a>
            </li>
            <li>
              <a href="/apple-books/" data-analytics-title="apple books">
                Apple&nbsp;Books
              </a>
            </li>
            <li>
              <a href="/app-store/" data-analytics-title="app store">
                App&nbsp;Store
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* col3 */}
      <div className="footer-item flex flex-col  sm:px-0 px-10">
        <div>
          <h4 className="text-lg font-bold text-gray-600">Apple Store</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a href="/retail/" data-analytics-title="find a store">
                Find a Store
              </a>
            </li>
            <li>
              <a href="/retail/geniusbar/" data-analytics-title="genius bar">
                Genius Bar
              </a>
            </li>
            <li>
              <a href="/today/" data-analytics-title="today at apple">
                Today at Apple
              </a>
            </li>
            <li>
              <a
                href="/today/groups/"
                data-analytics-title="group reservations"
              >
                Group Reservations
              </a>
            </li>
            <li>
              <a href="/today/camp/" data-analytics-title="apple camp">
                Apple Camp
              </a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/us/app/apple-store/id375380948"
                data-analytics-title="apple store app"
                data-analytics-exit-link=""
              >
                Apple Store App
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/special_deals"
                data-analytics-title="certified refurbished"
              >
                Certified Refurbished
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/trade_in"
                data-analytics-title="apple trade in"
              >
                Apple&nbsp;Trade&nbsp;In
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/payment_plan"
                data-analytics-title="financing"
              >
                Financing
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/buy_iphone/carrier_offers"
                data-analytics-title="carrier deals at apple"
              >
                Carrier Deals at Apple
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/order/list"
                data-analytics-title="order status"
              >
                Order Status
              </a>
            </li>
            <li>
              <a href="/us/shop/goto/help" data-analytics-title="shopping help">
                Shopping Help
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* col4 */}
      <div className="footer-item flex flex-col  sm:px-0 px-10">
        <div>
          <h4 className="text-lg font-bold text-gray-600">For Business</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a href="/business/" data-analytics-title="apple and business">
                Apple and Business
              </a>
            </li>
            <li>
              <a
                href="/retail/business/"
                data-analytics-title="shop for business"
              >
                Shop for Business
              </a>
            </li>
          </ul>
        </div>
        <div className="my-7">
          <h4 className="text-lg font-bold text-gray-600">For Education</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a href="/education/" data-analytics-title="apple and education">
                Apple and Education
              </a>
            </li>
            <li>
              <a
                href="/education/k12/how-to-buy/"
                data-analytics-title="shop for k12"
              >
                Shop for K-12
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/educationrouting"
                data-analytics-title="shop for college"
              >
                Shop for College
              </a>
            </li>
          </ul>
        </div>
        <div className="my-7">
          <h4 className="text-lg font-bold text-gray-600">For Healthcare</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a href="/healthcare/" data-analytics-title="apple in healthcare">
                Apple in Healthcare
              </a>
            </li>
            <li>
              <a
                href="/healthcare/mac/"
                data-analytics-title="mac in healthcare"
              >
                Mac in Healthcare
              </a>
            </li>
            <li>
              <a
                href="/healthcare/apple-watch/"
                data-analytics-title="health on apple watch"
              >
                Health on Apple&nbsp;Watch
              </a>
            </li>
            <li>
              <a
                href="/healthcare/health-records/"
                data-analytics-title="health records on iphone and ipad"
              >
                Health Records on iPhone and iPad
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-600">For Business</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a
                href="/r/store/government/"
                data-analytics-title="shop for government"
              >
                Shop for Government
              </a>
            </li>
            <li>
              <a
                href="/us/shop/goto/eppstore/veteransandmilitary"
                data-analytics-title="shop for veterans and military"
              >
                Shop for Veterans and Military
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* col5 */}
      <div className="footer-item flex flex-col  sm:px-0 px-10">
        <div>
          <h4 className="text-lg font-bold text-gray-600">Apple Values</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a href="/accessibility/" data-analytics-title="accessibility">
                Accessibility
              </a>
            </li>
            <li>
              <a href="/education-initiative/" data-analytics-title="education">
                Education
              </a>
            </li>
            <li>
              <a href="/environment/" data-analytics-title="environment">
                Environment
              </a>
            </li>
            <li>
              <a
                href="/diversity/"
                data-analytics-title="inclusion and diversity"
              >
                Inclusion and Diversity
              </a>
            </li>
            <li>
              <a href="/privacy/" data-analytics-title="privacy">
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/racial-equity-justice-initiative/"
                data-analytics-title="racial equity and justice"
              >
                Racial Equity and Justice
              </a>
            </li>
            <li>
              <a href="/supply-chain/" data-analytics-title="supply chain">
                Supply Chain
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-600">About Apple</h4>
          <ul className={`menu lg:block hidden ${openMenu ? "open" : ""}`}>
            <li>
              <a href="/newsroom/" data-analytics-title="newsroom">
                Newsroom
              </a>
            </li>
            <li>
              <a href="/leadership/" data-analytics-title="apple leadership">
                Apple Leadership
              </a>
            </li>
            <li>
              <a
                href="/careers/us/"
                data-analytics-title="career opportunities"
              >
                Career Opportunities
              </a>
            </li>
            <li>
              <a
                href="https://investor.apple.com/"
                data-analytics-title="investors"
                data-analytics-exit-link=""
              >
                Investors
              </a>
            </li>
            <li>
              <a
                href="/compliance/"
                data-analytics-title="ethics and compliance"
              >
                Ethics &amp; Compliance
              </a>
            </li>
            <li>
              <a href="/apple-events/" data-analytics-title="events">
                Events
              </a>
            </li>
            <li>
              <a href="/contact/" data-analytics-title="contact apple">
                Contact Apple
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
