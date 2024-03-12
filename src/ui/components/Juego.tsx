import { BsArrowsFullscreen } from "react-icons/bs";

function Juego() {
  return (
    <section className="bg-background  body-font relative">
      <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="py-5 lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="http://185.236.248.96:3000/"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <div
                style={{
                  backgroundColor: "#1c1c1c", // Corregido: Valor entrecomillado
                }}
              >
                <BsArrowsFullscreen
                  style={{
                    color: "#ffffff", // Corregido: Valor entrecomillado
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="max-w-2xl mx-auto">
            <div className="bg-leaderboard p-4 max-w-md rounded-lg border shadow-md sm:p-8 ">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold leading-none text-white ">
                  Leaderboard
                </h3>
                <a
                  href="#"
                  className="text-sm font-medium text-white hover:underline "
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          Neil Sims
                        </p>
                        <p className="text-sm text-white truncate ">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-white font-semibold">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="Bonnie image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate ">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-white truncate ">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white ">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Michael image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          Michael Gough
                        </p>
                        <p className="text-sm text-white truncate">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white">
                        $67
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          alt="Lana image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate ">
                          Lana Byrd
                        </p>
                        <p className="text-sm text-white truncate">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white">
                        $367
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Thomas image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate ">
                          Thomes Lean
                        </p>
                        <p className="text-sm text-white truncate">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white ">
                        $2367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Juego;
