import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const blogs = [
    { title: "Why Is AI Not A Threat To Human Society And The World At Large?", tag: "AI" },
    { title: "HOW TO BECOME A WEB DEV ?", tag: "WEB DEV" },
    { title: "The Future of Development", tag: "TECH" },
  ];

  return (
    <div className="p-6">
      <div className="bg-purple-100 text-purple-800 p-4 rounded-md text-center mb-6">
        <span className="font-bold">📢 Announcement 📢</span>
        <p>See the <a href="#" className="text-blue-500 underline">latest updates</a> from the club!</p>
      </div>
      <div className="flex gap-4 mb-6">
        <div className="flex-1 bg-slime p-6 rounded-md shadow-md text-center">
          <h3 className="text-2xl font-bold">P2P x DEVDAYS</h3>
          <p className="mt-2">Join the challenge now!</p>
          <button className="bg-black text-white font-semibold mt-4 px-4 py-2 rounded hover:bg-yellow-600 transition">
            Click Here
          </button>
        </div>
        <div className="flex-1 bg-slime p-6 rounded-md shadow-md text-center">
          <h3 className="text-2xl font-bold">Peer-To-Peer</h3>
          <p className="mt-2">Join Now!</p>
          <button className="bg-black text-white font-semibold mt-4 px-4 py-2 rounded hover:bg-yellow-600 transition" onClick={() => navigate('/P2p')}>
            Click Here
          </button>
        </div>
      </div>
      <div className="text-center text-gray-700 bg-gray-100 py-2 mb-6 font-semibold tracking-widest">
        COFFEE * REPEAT * CODE * COFFEE * REPEAT * CODE * COFFEE * REPEAT * CODE * COFFEE
      </div>
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">📝 Blogs 📝</h2>
        <p>Have a look at our <a href="#" className="text-blue-500 underline">community curated</a> blogs!</p>
      </div>
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-purple-500 text-white p-4 rounded-lg shadow-md hover:bg-purple-600 transition"
          >
            <div>
              <h3 className="font-semibold">{blog.title}</h3>
              <span className="text-sm bg-purple-700 px-2 py-1 rounded-full mt-1 inline-block">
                {blog.tag}
              </span>
            </div>
            <button className="text-white bg-purple-700 p-2 rounded-full hover:bg-purple-800 transition">
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
