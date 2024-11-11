import React from "react";
import AboutImg from "../assets/about_image.jpg";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] rounded"
          src={AboutImg}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            exercitationem, obcaecati similique perferendis doloribus
            praesentium provident maiores blanditiis et vitae ipsa nobis, qui
            molestias. Consequatur voluptas assumenda nisi eligendi eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            tempora magnam obcaecati ex itaque labore a quasi ipsum deleniti
            nihil. Tempora doloremque laborum illo asperiores corrupti illum
            debitis optio corporis.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            aliquam quia, reprehenderit officiis eligendi ut impedit quae
            nesciunt totam molestias iure quaerat, enim sint voluptas neque
            quas, veniam voluptatem quod.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          OUR{" "}
          <span className="text-gray-700 font-semibold">
            CENTRAL FACILITIES
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healtcare professionals in your area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendation and remainders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
