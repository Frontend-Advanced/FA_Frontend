import Image from "next/image";
import ProfileCard from "@/app/(user)/components/profile-card";
import ProfileTabs from "../components/profile-tabs";

const UserProfile = () => {
  return (
    // black background section
    <div className="relative">
      <div className="bg-[var(--foreground)] h-64 relative">
        {/* profile card centered on black background*/}
        <div className="flex justify-center items-center h-full">
          <div className="relative w-32 h-32">
            <Image
              src="/demo.jpeg"
              alt="Profile"
              fill
              priority
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Profile info */}
      <div className="max-w-6xl mx-auto">
        <div className="relative -mt-12 z-10 px-4">
          <ProfileCard />
        </div>
      </div>

      {/* profile tabs */}
      <ProfileTabs />
    </div>
  );
};

export default UserProfile;
