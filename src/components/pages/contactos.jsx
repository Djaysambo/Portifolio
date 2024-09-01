import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Contactos = () => {
  return (
    <>
      <Header />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')"
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Hello I am vicente sambo, I’m 21 years old.
 I have a degree in the area of Customer Service 
Customer and Sales, English and Digital Skills.
 Currently a student at bytes4future in the area of Programming
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
