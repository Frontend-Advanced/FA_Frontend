"use client";
import { useState } from "react";
import { USER_PROFILE_TABS } from "@/constants";

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("achievements");

  return (
    <div className="p-6">
      {/* Tab buttons */}
      <div className="flex items-center justify-between gap-2 border-b border-gray-200 pb-4 max-w-2xl mx-auto">
        {USER_PROFILE_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 cursor-pointer font-medium rounded-t-lg transition ${
              activeTab === tab.id
                ? "text-[#004715] border-b-2 border-[#004715]"
                : "text-gray-600 hover:text-[#004715]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-6 bg-[var(--foreground)] text-white p-8 rounded-2xl text-center max-w-96">
        {USER_PROFILE_TABS.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
          >
            <h1 className="text-2xl font-bold mb-1">{tab.heading}</h1>
            <p className="leading-relaxed text-sm">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
