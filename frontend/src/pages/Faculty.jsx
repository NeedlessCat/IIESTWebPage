import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Faculty = () => {
  const { department } = useParams();
  const [filterFac, setFilterFac] = useState([]);
  const { faculty } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (department) {
      setFilterFac(faculty.filter((fac) => fac.department === department));
    } else {
      setFilterFac(faculty);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [faculty, department]);

  return (
    <div>
      <p className="text-gray-600">Browse through departments</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              department === "Computer Science"
                ? navigate("/faculty")
                : navigate("/faculty/Computer Science")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-13 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Computer Science"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Computer Science
          </p>
          <p
            onClick={() =>
              department === "Information Technology"
                ? navigate("/faculty")
                : navigate("/faculty/Information Technology")
            }
            className={`w-[90vw] sm:w-[200px] pl-3 py-1.5 pr-3 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Information Technology"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Information Technology
          </p>
          <p
            onClick={() =>
              department === "Electronics"
                ? navigate("/faculty")
                : navigate("/faculty/Electronics")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Electronics" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Electronics
          </p>
          <p
            onClick={() =>
              department === "Electrical"
                ? navigate("/faculty")
                : navigate("/faculty/Electrical")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Electrical" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Electrical
          </p>
          <p
            onClick={() =>
              department === "Mechanical"
                ? navigate("/faculty")
                : navigate("/faculty/Mechanical")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Mechanical" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Mechanical
          </p>
          <p
            onClick={() =>
              department === "Aerospace"
                ? navigate("/faculty")
                : navigate("/faculty/Aerospace")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Aerospace" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Aerospace
          </p>
          <p
            onClick={() =>
              department === "Civil"
                ? navigate("/faculty")
                : navigate("/faculty/Civil")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Civil" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Civil
          </p>
          <p
            onClick={() =>
              department === "Metallurgy"
                ? navigate("/faculty")
                : navigate("/faculty/Metallurgy")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Metallurgy" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Metallurgy
          </p>
          <p
            onClick={() =>
              department === "Mining"
                ? navigate("/faculty")
                : navigate("/faculty/Mining")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              department === "Mining" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Mining
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterFac.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/faculty-profile/${item._id}`);
                scrollTo(0, 0);
              }}
              key={index}
              className="border border-yellow-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-yellow-50" src={item.image} alt="" />
              <div className="p-4">
                <div
                  className={
                    "flex items-center gap-2 text-sm text-center text-green-500"
                  }
                >
                  <p>+{item.experience}</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">
                  {item.designation} at {item.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
