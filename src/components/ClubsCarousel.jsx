import React from "react";
import danceImg from "../assets/images/dance.jpg";
import codingImg from "../assets/images/coding.jpg";
import musicImg from "../assets/images/music.jpg";
import photographyImg from "../assets/images/photography.jpeg";
import sportsImg from "../assets/images/sports.jpg";

const clubs = [
  { name: "Dance Club", img: danceImg },
  { name: "Coding Club", img: codingImg },
  { name: "Music Club", img: musicImg },
  { name: "Photography", img: photographyImg },
  { name: "Sports Club", img: sportsImg },
];

export default function ClubsCarousel() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Explore Our College Clubs
        </h2>

        <div className="flex overflow-x-auto gap-6 px-6 scrollbar-hide">
          {clubs.map((club, i) => (
            <div
              key={i}
              className="min-w-[280px] flex-shrink-0 bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={club.img}
                alt={club.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {club.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
