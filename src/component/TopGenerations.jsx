import Marquee from "react-fast-marquee";
import Marque from "./Marque";
import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 4);

  return (
    <div className="mt-10">

      <div className="bg-amber-200 text-black py-2">
        <Marquee speed={60} pauseOnHover>
          <span className="whitespace-nowrap">
            New Arrival:{" "}
            {topPhotos.map((p) => p.title).join(" | ")}
            {" | "} 
          </span>
        </Marquee>
      </div>
      {/* TITLE */}
      <h1 className="text-2xl font-bold  my-5">সেরা চার গরু </h1>

      {/* GRID */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
        {topPhotos.map((photo) => (
          <div key={photo.id} className="flex flex-col gap-2">

            <PhotoCard photo={photo} />

          </div>
        ))}
      </div>

    </div>
  );
};

export default TopGenerations;