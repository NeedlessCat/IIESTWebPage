import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Collage = () => {
  const { images } = useContext(AppContext);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <span className="inline-block px-4 rounded-md text-xl border-b">
          Collage Section
        </span>
        <h1 className="text-5xl font-bold mt-1">Our Campus Views</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4 md:px-16">
        {images.map((image) => (
          <div
            key={image.id}
            className={`rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105
              ${image.gridArea === "i1" ? "col-span-2 row-span-2" : ""}
              ${image.gridArea === "i2" ? "row-span-2" : ""}
              ${image.gridArea === "i7" ? "row-span-2" : ""}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collage;
