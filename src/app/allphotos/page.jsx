import PhotoCard from "@/component/PhotoCard";
import SearchBox from "@/component/SearchBox";

const Allpage = async ({ searchParams }) => {
  const params = await searchParams;

  const query = decodeURIComponent(params?.q || "")
    .toLowerCase()
    .trim();

  const res = await fetch("http://localhost:3000/data.json");

  const photos = await res.json();

  const filteredPhotos = query
    ? photos.filter((photo) =>
        photo.title.toLowerCase().includes(query)
      )
    : photos;

  return (
    <div>
      <SearchBox />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Allpage;