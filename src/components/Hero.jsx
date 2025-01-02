const Hero = () => {
  return (
    <section className="pt-7">
      <div className="container px-[0px] flex flex-col items-center lg:flex-row">
        <div className="lg:hidden">
          <img src="src/assets/images/image-hero-mobile.png" alt="hero" />
        </div>
        <div className="flex flex-col items-center w-full ">
          <div className="flex flex-col items-center mt-[50px]">
            <h3 className="mb-4 text-5xl font-bold">Make remote work</h3>
            <div className="opacity-[0.7] flex flex-col items-center text-lg">
              <p>Get your team in sync, no matter your</p>
              <p>location. Streamline processes, create</p>
              <p>team rituals, and watch productivity soar.</p>
            </div>
          </div>
          <div>
            <button className="px-[30px] py-[15px] mt-10 text-white bg-black rounded-2xl">
              Learn more
            </button>
          </div>
          <div className="flex flex-row items-center justify-between w-full mt-10 px-[30px] md:pb-[30px]">
            <img src="src/assets/images/client-audiophile.svg" alt="client" />
            <img src="src/assets/images/client-databiz.svg" alt="client" />
            <img src="src/assets/images/client-maker.svg" alt="client" />
            <img src="src/assets/images/client-meet.svg" alt="client" />
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="src/assets/images/image-hero-desktop.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
