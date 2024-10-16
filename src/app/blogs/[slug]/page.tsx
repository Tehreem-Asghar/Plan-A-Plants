import Image from "next/image";

interface BlogPostProps {
  params: { slug: string };
}

const BlogPost = ({ params }: BlogPostProps) => {
  const { slug } = params;

  return (
    <main className="min-h-screen bg-[#506B52] flex flex-col ">
      <section className="flex-grow flex justify-center items-center">
        {slug === "8-Best-Low-Maintenance-Plants-For-a-Busy-Home" ? (
          <article className="h-auto w-3/4 bg-white p-10 rounded-lg shadow-lg my-10">
            <h1 className="text-2xl font-bold font-sans text-green-900 text-center">
              8 Best Low Maintenance Plants for a Busy Home
            </h1>
            <p className="mt-4 md:text-lg lg:text-lg text-gray-700 ">
              In our fast-paced lives, finding the time to care for plants can
              be challenging. Luckily, there are several low-maintenance plants
              that can thrive with minimal attention while adding beauty and
              fresh air to your home. Here is a list of the best low-maintenance
              plants that are perfect for busy lifestyles.
            </p>

            <div>
              <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                1. Snake Plant (Sansevieria Trifasciata)
              </h2>
              <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5  ">
                <p className="text-gray-700 md:text-lg lg:text-lg mb-8 md:mb-0 lg:mb-0 ">
                  Snake Plant Also known as the{" "}
                  <strong>Mother-in-Laws Tongue</strong>, the Snake Plant is
                  nearly indestructible. It thrives in low light and requires
                  infrequent watering, making it a perfect choice for those who
                  often forget to tend to their plants.
                </p>
                <Image
                  src="/images/blogs/SnakePlant.jpg"
                  alt="snake plant"
                  width={300}
                  height={350}
                  className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                2. ZZ Plant (Zamioculcas zamiifolia)
              </h2>
              <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                <Image
                  src="/images/blogs/zz.jpeg"
                  alt="ZZ Plant"
                  width={300}
                  height={300}
                  className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                />
                <p className="text-gray-700 md:text-lg lg:text-lg mt-8 md:mt-0 lg:mt-0">
                  The ZZ Plant (Zamioculcas zamiifolia) is a low-maintenance
                  indoor plant that easily tolerates low light, drought, and
                  neglect, making it perfect for busy people. Its glossy, dark
                  green leaves add a fresh and elegant touch to any space. While
                  it thrives best in indirect light, it can also survive in
                  low-light areas. It only needs water when the soil is
                  completely dry, so avoiding overwatering is important. The ZZ
                  Plant also helps improve air quality but should be kept away
                  from pets and small children due to its toxicity. Simple yet
                  stylish, it easily fits into any lifestyle.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  3. Pothos (Epipremnum aureum)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <p className="text-gray-700 md:text-lg lg:text-lg mb-8 md:mb-0 lg:mb-0">
                    Pothos is a versatile indoor vine that thrives in various
                    lighting conditions, from bright indirect light to low
                    light. It only needs watering every couple of weeks, making
                    it easy to maintain. Plus, it propagates easily, so you can
                    grow new plants from cuttings. Its low-maintenance nature
                    and beautiful trailing vines make it an excellent choice for
                    beginners and plant lovers alike.
                  </p>
                  <Image
                    src="/images/blogs/pothos.jpeg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  4. Peace Lily (Spathiphyllum)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <Image
                    src="/images/blogs/peaceLily.jpeg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                  />
                  <p className="text-gray-700 md:text-lg lg:text-lg mt-8 md:mt-0 lg:mt-0">
                    The Peace Lily is an attractive plant known for its stunning
                    white flowers and ability to flourish in low light
                    conditions, making it an excellent choice for indoor spaces.
                    This low-maintenance plant only requires watering when the
                    soil is dry, making it easy to care for. Additionally, the
                    Peace Lily is known for its air-purifying qualities, helping
                    to enhance the air quality in your home while adding a touch
                    of elegance to your decor.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  5. Spider Plant (Chlorophytum comosum)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <p className="text-gray-700 md:text-lg lg:text-lg mb-8 md:mb-0 lg:mb-0">
                    Spider Plants are hardy and adaptable, thriving in a range
                    of conditions. They prefer indirect sunlight and require
                    watering only when the topsoil feels dry. One of their
                    charming features is their ability to produce cute baby
                    plants, known as pups, which you can easily share with
                    friends or propagate into new plants. Their resilience and
                    unique look make them a delightful addition to any indoor
                    space!
                  </p>
                  <Image
                    src="/images/blogs/Spider.jpg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  6. Rubber Plant (Ficus elastica)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <Image
                    src="/images/blogs/rubber.jpg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                  />
                  <p className="text-gray-700 md:text-lg lg:text-lg mt-8 md:mt-0 lg:mt-0">
                    The Rubber Plant is known for its large, glossy leaves that
                    add elegance to any space. It can thrive in different
                    lighting conditions and tolerates drought quite well.
                    Additionally, this plant possesses air-purifying qualities,
                    helping to clean the air in your home. Its easy maintenance
                    makes it a perfect choice for busy lifestyles.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  7. Cast Iron Plant (Aspidistra elatior)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <p className="text-gray-700 md:text-lg lg:text-lg mb-8 md:mb-0 lg:mb-0">
                    As the name suggests, the Cast Iron Plant is incredibly
                    tough. It can withstand low light and neglect, making it
                    ideal for anyone looking to add greenery without much
                    effort. Its thick, dark green leaves give it a unique
                    appearance, and it requires very little watering, making it
                    an excellent low-maintenance option.
                  </p>
                  <Image
                    src="/images/blogs/castIron.webp"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  8. Aloe Vera
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <Image
                    src="/images/blogs/alovera.jpeg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg"
                  />
                  <p className="text-gray-700 md:text-lg lg:text-lg mt-8 md:mt-0 lg:mt-0">
                    Aloe Vera is not just a useful medicinal plant but also
                    low-maintenance. It thrives in bright, indirect sunlight and
                    needs watering only every few weeks. Aloe Vera unique
                    ability to purify the air and its gel being beneficial for
                    skin care make it a practical addition to any home.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-800 mt-8 mb-6">
                  Conclusion
                </h2>
                <p className="text-gray-700 text-xl lg:text-lg mb-8 md:mb-0 lg:mb-0">
                  Adding plants to your home does not have to be a
                  time-consuming task. With these low-maintenance options, you
                  can enjoy the beauty of nature without the stress of extensive
                  care. Choose the plants that resonate with you and enhance
                  your space while fitting seamlessly into your busy lifestyle!
                </p>
              </div>
            </div>
          </article>
        ) : (
          <article className="h-auto w-3/4 bg-white p-10 rounded-lg shadow-lg my-10">
            <h1 className="text-2xl font-bold font-sans text-green-900 text-center">
              Air Purifying Plants You Should Take Home Today
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg lg:text-lg ">
              In today world, where pollution levels are rising, we often forget
              that our indoor air can be just as polluted as the air outside.
              Luckily, nature has provided us with a natural solution:
              air-purifying plants! These green beauties not only brighten up
              your home but also help filter out toxins from the air. Let’s dive
              into some of the best air-purifying plants you should consider
              bringing home today.
            </p>

            <div>
              <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                1. Snake Plant (Sansevieria Trifasciata)
              </h2>
              <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5  ">
                <p className="text-gray-700 md:text-lg lg:text-lg mb-8 md:mb-0 lg:mb-0 ">
                  Known as Mother-in-Laws Tongue, this plant is famous for
                  thriving in low light and requires minimal watering. It
                  filters toxins like formaldehyde and benzene and releases
                  oxygen at night, making it ideal for your bedroom to improve
                  air quality while you sleep.
                </p>
                <Image
                  src="/images/blogs/SnakePlant.jpg"
                  alt="snake plant"
                  width={300}
                  height={350}
                  className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                2. Spider Plant (Chlorophytum Comosum)
              </h2>
              <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                <Image
                  src="/images/blogs/Spider.jpg"
                  alt="ZZ Plant"
                  width={300}
                  height={300}
                  className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                />
                <p className="text-gray-700 md:text-lg lg:text-lg mt-8 md:mt-0 lg:mt-0">
                  The Spider Plant is an ideal choice for beginners as it grows
                  rapidly and requires minimal care. Not only does it purify the
                  air by removing pollutants like carbon monoxide and
                  formaldehyde, but it also produces baby offshoots that can be
                  easily replanted to grow new plants. An added benefit is that
                  it is pet-friendly, making it a safe option for households with
                  cats or dogs, ensuring your furry friends stay protected.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  3. Peace Lily (Spathiphyllum)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <p className="text-gray-700 md:text-lg lg:text-lg mb-8 md:mb-0 lg:mb-0">
                    The Peace Lily, known for its elegant white flowers, is an
                    excellent air purifier that absorbs harmful substances like
                    ammonia, formaldehyde, and mold spores. This makes it
                    especially suitable for bathrooms and kitchens. It thrives
                    with minimal care, requiring only occasional watering,
                    making it a low-maintenance yet stylish addition to any
                    space in your home.
                  </p>
                  <Image
                    src="/images/blogs/peaceLily.jpeg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  4. English Ivy (Hedera Helix)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <Image
                    src="/images/blogs/englishLvy.jpeg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                  />
                  <p className="text-gray-700 md:text-lg lg:text-lg mt-8 md:mt-0 lg:mt-0">
                    English Ivy is highly effective at eliminating mold
                    particles, making it a great choice for those with allergies
                    or respiratory issues. In addition to reducing mold, it
                    purifies the air by filtering out formaldehyde, contributing
                    to a healthier indoor environment. While it is easy to grow
                    and maintain, it is essential to keep it away from pets, as
                    it can be toxic to cats and dogs if ingested. With a bit of
                    care, English Ivy can be a beautiful and beneficial addition
                    to your home.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  5. Aloe Vera
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <p className="text-gray-700 md:text-lg lg:text-lg mb-8 md:mb-0 lg:mb-0">
                    Aloe Vera is renowned for its healing properties, providing
                    relief for burns, cuts, and skin irritations. Beyond its
                    medicinal benefits, it also purifies the air by filtering
                    out pollutants like formaldehyde and benzene. This
                    low-maintenance plant thrives in sunny spots, making it an
                    ideal choice for bright windowsills or well-lit areas. With
                    its dual benefits of air purification and natural healing,
                    Aloe Vera is both practical and decorative.
                  </p>
                  <Image
                    src="/images/blogs/alovera.jpeg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  6. Boston Fern (Nephrolepis Exaltata)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <Image
                    src="/images/blogs/bostonFern.jpeg"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg "
                  />
                  <p className="text-gray-700 md:text-lg lg:text-lg mt-8 md:mt-0 lg:mt-0">
                    This lush, feathery plant is not only beautiful but also an
                    excellent air purifier. It effectively removes harmful
                    toxins such as formaldehyde and xylene from the air.
                    Additionally, it functions as a natural humidifier, helping
                    to maintain moisture levels, which makes it perfect for dry
                    indoor spaces. With its ability to improve air quality and
                    add a touch of greenery, this plant is both practical and
                    aesthetically pleasing.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif text-green-800 mt-8 mb-6">
                  7. Areca Palm (Dypsis Lutescens)
                </h2>
                <div className="flex flex-col justify-evenly md:flex-row lg:flex-row gap-x-5">
                  <p className="text-gray-700 md:text-lg lg:text-lg mb-8 md:mb-0 lg:mb-0">
                    Also called the butterfly palm, this plant is an excellent
                    natural humidifier that helps maintain indoor moisture
                    levels. It is known for filtering out toxins like benzene,
                    formaldehyde, and trichloroethylene, making it perfect for
                    improving air quality. With its elegant fronds and easy
                    maintenance, it is an ideal addition to living rooms, adding
                    both beauty and health benefits to your space.
                  </p>
                  <Image
                    src="/images/blogs/arecapalm.webp"
                    alt="snake plant"
                    width={300}
                    height={350}
                    className="w-full sm:h-52 lg:h-80 h-36 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-800 mt-8 mb-6">
                  Why You Should Bring These Plants Home
                </h2>
                <p className="text-gray-700 text-xl lg:text-lg mb-8 md:mb-0 lg:mb-0">
                  Not only do these plants enhance your home aesthetic, but they
                  also improve your health. Breathing in cleaner air can reduce
                  the risk of respiratory issues, headaches, and allergies.
                  Plus, tending to indoor plants has been shown to boost mood
                  and reduce stress.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-800 mt-8 mb-6">
                  Final Thoughts
                </h2>
                <p className="text-gray-700 text-xl lg:text-lg mb-8 md:mb-0 lg:mb-0">
                  With so many benefits, adding these air-purifying plants to
                  your home is a no-brainer. Whether you are a seasoned plant
                  parent or a beginner, these plants are easy to care for and
                  make a big impact. So, why wait? Order from our website today
                  and make these powerful plants a part of your home!
                </p>
              </div>
            </div>
          </article>
        )}
      </section>
    </main>
  );
};

export default BlogPost;
