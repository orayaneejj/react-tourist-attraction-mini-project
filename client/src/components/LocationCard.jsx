import copyIcon from "../assets/link.png";
function LocationCard({ img, title, description, url, tags, onTagClick }) {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);

      alert("คัดลอก URL เรียบร้อยแล้ว");
    } catch (error) {
      alert("ไม่สามารถคัดลอก URL");
    }
  };
  return (
    <section className="px-10 mt-10 relative">
      <div className="flex">
        <img src={img[0]} className="main-img w-96 h-64 rounded-3xl" />
        <div className="flex flex-col justify-between ml-4 w-2/3">
          <div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-gray-800 hover:underline"
            >
              {title}
            </a>
            <p className="text-gray-600 mt-1">
              {description}
              <br />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                อ่านต่อ
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">หมวด</span>
            {tags.map((tag, index) => (
              <span key={index} className="text-sm text-gray-500">
                {index === tags.length - 1 && tags.length > 1 && (
                  <span className="text-sm text-gray-500 mr-2">และ</span>
                )}
                <span className="underline" onClick={() => onTagClick(tag)}>
                  {tag}
                </span>
              </span>
            ))}
          </div>
          <ThumbnailImages images={img.slice(1, 4)} />
        </div>
        <div
          className="w-9 h-9 border border-blue-500 rounded-full absolute right-28 bottom-10 flex justify-center items-center"
          onClick={handleCopyClick}
        >
          <img src={copyIcon} className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}

function ThumbnailImages({ images }) {
  return (
    <div className="thumbnail-img flex gap-2">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="w-20 h-20 rounded-lg object-cover"
        />
      ))}
    </div>
  );
}

export default LocationCard;
