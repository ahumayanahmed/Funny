import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
       className="h-[80vh] w-full bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mt-10 overflow-hidden"
      style={{
        backgroundImage: "url('/logo.png')",
        backgroundSize: "85%",
      }}
    >
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <div className="flex gap-4">
            <Link href="/allphotos">
              <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
                Browse Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;