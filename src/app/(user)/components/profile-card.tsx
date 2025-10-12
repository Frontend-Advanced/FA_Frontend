import Image from "next/image";
import { USER_SOCIALS_ICONS } from "@/constants";

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-full shadow-lg py-8 px-16">
      <div className="md:flex justify-between items-center">
        {/* profile user info */}
        <div>
          <h2 className="text-2xl font-bold">Navid Abbaszedeh</h2>
          <p className="text-[var(--secondary)]">
            Fullstack Engineer and Systems Architect
          </p>
        </div>

        {/* profile user socials */}
        <div>
          <button className="bg-[#004715] text-white rounded-md py-2 px-8 hover:bg-[#00360f] transition cursor-pointer">
            Follow
          </button>

          {/* social icons */}
          <div className="flex gap-2 mt-4">
            {USER_SOCIALS_ICONS.map((icon) => (
              <a key={icon.id} href="#" className="flex items-center">
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={24}
                  height={24}
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
