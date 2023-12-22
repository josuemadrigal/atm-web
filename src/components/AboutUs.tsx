const AboutUs = () => {
  return (
    <div className="py-16">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <img
              src="/public/image-atm.jpg"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-400">
              I & P ATM and Technology Services
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
              is a leading service company committed to enhancing customer
              attraction. Our mission is to provide innovative technological
              solutions, focusing on optimizing the customer experience in ATMs
              and financial services environments. With a forward-thinking
              approach, we strive to boost customer satisfaction and operational
              efficiency through cutting-edge technological solutions.
            </p>

            <a
              href="https://tailus.io/contact"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                Browse now
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
