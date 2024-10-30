import axios from "axios";
import LocationCard from "../components/LocationCard";
import { useState, useEffect } from "react";

function LandingPage() {
  const [postList, setPostList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const getPostList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );
      setPostList(response.data.data);
    } catch (error) {
      console.error("Error fetching post list:", error);
    }
  };

  useEffect(() => {
    getPostList();
  }, [searchText]);

  return (
    <div className="flex flex-col items-center">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <MainContent postList={postList} />
    </div>
  );
}

function Header({ searchText, setSearchText }) {
  return (
    <header className="text-center mt-10 w-3/4">
      <h1 className="text-blue-500 text-4xl font-semibold">เที่ยวไหนดี</h1>
      <div className="flex mt-2 w-3/4 mx-auto">
        <input
          type="text"
          placeholder="ค้นหาที่เที่ยว"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="text-black w-full px-2 outline-none"
        />
      </div>
      <p className="mt-2 text-gray-500">หาที่เที่ยวแล้วไปกัน ...</p>
      <hr className="border-gray-300 w-3/4 mx-auto mt-1" />
    </header>
  );
}

function MainContent({ postList }) {
  return (
    <main className="flex-col">
      {postList.map((post) => (
        <LocationCard
          key={post.id}
          img={post.photos}
          title={post.title}
          description={truncateText(post.description)}
          url={post.url}
          tags={post.tags}
        />
      ))}
    </main>
  );
}

function truncateText(text, maxLength = 100) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default LandingPage;
