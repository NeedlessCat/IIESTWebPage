import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";

const NewsBoard = () => {
  const { facultyNews, alumniNews } = useContext(AppContext);

  const [facultyAutoScroll, setFacultyAutoScroll] = useState(true);
  const [alumniAutoScroll, setAlumniAutoScroll] = useState(true);

  const facultyRef = useRef(null);
  const alumniRef = useRef(null);
  const facultyScrollPosRef = useRef(0);
  const alumniScrollPosRef = useRef(0);

  useEffect(() => {
    const scrollSpeed = 30;
    let facultyAnimationFrame;
    let alumniAnimationFrame;

    const scrollFacultyNews = () => {
      if (facultyRef.current && facultyAutoScroll) {
        facultyScrollPosRef.current += 0.3;

        if (
          facultyScrollPosRef.current >=
          facultyRef.current.scrollHeight / 2
        ) {
          facultyScrollPosRef.current = 0;
        }

        facultyRef.current.scrollTop = facultyScrollPosRef.current;
        facultyAnimationFrame = setTimeout(
          () => requestAnimationFrame(scrollFacultyNews),
          scrollSpeed
        );
      }
    };

    const scrollAlumniNews = () => {
      if (alumniRef.current && alumniAutoScroll) {
        alumniScrollPosRef.current += 0.3;

        if (alumniScrollPosRef.current >= alumniRef.current.scrollHeight / 2) {
          alumniScrollPosRef.current = 0;
        }

        alumniRef.current.scrollTop = alumniScrollPosRef.current;
        alumniAnimationFrame = setTimeout(
          () => requestAnimationFrame(scrollAlumniNews),
          scrollSpeed
        );
      }
    };

    if (facultyAutoScroll) scrollFacultyNews();
    if (alumniAutoScroll) scrollAlumniNews();

    return () => {
      clearTimeout(facultyAnimationFrame);
      clearTimeout(alumniAnimationFrame);
    };
  }, [facultyAutoScroll, alumniAutoScroll]);

  const NewsSection = ({
    title,
    news,
    newsRef,
    setAutoScroll,
    gradientClass,
  }) => (
    <div className="flex-1 min-w-[300px] transform hover:scale-[1.02] transition-transform duration-300">
      <div className={`${gradientClass} text-white p-3 rounded-t-xl shadow-lg`}>
        <h2 className="text-lg font-semibold text-center tracking-wide">
          {title}
        </h2>
      </div>
      <div
        ref={newsRef}
        className="bg-white rounded-b-xl shadow-xl h-[400px] md:h-96 overflow-y-auto scrollbar-hide"
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="space-y-3 p-4">
          {[...news, ...news].map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 rounded-r-lg shadow-sm"
            >
              <p className="text-xs text-blue-600 font-medium mb-1 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                {item.date}
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 bg-gray-100 rounded-xl p-4 sm:p-6">
        {/* Faculty News Section */}
        <NewsSection
          title="Faculty News"
          news={facultyNews}
          newsRef={facultyRef}
          setAutoScroll={setFacultyAutoScroll}
          gradientClass="bg-gradient-to-r from-blue-600 to-blue-400"
        />

        {/* Alumni News Section */}
        <NewsSection
          title="Alumni News"
          news={alumniNews}
          newsRef={alumniRef}
          setAutoScroll={setAlumniAutoScroll}
          gradientClass="bg-gradient-to-r from-blue-500 to-blue-300"
        />
      </div>
    </div>
  );
};

export default NewsBoard;
