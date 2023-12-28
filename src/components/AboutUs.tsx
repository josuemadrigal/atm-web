const AboutUs = () => {
  return (
    <section id="aboutUs" className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            I & P ATM and Technology Services
          </h2>
          <p className="mb-4">
            Is a leading service company committed to enhancing customer
            attraction. Our mission is to provide innovative technological
            solutions, focusing on optimizing the customer experience in ATMs
            and financial services environments.
          </p>
          <p>
            With a forward-thinking approach, we strive to boost customer
            satisfaction and operational efficiency through cutting-edge
            technological solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="h-96 rounded-lg object-cover mb-10"
            src="/atm-03.webp"
            alt="office content 1"
          />
          <img
            className="mt-4 h-96 lg:mt-10 rounded-lg object-cover "
            src="/atm01.jpeg"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
