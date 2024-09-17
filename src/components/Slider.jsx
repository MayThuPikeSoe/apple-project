import { useState } from "react";
import "../css/slider.css";

function Slider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // const slideNext = () => {
  //   setActiveIndex((val) => {
  //     if (val >= children.length - 1) {
  //       return 0;
  //     } else {
  //       return val + 1;
  //     }
  //   });
  // };

  // const slidePrev = () => {
  //   setActiveIndex((val) => {
  //     if (val <= 0) {
  //       return children.length - 1;
  //     } else {
  //       return val - 1;
  //     }
  //   });
  // };

  return (
    <div className="container_slider">
      {children.map((item, index) => {
        return (
          <div
            className={"slider_item slider_item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container_slider_links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container_slider_links-small container_slider_links-small-active"
                  : "container_slider_links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
