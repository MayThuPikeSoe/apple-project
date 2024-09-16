import Header from "../common/header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="pre_order h-screen w-full">
        <div className="bg-[url('/images/iphone.jpg')] relative bg-cover w-full h-screen">
          <h2 className="absolute top-[26%] left-[43%] text-white text-4xl ">
            iPhone 16 Pro
          </h2>
          <img
            src="/images/hello.png"
            alt=""
            className="absolute top-[20%] left-[30%] w-[700px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
