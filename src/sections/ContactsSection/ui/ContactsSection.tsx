import { Instagram, Phone, MapPin } from "lucide-react";

export const ContactsSection = () => {
  return (
    <section
      id="contacts"
      className="min-h-[70vh] flex items-center px-8 py-20"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 ">
        <span>
          <h2 className="text-3xl md:text-7xl text-[#f1a123] font-extrabold text-center">
            Contacts &
          </h2>
          <h2 className="text-3xl md:text-7xl text-white font-extrabold text-center">
            Opening Hours
          </h2>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  p-6 text-2xl font-bold">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex items-start gap-3 opacity-90">
              <MapPin width={32} height={32} />
              <span>510 Stafford Road, WV10 6AN</span>
            </div>

            <div className="flex items-center gap-3">
              <Instagram width={32} height={32} />
              <span>@BigSmashUK</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone width={32} height={32} />
              <span>01902 964669</span>
            </div>
          </div>
          <ul className="flex flex-col gap-2 text-2xl opacity-90">
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
                className="flex justify-between border-b border-white/10 pb-1"
              >
                <span>{day}</span>
                <span>11:00 am – 9:30 pm</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
