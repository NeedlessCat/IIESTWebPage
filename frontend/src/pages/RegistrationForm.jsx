import React, { useState } from "react";

const RegistrationForm = () => {
  const [step, setStep] = useState(0);
  const [facultyData, setFacultyData] = useState({
    name: "",
    designation: "",
    department: "",
    phone: "",
    email: "",
    about: {
      intro: "",
      academic: [""],
      teaching: [""],
      research: [""],
    },
    publication: [{ type: "", team: "", topic: "", year: "" }],
    project: [{ topic: "", status: "", year: "" }],
    award: [{ title: "", year: "" }],
  });

  const handleInputChange = (e, section, index, key) => {
    const value = e.target.value;
    setFacultyData((prevData) => {
      const newData = { ...prevData };
      if (section === "about") {
        if (Array.isArray(newData.about[key])) {
          newData.about[key][index] = value;
        }
      } else {
        newData[section][index][key] = value;
      }
      return newData;
    });
  };

  const handleAddItem = (section) => {
    setFacultyData((prevData) => {
      const newData = { ...prevData };
      if (["academic", "teaching", "research"].includes(section)) {
        newData.about[section].push("");
      } else {
        const emptyItem =
          section === "publication"
            ? { type: "", team: "", topic: "", year: "" }
            : section === "project"
            ? { topic: "", status: "", year: "" }
            : { title: "", year: "" };
        newData[section].push(emptyItem);
      }
      return newData;
    });
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));
  const handleSubmit = () => console.log(facultyData);

  const steps = ["Basic Info", "About", "Publications", "Projects", "Awards"];

  const inputClass =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200";
  const selectClass =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200";
  const buttonClass =
    "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const addButtonClass =
    "px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200";

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-lg p-8">
        {/* Stepper */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 h-0.5 w-full bg-gray-200 -z-10"></div>
          {steps.map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-2 
                  ${
                    step >= index
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-500 border-2 border-gray-200"
                  }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= index ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Form Sections */}
        <div className="mb-8">
          {step === 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Basic Information
              </h3>
              <input
                type="text"
                placeholder="Name"
                className={inputClass}
                value={facultyData.name}
                onChange={(e) =>
                  setFacultyData({ ...facultyData, name: e.target.value })
                }
              />
              <select
                value={facultyData.designation}
                onChange={(e) =>
                  setFacultyData({
                    ...facultyData,
                    designation: e.target.value,
                  })
                }
                className={selectClass}
              >
                <option value="">Select Designation</option>
                <option value="Director">Director</option>
                <option value="Head of Department">Head of Department</option>
                <option value="Professor">Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Lab Assistant">Lab Assistant</option>
                <option value="Others">Others</option>
              </select>
              <input
                type="text"
                placeholder="Department"
                className={inputClass}
                value={facultyData.department}
                onChange={(e) =>
                  setFacultyData({ ...facultyData, department: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone"
                className={inputClass}
                value={facultyData.phone}
                onChange={(e) =>
                  setFacultyData({ ...facultyData, phone: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className={inputClass}
                value={facultyData.email}
                onChange={(e) =>
                  setFacultyData({ ...facultyData, email: e.target.value })
                }
              />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">About</h3>
              <div className="space-y-4">
                <textarea
                  placeholder="Brief Introduction"
                  className={`${inputClass} h-32 resize-none`}
                  value={facultyData.about.intro}
                  onChange={(e) =>
                    setFacultyData({
                      ...facultyData,
                      about: { ...facultyData.about, intro: e.target.value },
                    })
                  }
                />

                {["academic", "teaching", "research"].map((section) => (
                  <div key={section} className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-700 capitalize">
                      {section === "academic"
                        ? "Academic Achievements"
                        : section}
                    </h4>
                    {facultyData.about[section].map((item, index) => (
                      <input
                        key={index}
                        type="text"
                        className={inputClass}
                        value={item}
                        onChange={(e) =>
                          handleInputChange(e, "about", index, section)
                        }
                        placeholder={`Add ${section} details`}
                      />
                    ))}
                    <button
                      className={addButtonClass}
                      onClick={() => handleAddItem(section)}
                    >
                      Add More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Publications
              </h3>
              {facultyData.publication.map((pub, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg space-y-3 bg-gray-50"
                >
                  <select
                    value={pub.type}
                    onChange={(e) =>
                      handleInputChange(e, "publication", index, "type")
                    }
                    className={selectClass}
                  >
                    <option value="">Select Publication Type</option>
                    <option value="Journal">Journal</option>
                    <option value="Conference">Conference</option>
                    <option value="Book">Book</option>
                  </select>
                  <input
                    type="text"
                    className={inputClass}
                    value={pub.team}
                    onChange={(e) =>
                      handleInputChange(e, "publication", index, "team")
                    }
                    placeholder="Team Members"
                  />
                  <input
                    type="text"
                    className={inputClass}
                    value={pub.topic}
                    onChange={(e) =>
                      handleInputChange(e, "publication", index, "topic")
                    }
                    placeholder="Publication Topic"
                  />
                  <input
                    type="text"
                    className={inputClass}
                    value={pub.year}
                    onChange={(e) =>
                      handleInputChange(e, "publication", index, "year")
                    }
                    placeholder="Year"
                  />
                </div>
              ))}
              <button
                className={addButtonClass}
                onClick={() => handleAddItem("publication")}
              >
                Add Publication
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Projects
              </h3>
              {facultyData.project.map((proj, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg space-y-3 bg-gray-50"
                >
                  <input
                    type="text"
                    className={inputClass}
                    value={proj.topic}
                    onChange={(e) =>
                      handleInputChange(e, "project", index, "topic")
                    }
                    placeholder="Project Topic"
                  />
                  <select
                    value={proj.status}
                    onChange={(e) =>
                      handleInputChange(e, "project", index, "status")
                    }
                    className={selectClass}
                  >
                    <option value="">Select Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Planned">Planned</option>
                  </select>
                  <input
                    type="text"
                    className={inputClass}
                    value={proj.year}
                    onChange={(e) =>
                      handleInputChange(e, "project", index, "year")
                    }
                    placeholder="Year"
                  />
                </div>
              ))}
              <button
                className={addButtonClass}
                onClick={() => handleAddItem("project")}
              >
                Add Project
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Awards & Recognition
              </h3>
              {facultyData.award.map((award, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg space-y-3 bg-gray-50"
                >
                  <input
                    type="text"
                    className={inputClass}
                    value={award.title}
                    onChange={(e) =>
                      handleInputChange(e, "award", index, "title")
                    }
                    placeholder="Award Title"
                  />
                  <input
                    type="text"
                    className={inputClass}
                    value={award.year}
                    onChange={(e) =>
                      handleInputChange(e, "award", index, "year")
                    }
                    placeholder="Year"
                  />
                </div>
              ))}
              <button
                className={addButtonClass}
                onClick={() => handleAddItem("award")}
              >
                Add Award
              </button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <button
            className={buttonClass}
            onClick={handlePrev}
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            className={buttonClass}
            onClick={step === 4 ? handleSubmit : handleNext}
          >
            {step === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
