import Image from "next/image";
import { USER_SOCIALS_ICONS } from "@/constants";

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg py-6 px-6 md:px-12 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        {/* profile user info */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold mb-1">Navid Abbaszedeh</h2>
          <p className="text-[var(--secondary)] text-sm md:text-base">
            Fullstack Engineer and Systems Architect
          </p>
        </div>

        {/* profile user socials */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button className="bg-[#004715] text-white rounded-lg py-2.5 px-10 hover:bg-[#00360f] transition-colors cursor-pointer font-medium text-sm whitespace-nowrap shadow-sm hover:shadow-md">
            Follow
          </button>

          {/* social icons */}
          <div className="flex gap-3 mt-1">
            {USER_SOCIALS_ICONS.map((icon) => (
              <a
                key={icon.id}
                href="#"
                className="flex items-center hover:opacity-70 transition-opacity"
              >
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={20}
                  height={20}
                  priority
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
