import { Instagram, Phone, MapPin } from "lucide-react";

export const ContactsSection = () => {
  return (
    <section
      id="contacts"
      className="min-h-fit md:min-h-[70vh] flex items-center px-4 md:px-8 py-16 md:py-20"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-7xl text-[#f1a123] font-extrabold text-center uppercase">
            Contacts &
          </h2>
          <h2 className="text-4xl md:text-7xl text-white font-extrabold text-center uppercase">
            Opening Hours
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 p-2 md:p-6 text-xl md:text-2xl font-bold">
          <div className="flex flex-col gap-6 md:gap-4 justify-center items-center ">
            <a
              href="https://www.google.com/maps/search/?api=1&query=510+Stafford+Road,+WV10+6AN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 opacity-90 hover:text-[#f1a123] transition-colors"
            >
              <MapPin className="w-8 h-8 shrink-0 mt-1 md:mt-0" />
              <span>510 Stafford Road, WV10 6AN</span>
            </a>

            <a
              href="https://www.instagram.com/BigSmashUK/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 opacity-90 hover:text-[#f1a123] transition-colors"
            >
              <Instagram className="w-8 h-8 shrink-0" />
              <span>@BigSmashUK</span>
            </a>

            <a
              href="tel:01902964669"
              className="flex items-center gap-3 opacity-90 hover:text-[#f1a123] transition-colors"
            >
              <Phone className="w-8 h-8 shrink-0" />
              <span>01902 964669</span>
            </a>
          </div>
          <ul className="flex flex-col gap-3 md:gap-2 text-lg md:text-2xl font-semibold md:font-bold opacity-90">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <li
                key={day}
                className="flex justify-between border-b border-white/10 pb-1 gap-4"
              >
                <span className="shrink-0">{day}</span>
                <span className="text-right">11:00 am – 9:30 pm</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
