import React from "react";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;         
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-1">
      {icon}
      <span className="text-[10px] font-bold">
        {value} {label}
      </span>
    </div>
  );
};

export default StatItem;
