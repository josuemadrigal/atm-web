import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Team = () => {
  const teamData = [
    {
      image: "/isaac.jpeg",
      nombre: "Juan Isaac Santana",
      puesto: "CEO-Co/Founder",
      twitter: "/",
      instagram: "/",
      facebook: "/",
      linkedin: "/",
    },
    {
      image: "/paniagua.jpeg",
      nombre: "Edgar Paniagua",
      puesto: "COO-Co/Founder",
      twitter: "/",
      instagram: "/",
      facebook: "/",
      linkedin: "/",
    },
  ];
  return (
    <div className="py-20 dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Our team
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
            ---
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 mx-96">
          {teamData.map((team) => (
            <div className="space-y-6 text-center bg-emera ld-600">
              <img
                className="mx -auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src={team.image}
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  {team.nombre}
                </h4>
                <span className="block text-sm text-gray-500">
                  {team.puesto}
                </span>
              </div>
              <div className="flex justify-center space-x-4 text-gray-500">
                <a href={team.facebook} target="_blank" aria-label="facebook">
                  <FaFacebookSquare />
                </a>
                <a href={team.instagram} target="_blank" aria-label="instagram">
                  <FaSquareInstagram />
                </a>
                <a href={team.twitter} target="_blank" aria-label="instagram">
                  <FaSquareXTwitter />
                </a>
                <a href={team.linkedin} target="_blank" aria-label="instagram">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
