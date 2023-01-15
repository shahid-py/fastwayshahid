function Hero() {
    return (
      <div class="overflow-hidden mt-2.5">
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex flex-row flex-wrap">
            <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              <div class="relative  max-h-98  bg-orange-100 ">
                <a href="#">
                  <img
                    class="max-w-fit w-fit  h-96 ml-auto"
                    src="/smartphones.png"
                    alt="Image description"
                  ></img>
                </a>
                <div class="absolute px-12 pt-8 pb-5 bottom-16 w-full ">
                  <a href="#">
                    <h2 class="text-3xl  font-bold  text-orange-500 mb-3 ">
                       SmartPhones
                    </h2>
                  </a>
                  <p class="text-orange-500  text-sm text-justify w-3/4 	">
                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid-unt labore edolore magna aliquapendisse ultrices
                    gravida.
                  </p>
                  <div class="pt-2">
                    <div class=" mt-3 underline text-orange-500 decoration-red-500 font-semibold">
                      SHOP NOW
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="flex-shrink max-w-full w-full lg:w-1/2">
              <div class="box-one flex flex-row flex-wrap">
                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                  <div class="relative hover-img max-h-48 bg-green-100 overflow-hidden">
                    <a href="#">
                      <img
                        class="max-w-fit w-fit ml-auto h-48"
                        src="/laptops.png"
                        alt="Image description"
                      ></img>
                    </a>
            
                  </div>
                </article>
  
                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                  <div class="relative hover-img max-h-48  bg-blue-100 overflow-hidden">
                    <a href="#">
                      <img
                        class="max-w-fit w-fit ml-auto h-48"
                        src="/fragrance.png"
                        alt="Image description"
                      ></img>
                    </a>
                   
                  </div>
                </article>
                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                  <div class="relative hover-img max-h-48  bg-pink-100 overflow-hidden">
                    <a href="#">
                      <img
                        class="max-w-fit w-fit ml-auto h-48"
                        src="/skincare.png"
                        alt="Image description"
                      ></img>
                    </a>
                   
                  </div>
                </article>
                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                  <div class="relative hover-img max-h-48  bg-cyan-100 overflow-hidden">
                    <a href="#">
                      <img
                        class="max-w-fit w-fit ml-auto h-48"
                        src="/homedecore.png"
                        alt="Image description"
                      ></img>
                    </a>
                   
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;