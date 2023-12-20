import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/foto-banner.jpeg"
        className="absolute justify-end object-cover w-full h-full "
        alt=""
      />

      <motion.div
        className="bg-white  flex  opacity-70  aspect-[1155/678] absolute justify-center lg:w-96 lg:h-96   mix-blend-overlay "
        animate={{
          scale: [0.5, 1, 2, 4, 2, 1, 0.5],
          rotate: [10, 20, 180, 180, 20, 10, 0],
          borderRadius: ["30%", "40%", "50%", "60", "50%", "40%", "30%"],
        }}
        transition={{
          duration: 5,
          ease: "anticipate",
          times: [0.2, 0.8, 1, 0.8, 0.4],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        {" "}
      </motion.div>
      <div className="relative bg-opacity-80   md:pt-2 bg-gradient-to-tr from-[#0c9d44ed] from-40% via-[#0c9d4495] to-[#0e7736]">
        <div className="px-4  pt-16  mx-auto sm:px-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col items-center justify-between w-full lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <div className="">
                  <img className="w-20 mb-3" src="/isotipo-eduard.png" alt="" />
                </div>
                <div>
                  <motion.div
                    className="font-extrabold  text-6xl sx sx:text-2xl md:text-6xl xl:text-7xl mt-10 md:mt-0 xl:mt-0"
                    initial="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="inline-block bg-clip-text text-transparent  bg-gradient-to-r from-yellow-200 from-30% via-yellow-100 via-90% to-lime-100 to-100%">
                      Eduard Espiritusanto
                    </span>
                  </motion.div>
                  <p className="inline-block  py-px p-4 mb-4  text-xs font-semibold tracking-wider uppercase bg-green-900 text-green-100 rounded-full">
                    Diputado de la provincia de La Romana
                  </p>
                </div>

                <p className="text-white  md:text-base">
                  "Juntos construiremos un futuro prometedor para todos los
                  dominicanos, donde la igualdad, la justicia y el progreso sean
                  pilares fundamentales de nuestra sociedad."
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="/#biografia"
                  className="rounded-3xl bg-white px-10 py-2.5 text-sm font-semibold text-green-900 shadow-sm will-change-auto transition-all duration-500  hover:px-14 hover:bg-green-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                >
                  Biografía
                </a>

                <a
                  // href="https://registro.eduardespiritusanto.com/"
                  href="#"
                  className="rounded-3xl border-gray-100 border-2 px-10 py-2.5 text-sm font-semibold text-white shadow-sm will-change-auto transition-all duration-500  hover:px-14 hover:border-green-800 hover:bg-green-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                >
                  Registrarme
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center lg:w-1/2">
              <div className=" -ml-16 lg:-ml-32">
                <img
                  className="object-cover  inset-0 "
                  src="/foto-eduard.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
