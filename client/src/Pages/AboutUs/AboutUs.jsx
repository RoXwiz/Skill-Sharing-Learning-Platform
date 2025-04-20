import React from "react";

const AboutUs = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/set-car-parts-background_488220-34293.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 sm:p-10 lg:p-12 rounded-2xl max-w-4xl w-full text-center animate-fadeInUp shadow-2xl backdrop-blur-sm">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight animate-pulse-slow">
          Welcome to WizDrive
        </h1>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          WizDrive is a modern, user-friendly online platform designed to simplify the import and sale of high-quality vehicle parts in Sri Lanka. 
          Connecting trusted sellers from Taiwan, China, and Japan with Sri Lankan buyers, WizDrive provides a seamless marketplace experience. 
          Whether you're a seller managing your inventory or a buyer looking for reliable auto parts, WizDrive ensures a hassle-free process with transparency, quality, and efficiency at its core.
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          Our mission is to revolutionize the auto parts industry in Sri Lanka by bridging the gap between global suppliers and local markets. 
          With a focus on authenticity, competitive pricing, and fast delivery, WizDrive empowers businesses and individuals to access premium vehicle components with ease. 
          From engines and transmissions to smaller accessories, our platform offers a diverse range of products to meet every automotive need.
        </p>
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Why Choose WizDrive?</h2>
          <ul className="text-base sm:text-lg lg:text-xl leading-relaxed space-y-2">
            <li>✔️ Verified Sellers from trusted global markets</li>
            <li>✔️ Secure and transparent transactions</li>
            <li>✔️ User-friendly interface for buyers and sellers</li>
            <li>✔️ Dedicated support for a seamless experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;