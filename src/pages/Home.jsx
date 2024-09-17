import Header from "../common/header/Header";
import CustomSlider from "../components/Slider";
import "../css/home.css";
const Home = () => {
  const images = [
    {
      id: 1,
      image: "/images/slider.jpg",
    },
    {
      id: 2,
      image: "/images/slider2.jpg",
    },
    {
      id: 3,
      image: "/images/slider3.jpg",
    },
    {
      id: 4,
      image: "/images/slider4.jpg",
    },
    {
      id: 5,
      image: "/images/slider5.jpg",
    },
    {
      id: 6,
      image: "/images/slider6.jpg",
    },
    {
      id: 7,
      image: "/images/slider7.jpg",
    },
    {
      id: 8,
      image: "/images/slider5.jpg",
    },
  ];
  const autoImages = [
    { id: 1, image: "/images/auto.webp" },
    { id: 2, image: "/images/auto2.webp" },
    { id: 3, image: "/images/auto3.jpg" },
    { id: 4, image: "/images/auto4.webp" },
    { id: 5, image: "/images/auto5.webp" },
    { id: 6, image: "/images/auto2.webp" },
    { id: 7, image: "/images/auto.webp" },
    { id: 8, image: "/images/auto4.webp" },
  ];
  const imageCards = [
    {
      id: 1,
      image: "/images/apple-watch-small.jpg",
      title: "WATCH",
      description: "New finish.Never quit",
      description2: "Available starting 9.20",
    },
    {
      id: 2,
      image: "/images/card.jpg",
      title: "AirPods 4",
      description: "Iconic. Now supersonic. ",
      description2: "Available with Active Noise Cancellation.",
    },
    {
      id: 3,
      image: "/images/card2.jpg",
      title: "AirPods Pro2",
      description: "Hearing Aid and Hearing Test features coming",
      description2: "Available starting 9.20",
    },
    {
      id: 4,
      image: "/images/card3.jpg",
      title: "AirPods Max",
      description: "Symphonic boom",
    },
  ];
  return (
    <div>
      <Header />
      <section className="pre_order sm:h-[700px] h-[600px] w-[100%] overflow-hidden relative flex flex-col">
        <a href="" className="h-[700px] py-[37px]">
          <h2 className="absolute top-20 sm:top-[26%] w-[100%] text-center text-white text-4xl ">
            iPhone 16 Pro
          </h2>
          <div className="sm:flex absolute justify-center  hidden top-[24%] items-center w-[100%]">
            <img src="/images/hello.png" alt="" className=" w-[700px]" />
          </div>
          <p className="absolute w-[100%] bottom-28 text-gray-300 text-center text-xl">
            Available starting 9.20 <br />
            Apple Intelligence coming this fall <sup>2</sup>
          </p>
          <div className="flex justify-center items-center gap-10 bottom-10 absolute w-[100%]">
            <button className="bg-blue-600 w-28 h-10 text-white rounded-[30px] items-center   border-none">
              Learn more
            </button>
            <button className="border-blue-600 border rounded-[30px] w-28 h-10 transition text-blue-600  hover:text-white  ">
              Pre-order
            </button>
          </div>
          <div className="absolute top-0 left-0 sm:h-[100%] h-[100%] w-[100%]">
            <div
              className="lg:bg-[url('/images/iphone.jpg')] absolute top-0 right-auto bottom-0  bg-[url('/images/bg-small.jpg')] bg-cover bg-center w-[100%] "
              style={{
                left: "calc(50% + 0px",
                zIndex: "-1",
                transform: "translatex(-50%)",
              }}
            ></div>
          </div>
        </a>
      </section>
      {/* iphone 16 */}
      <section className="pre_order sm:h-[700px] h-[500px] w-[100%] overflow-hidden relative flex flex-col ">
        <a href="" className="h-[700px] py-[37px]">
          <h2
            className="absolute top-[50%] w-[100%] text-center text-white sm:text-6xl font-bold text-4xl aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            iPhone 16
          </h2>
          <h4
            className="absolute top-[60%] text-center w-[100%] sm:text-3xl text-xl text-white aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Hello, Apple Intelligence.
          </h4>
          <p className="absolute w-[100%] bottom-24 text-gray-700 text-center text-xl ">
            Available starting 9.20 <br />
            Apple Intelligence coming this fall <sup>3</sup>
          </p>
          <div
            className="flex justify-center items-center gap-10 bottom-10 absolute w-[100%] aos-init aos-animate"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <button className="bg-blue-600 w-28 h-10 text-white rounded-[30px] items-center   border-none">
              Learn more
            </button>
            <button className="border-blue-600 border rounded-[30px] w-28 h-10 transition text-blue-600  hover:text-white  ">
              Pre-order
            </button>
          </div>
          <div className="absolute top-0 left-0 sm:h-[100%] h-[100%] w-[100%]">
            <div
              className="lg:bg-[url('/images/iphone-large.jpg')] absolute top-0 right-auto bottom-0  bg-[url('/images/iphone-small.jpg')] bg-cover bg-center w-[100%] "
              style={{
                left: "calc(50% + 0px",
                zIndex: "-1",
                transform: "translatex(-50%)",
              }}
            ></div>
          </div>
        </a>
      </section>
      {/* watch apple */}
      <section className="pre_order sm:h-[700px] h-[500px] w-[100%] overflow-hidden relative flex flex-col">
        <a href="" className="h-[700px] py-[37px]">
          <div
            className="sm:flex hidden absolute justify-center top-[24%] items-center w-[100%] aos-init aos-animate"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src="/images/watch-logo-large.png" alt="" />
          </div>
          <div
            className="sm:hidden flex absolute justify-center top-[24%] items-center w-[100%] aos-init aos-animate"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src="/images/apple-logo-small.png" alt="" />
          </div>

          <div
            className="flex justify-center items-center gap-10 bottom-10 absolute w-[100%] aos-init aos-animate "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <button className="bg-blue-600 w-28 h-10 text-white rounded-[30px] items-center   border-none">
              Learn more
            </button>
            <button className="border-blue-600 border rounded-[30px] w-28 h-10 transition text-blue-600  hover:text-white  ">
              Pre-order
            </button>
          </div>
          <div className="absolute top-0 left-0 sm:h-[100%] h-[100%] w-[100%]">
            <div
              className="lg:bg-[url('/images/hero-apple-large.jpg')] absolute top-0 right-auto bottom-0  bg-[url('/images/hero-apple-small.jpg')] bg-cover bg-center w-[100%] "
              style={{
                left: "calc(50% + 0px",
                zIndex: "-1",
                transform: "translatex(-50%)",
              }}
            ></div>
          </div>
        </a>
      </section>
      {/* images */}
      <section className=" my-5">
        <div className="grid sm:grid-cols-2 gap-5  grid-cols-1 w-[100%] h-[100%] px-5">
          {imageCards.map((card) => {
            return (
              <>
                <a
                  href=""
                  className="lg:h-[700px] h-[500px] py-[37px] relative aos-init aos-animate"
                  key={card.id}
                  id={card.id}
                  data-aos="zoom-in"
                >
                  <h2 className="absolute lg:top-[50%] top-36 w-[100%] text-center text-white sm:text-6xl font-bold text-4xl ">
                    {card.title}
                  </h2>

                  <p className="absolute w-[100%] bottom-36 text-gray-700 text-center text-xl ">
                    {card.description} <br />
                    {card.description2}
                    <sup>3</sup>
                  </p>
                  <div className="flex justify-center items-center gap-10 bottom-20 absolute w-[100%]">
                    <button className="bg-blue-600 w-28 h-10 text-white rounded-[30px] items-center   border-none">
                      Learn more
                    </button>
                    <button className="border-blue-600 border rounded-[30px] w-28 h-10 transition text-blue-600  hover:text-white  ">
                      Pre-order
                    </button>
                  </div>
                  <div className="absolute top-0 left-0 sm:h-[100%] h-[100%] w-[100%]">
                    <div
                      className="absolute top-0 right-auto bottom-0  bg-cover bg-center w-[100%]  "
                      style={{
                        backgroundImage: `url(${card.image})`,
                        left: "calc(50% + 0px",
                        zIndex: "-1",
                        transform: "translatex(-50%)",
                      }}
                    ></div>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </section>
      {/*  slider */}
      <section className="h-auto w-full">
        <div className="w-[100vw]">
          <CustomSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.image} className=" flex" />;
            })}
          </CustomSlider>
        </div>
      </section>
      {/* auto play */}
      <section className="flex loop w-auto overflow-visible gap-3">
        {autoImages.map((img) => {
          return (
            <img
              key={img.id}
              src={img.image}
              className="min-w-[450px] h-[230px]"
            />
          );
        })}
      </section>
    </div>
  );
};

export default Home;
