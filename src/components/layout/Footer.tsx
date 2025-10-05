import { FOOTER_COLUMN_ONE, FOOTER_COLUMN_TWO } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center py-[100px]">
      <div className="max-w-6xl h-full flex flex-1 items-start justify-between md:flex-row flex-col gap-y-10">
        <h3>FA</h3>
        <div className="flex gap-10 md:flex-row flex-col">
          <div className="space-y-2.5">
            {FOOTER_COLUMN_ONE.map((item, index) => (
              <h2
                key={index}
                className={`text-[15px] font-medium ${
                  index == 0 ? "text-foreground" : "text-gray-400 "
                } `}
              >
                {item.label}
              </h2>
            ))}
          </div>
          <div className="space-y-2.5">
            {FOOTER_COLUMN_TWO.map((item, index) => (
              <h2
                key={index}
                className={`text-[15px] font-medium ${
                  index == 0 ? "text-foreground" : "text-gray-400 "
                } `}
              >
                {item.label}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
