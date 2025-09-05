import AboutVC from "@/components/ui/AboutVC";
import About from "../about/page";
import AboutMC from "@/components/ui/MasterC";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[url('/phone.png')] bg-cover bg-center bg-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="max-w-[1040px] w-full flex flex-col mt-35 items-center">
          <img
            src="/logo.png"
            alt="Vocal Camp logo"
            className="w-[300px]"
          />
          <button className="inline-block text-black bg-white px-4 py-2 rounded-3xl mb-80 mt-2 font-bold hover:bg-[#ff00be] transition duration-300">
            ЗАПИСАТИСЯ НА БЕЗКОШТОВНИЙ МАЙСТЕР-КЛАС!
          </button>



        </div>
      </div>
      <AboutVC />
      <AboutMC />
      <About />
    </div>
  );
};

export default HomePage;