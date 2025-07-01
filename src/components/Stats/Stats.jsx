const Stat = () => {
  return (
    <div>
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div class="relative pl-10 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
              <div class="relative w-full max-w-3xl ml-auto">
                <div class="overflow-hidden aspect-w-3 aspect-h-4">
                  <img
                    class="object-cover w-[450px] h-full scale-150 lg:ml-40"
                    src="https://tennis-sportclub.axiomthemes.com/wp-content/uploads/elementor/thumbs/image-1-copyright-q60w7dk5pftnr2m90xhdvpz3lvpq50gi0rzw8t3l78.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="md:order-1">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                We welcome you to our club
              </h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                We're excited to welcome you to our vibrant Sports Event Club —
                where passion meets performance! Whether you're a seasoned
                athlete, a weekend warrior, or just a fan of the game, our club
                is the perfect place to connect with fellow sports lovers, stay
                active, and take part in thrilling events year-round.
              </p>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                At our core, we believe in the power of sport to bring people
                together, build lasting friendships, and create unforgettable
                memories. From organizing competitive tournaments and
                recreational games to hosting social meetups and wellness
                sessions, our club is more than just about sports — it's a
                community.
              </p>

              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Join Now{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Stat;
