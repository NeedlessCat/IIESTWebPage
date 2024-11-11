import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const FacultyProfile = () => {
  const { facId } = useParams();
  const { faculty } = useContext(AppContext);
  const [facInfo, setFacInfo] = useState(null);
  const [activeSection, setActiveSection] = useState("About"); // State to track the main section
  const [activePublicationType, setActivePublicationType] = useState("Journal"); // State to track publication type

  const fetchFacInfo = async () => {
    const facInfo = faculty.find((fac) => fac._id === facId);
    setFacInfo(facInfo);
  };

  useEffect(() => {
    fetchFacInfo();
  }, [faculty, facId]);

  // Function to render tables with alternating row colors
  const renderTableRows = (data, columns) =>
    data &&
    Object.values(data).map((item, index) => (
      <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
        {columns.map((col) => (
          <td className="p-2 border-b border-gray-200" key={col}>
            {item[col]}
          </td>
        ))}
      </tr>
    ));

  return (
    facInfo && (
      <div>
        {/*---------------- Faculty Details -------------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={facInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p className="flex items-center gap-2 text-3xl font-medium text-gray-900">
                {facInfo.name}
              </p>
              <button className="py-0.5 px-2 border text-md rounded-full">
                + {facInfo.experience}
              </button>
            </div>

            <p className="text-md text-gray-500">
              {facInfo.designation} - {facInfo.department}
            </p>

            <div>
              <p className="flex items-center gap-1 text-md font-medium text-gray-900 mt-3">
                Research Interests:
              </p>
              <ul className="text-sm text-gray-500 max-w-[700px] mt-1">
                {facInfo.about?.research &&
                  Object.values(facInfo.about?.research).map(
                    (researchItem, index) => (
                      <li key={index}>- {researchItem}</li>
                    )
                  )}
              </ul>
            </div>

            <p className="text-gray-500 font-medium mt-4">
              Phone -<span className="text-gray-600"> {facInfo.phone}</span>
            </p>
            <p className="text-gray-500 font-medium">
              Email -<span className="text-gray-600"> {facInfo.email}</span>
            </p>
          </div>
        </div>

        {/*---------------- Faculty Achievements and Other Information ------------*/}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Left side - toggling buttons */}
          <div className="w-full sm:max-w-72 space-y-2">
            {["About", "Publications", "Projects", "Awards"].map((section) => (
              <button
                key={section}
                className={`w-full text-left py-2 px-3 rounded ${
                  activeSection === section
                    ? "bg-gray-200 font-bold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Right side - content display */}
          <div className="flex-1">
            {activeSection === "About" && (
              <div>
                <p className="text-lg font-bold mb-3">Introduction</p>
                <p>{facInfo.about?.intro}</p>

                <p className="text-lg font-bold mt-4">Academic Achievements</p>
                <ul className="ml-4 list-disc">
                  {Object.values(facInfo.about?.academic || {}).map(
                    (achievement, index) => (
                      <li key={index}>{achievement}</li>
                    )
                  )}
                </ul>

                <p className="text-lg font-bold mt-4">Teaching</p>
                <ul className="ml-4 list-disc">
                  {Object.values(facInfo.about?.teaching || {}).map(
                    (subject, index) => (
                      <li key={index}>{subject}</li>
                    )
                  )}
                </ul>

                <p className="text-lg font-bold mt-4">Research</p>
                <ul className="ml-4 list-disc">
                  {Object.values(facInfo.about?.research || {}).map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {activeSection === "Publications" && (
              <div>
                <p className="text-lg font-bold mb-3">Publications</p>
                {/* Publication type toggle buttons */}
                <div className="flex space-x-4 mb-4">
                  {["Journal", "Conference", "Book"].map((type) => (
                    <button
                      key={type}
                      className={`px-4 py-2 rounded ${
                        activePublicationType === type
                          ? "bg-gray-300 border-b-4 border-gray-500 font-semibold"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActivePublicationType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Scrollable Publication Table */}
                <div className="overflow-y-auto max-h-60">
                  <table className="w-full mt-2">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="p-2">Team</th>
                        <th className="p-2">Topic</th>
                        <th className="p-2">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderTableRows(
                        Object.values(facInfo.publication || {})
                          .filter((pub) => pub.type === activePublicationType)
                          .slice(0, 5),
                        ["team", "topic", "year"]
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeSection === "Projects" && (
              <div>
                <p className="text-lg font-bold mb-3">Projects</p>
                <table className="w-full mt-2">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2">Topic</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderTableRows(facInfo.project, [
                      "topic",
                      "status",
                      "year",
                    ])}
                  </tbody>
                </table>
              </div>
            )}

            {activeSection === "Awards" && (
              <div>
                <p className="text-lg font-bold mb-3">Awards</p>
                <table className="w-full mt-2">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2">Title</th>
                      <th className="p-2">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderTableRows(facInfo.award, ["title", "year"])}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default FacultyProfile;
