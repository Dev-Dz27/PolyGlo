// "use client";
import Link from "next/link";
import { IconWorld, } from "@tabler/icons-react";

const LanguageSwitcher = ({ currentLang, currentCountry, pageUrl }: {currentLang: string, currentCountry: string, pageUrl: string}) => {
  return (
    <div className="ml-4 flex items-center space-x-1  ">
      <p className=" text-gray-500">
        <IconWorld className="h-6 w-6" />
      </p>
      <Link
        href={`/${
          currentLang === "en" ? "fr" : "en"
        }/${currentCountry}${pageUrl}  `}
      >
        <div className="text-blue-500 hover:text-blue-600">
          {currentLang === "en" ? "Français" : "English"}
        </div>
      </Link>
    </div>
  );
};
export default LanguageSwitcher;
