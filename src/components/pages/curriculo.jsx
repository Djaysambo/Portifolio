import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Contactos = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex-shrink-0"> 
          <img
            src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
            alt="Contact Us"
          />
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="mb-5">

          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};