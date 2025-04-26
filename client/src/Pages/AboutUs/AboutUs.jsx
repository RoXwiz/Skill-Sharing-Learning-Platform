import React from "react";

const AboutUs = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/set-car-parts-background_488220-34293.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to WizDrive</h1>
        <p className="text-lg">
        WizDrive is a modern, user-friendly online platform designed to simplify the import and sale of high-quality vehicle parts in Sri Lanka.
Connecting trusted sellers from Taiwan, China, and Japan with Sri Lankan buyers, WizDrive provides a seamless marketplace experience. Whether you're a seller managing your inventory or a buyer looking for reliable auto parts, WizDrive 
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
