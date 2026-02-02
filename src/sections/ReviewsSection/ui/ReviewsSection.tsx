export const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      text: "The food was amazing and packaged very well!! The shop was super clean and well decorated. I would defo recommend, staff were really helpful and friendly too! I'll be going back soon.",
      stars: 5,
    },
    {
      name: "Mark Thompson",
      text: "amazing hygiene! a plus is that the food tastes amazing, there service is amazing and the staff themselves are nice. inside looks incredible and looks comfy! would recommend",
      stars: 5,
    },
    {
      name: "The Miller Family",
      text: "Hi. Can i just say your food was absolutely amazing!! Its the best weve ever had. We had a little mix up with order but it was sorted straight away. You were all very professional and again food was unreal. We had a very happy family of 5 fed last night. Well done. Xx",
      stars: 5,
    },
    {
      name: "David Wilson",
      text: "Visited for the first time and can honestly say this place is amazing. My big smash burger was full of flavour, I can honestly say it was out of this world. Fries were lovely and the milkshake was magnificent. Couple of really friendly guys in there with some top level banter and the place was really clean. Highly recommended, big smash is taking over!",
      stars: 5,
    },
    {
      name: "Elena Rodriguez",
      text: "The service was incredible! And so was the quality of the food. I ordered the Big Smash and loaded fries to share and it was incredible!! can wait to be back again",
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="pt-12 md:pt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-7xl text-[#f1a123] font-extrabold text-center mb-8">
          REVIEWS
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 text-white rounded-tr-[50px] rounded-bl-[50px] shadow-xl flex flex-col justify-between w-full md:w-[calc(45%)] lg:w-[calc(30%)]"
            >
              <div>
                <div className="flex justify-center">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 fill-[#f1a123]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic leading-relaxed text-center">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <p className="font-bold text-xl text-center">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
