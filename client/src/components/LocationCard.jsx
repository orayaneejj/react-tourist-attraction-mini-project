function LocationCard({ img, title, description, url, tags }) {
  return (
    <>
      <section className="px-10 mt-10">
        <div className="flex">
          <img src={img[0]} className="main-img w-96 h-64 rounded-3xl" />
          <div className="flex flex-col justify-between ml-4 w-2/3">
            <div>
              <h2 className="text-lg font-bold text-gray-800">{title}</h2>
              <p className="text-gray-600 mt-1">
                {description}
                <br />
                <a
                  href={url}
                  target="_blank"
                  className="underline text-blue-500"
                >
                  อ่านต่อ
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">หมวด</span>
              {tags.map((tag) => (
                <span className="text-sm text-gray-500 underline">{tag}</span>
              ))}
            </div>
            <div className="thumbnail-img flex gap-2">
              <img src={img[1]} className="w-20 h-20 rounded-lg object-cover" />
              <img src={img[2]} className="w-20 h-20 rounded-lg object-cover" />
              <img src={img[3]} className="w-20 h-20 rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default LocationCard;
