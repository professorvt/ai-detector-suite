// interface AdBannerProps {
//   position: "Top" | "Bottom";
//   darkMode: boolean;
// }

// const AdBanner = ({ position, darkMode }: AdBannerProps) => {
//   const publisherId = import.meta.env.VITE_PUBLISHER_ID;
//   const slotId = import.meta.env.VITE_AD_SLOT_ID;
//   return (
//     <div
//       className={`h-16 lg:h-20 m-4 rounded-lg flex items-center justify-center text-sm font-mono border border-dashed ${darkMode ? "bg-white/5 border-white/10 text-gray-500" : "bg-gray-200 border-gray-300 text-gray-500"}`}
//     >
//       {position.toUpperCase()} AD BANNER SPACE
//     </div>
//   );
// };

// export default AdBanner;

import { useEffect, useRef } from "react";

interface AdBannerProps {
  position: "Top" | "Bottom";
  darkMode: boolean;
}

// Global declaration for Adsense
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdBanner = ({ position, darkMode }: AdBannerProps) => {
  // 1. Env variables se ID uthao
  const publisherId = import.meta.env.VITE_PUBLISHER_ID;
  const slotId = import.meta.env.VITE_AD_SLOT_ID;
  const adRan = useRef(false);

  useEffect(() => {
    // 2. Ad Push logic (Strict Mode me double run rokne ke liye check)
    if (adRan.current === false) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense Error:", e);
      }
      adRan.current = true;
    }
  }, []);

  // 3. Agar IDs nahi hain, to Placeholder dikhao (Development ke liye)
  if (!publisherId || !slotId) {
    return (
      <div
        className={`h-24 m-4 rounded-lg flex items-center justify-center text-sm font-mono border border-dashed ${darkMode ? "bg-white/5 border-white/10 text-gray-500" : "bg-gray-200 border-gray-300 text-gray-500"}`}
      >
        {position} AD SPACE (ID MISSING IN .ENV)
      </div>
    );
  }

  return (
    <div className="flex justify-center my-4 overflow-hidden">
      {/* 4. Asli Google Ad Code */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "300px", minHeight: "90px" }}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;
