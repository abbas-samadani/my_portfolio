import React from "react";

const About = () => {
  return (
    <div
      id="aboutme"
      className="min-h-screen max-w-6xl px-5 pt-10 pb-16 md:pb-10"
    >
      <div className="text-center mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
          About Me
        </h1>
        {/* <h3 className="text-xl mb-5 font-light">
                Some of the awesome comments from our YouTube channel.
              </h3> */}
        <div className="text-center mb-10">
          {/* Custom Style Used */}
          <span className="line w-1"></span>
          <span className="line w-3"></span>
          <span className="line w-40"></span>
          <span className="line w-3"></span>
          <span className="line w-1"></span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 justify-items-center">
        <img
          src="/About_img.jpg"
          alt="Abbas Samadani"
          className="border-[16px] mb-5 md:m-0 md:h-5/6 border-black"
        />
        <div className="flex flex-col h-5/6 gap-7 font-mono justify-between text-justify">
          <span className="text-xl sm:text-2xl">
            Full Stack Developer with 5 years of experience is seeking to obtain a challenging position that utilizes
            current knowledge of web development and design. Having a positive outlook and am always willing to
            learn new traits. I work well both independently and as part of a team.
          </span>
          <table className="flex flex-col text-lg sm:text-xl gap-5">
            <tr className="flex justify-between">
              <th>Name</th>
              <td>Abbas Samadani</td>
            </tr>
            <tr className="flex justify-between">
              <th>Education</th>
              <td>Master</td>
            </tr>
            <tr className="flex justify-between">
              <th>Occupation</th>
              <td>Software Developer</td>
            </tr>
            <tr className="flex justify-between">
              <th>Hobbies</th>
              <td>Traveling</td>
            </tr>
          </table>
          <div className="grid grid-cols-3 gap-3 text-lg">
            <a
              href="https://github.com/abbas-samadani"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 btn2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abbas-samadani-40264a1ba/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 btn2"
            >
              LinkedIn
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
