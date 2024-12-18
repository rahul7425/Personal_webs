import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import "./services_1.css";

const skillsData = [
  // {
  //   name: "UI/UX Design",
  //   icon: <GiNotebook className="text-4xl #1764a3" />,
  //   link: "#",
  //   description:
  //     "Our UI/UX design services deliver exceptional user experiences and intuitive interfaces, ensuring user satisfaction and engagement. We offer a range of solutions, including user research, wireframing, and prototyping.",
  //   aosDelay: "300",
  // },
  // {
  //   name: "Network Security",
  //   icon: <GiNotebook className="text-4xl #1764a3" />,
  //   link: "#",
  //   description:
  //     "Our network security services provide comprehensive protection against cyber threats, ensuring the integrity and confidentiality of your digital assets. We offer a range of solutions, including firewall configuration.",
  //   aosDelay: "300",
  // },
  // {
  //   name: "Internet of things(IOT)",
  //   icon: <FaCameraRetro className="text-4xl #1764a3	" />,
  //   link: "#",
  //   description: "Our IoT solutions deliver robust support for connected devices, ensuring secure and efficient operations. We provide a variety of services, including device optimization and advanced security measures.",
  //   aosDelay: "0",
  // },
 
  {
    name: "AR/VR Development",
    icon: <SlNote className="text-4xl #1764a3" />,
    link: "#",
    description:
      "Our AR/VR development services harness the power of immersive technology to create captivating experiences that engage and delight users. From ideation to implementation, we specialize in designing and developing custom AR/VR applications tailored to your unique needs and objectives.",
    aosDelay: "500",
  },
  {
    name: "Blockchain Development",
    icon: <SlNote className="text-4xl #1764a3" />,
    link: "#",
    description:
      "Our blockchain development services encompass a wide range of solutions aimed at leveraging the transformative potential of distributed ledger technology. From conceptualization to deployment, we specialize in designing and implementing custom blockchain solutions tailored to your specific business requirements.",
    aosDelay: "700",
  },

  {
    name: "Product Development",
    icon: <SlNote className="text-4xl #1764a3" />,
    link: "#",
    description:
      "Our product development services drive innovation from concept to launch, ensuring market readiness and customer satisfaction. We offer a range of solutions, including market research, prototyping, and product lifecycle management.. With a focus on collaboration and iteration, we iterate on prototypes, refine features, and optimize user experiences to deliver products that stand out in today's competitive landscape.",
    aosDelay: "700",
  },

];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
              style={{ color: "#1764a3" }}
            >
              Explore Our Extra Services...
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm new_peregrapm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
                style={{ background: "white", color: "black" }}
              >
                <div>{skill.icon}</div>
                <h1
                  className="text_hedding"
                  style={{
                    fontSize: "22px",
                    fontFamily: "sans-serif",
                    fontWeight: "700",
                  }}
                >
                  {skill.name}
                </h1>
                <p
                  className="text-gray-600 dark:text-gray-400"
                  style={{ color: "black" }}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            {/* <button
              style={{ backgroundColor: "#ab0000" }}
              className="primary-btn"
            >
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
