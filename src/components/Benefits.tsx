import { TbClock24 } from "react-icons/tb";
import { GrAtm } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import { MdPublishedWithChanges } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

const Benefits = () => {
  const dataBenefits = [
    {
      beneficio: "24/7 Convenience",
      texto: "Easy banking access at all times.",
      icono: <TbClock24 size={50} />,
    },
    {
      beneficio: "Operational Efficiency",
      texto: "Lightens branch load and enhances transactions.",
      icono: <GrAtm size={50} />,
    },
    {
      beneficio: "Simplified Transactions",
      texto: "Streamlines and facilitates financial processes.",
      icono: <GrTransaction size={50} />,
    },
    {
      beneficio: "Global Cash Withdrawals",
      texto: "Vital access in emergency situations.",
      icono: <BiWorld size={50} />,
    },
  ];
  return (
    <section className="text-gray-600 body-font bg-[#f8f8ff]">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#0D1717] mb-4">
            Benefits
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Empower your financial experience with our Automated Teller Machine
            (ATM) services. Explore a world of benefits, from round-the-clock
            convenience to streamlined transactions and global cash access,
            ensuring your financial needs are met seamlessly. Discover the
            advantages that redefine banking accessibility and efficiency
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-amber-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 items-center justify-center">
          {dataBenefits.map((item) => (
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-[#0D1717] mb-5 flex-shrink-0">
                {item.icono}
              </div>
              <div className="flex-grow space-y-1">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  {item.beneficio}
                </h2>
                <p className="leading-relaxed text-base">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section className="bg-white dark:bg-gray-900">
    //   <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    //     <div className="max-w-screen-md mb-8 lg:mb-16">
    //       <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
    //         BENEFITS
    //       </h2>
    //       <p className="text-gray-500 sm:text-xl dark:text-gray-400">
    //         Enhance your banking experience with our Automated Teller Machine
    //         (ATM) network, offering 24/7 convenience and efficient transactions.
    //         Access cash easily anywhere, especially in emergency situations.
    //       </p>
    //     </div>
    //     <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
    //       <div>
    //         <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
    //           <TbClock24 size={"25rem9"} />
    //         </div>
    //         <h3 className="mb-2 text-xl font-bold dark:text-white">
    //           24/7 convenience for banking services.
    //         </h3>
    //         <p className="text-gray-500 dark:text-gray-400">-</p>
    //       </div>
    //       <div>
    //         <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
    //           <svg
    //             className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
    //           </svg>
    //         </div>
    //         <h3 className="mb-2 text-xl font-bold dark:text-white">
    //           Reduces branch load, boosts efficiency.
    //         </h3>
    //         <p className="text-gray-500 dark:text-gray-400">-</p>
    //       </div>
    //       <div>
    //         <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
    //           <svg
    //             className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
    //               clip-rule="evenodd"
    //             ></path>
    //             <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
    //           </svg>
    //         </div>
    //         <h3 className="mb-2 text-xl font-bold dark:text-white">
    //           Streamlines transactions.
    //         </h3>
    //         <p className="text-gray-500 dark:text-gray-400">-</p>
    //       </div>
    //       <div>
    //         <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
    //           <svg
    //             className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
    //             <path
    //               fill-rule="evenodd"
    //               d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
    //               clip-rule="evenodd"
    //             ></path>
    //           </svg>
    //         </div>
    //         <h3 className="mb-2 text-xl font-bold dark:text-white">
    //           Enables widespread cash withdrawal, vital in emergencies.
    //         </h3>
    //         <p className="text-gray-500 dark:text-gray-400">-</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Benefits;
