import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
    // Handle kasus ketika ProjectLink kosong
    const handleLiveDemo = (e) => {
        if (!ProjectLink) {
            console.log("ProjectLink kosong");
            e.preventDefault();
            alert("Live demo link is not available");
        }
    };

    const handleDetails = (e) => {
        if (!id) {
            console.log("ID kosong");
            e.preventDefault();
            alert("Project details are not available");
        }
    };

    return (
        <div className="group relative w-full">
            <div
                className="relative overflow-hidden rounded-xl 
    bg-gradient-to-br from-slate-900/90 to-slate-800/90 
    backdrop-blur-lg border border-white/10 shadow-2xl 
    transition-all duration-300 
    hover:shadow-[0_0_40px_rgba(20,184,166,0.25)]
    h-full flex flex-col" // Tambahkan h-full dan flex flex-col
            >
                {/* subtle teal ambience */}
                <div
                    className="absolute inset-0 
      bg-gradient-to-br 
      from-[#14B8A6]/10 via-transparent to-[#2DD4BF]/10 
      opacity-40 group-hover:opacity-70 
      transition-opacity duration-300"
                ></div>

                <div className="relative p-5 z-10 flex-1 flex flex-col">
                    {/* Container gambar dengan fixed height */}
                    <div className="relative overflow-hidden rounded-lg mb-4">
                        <div className="aspect-[4/3] w-full"> {/* Fixed aspect ratio */}
                            <img
                                src={Img}
                                alt={Title}
                                className="w-full h-full object-cover 
          transform group-hover:scale-105 
          transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Konten yang dapat berkembang */}
                    <div className="flex-1 flex flex-col">
                        <div className="space-y-3 flex-1">
                            <h3
                                className="text-xl font-semibold 
          bg-gradient-to-r from-white via-slate-200 to-slate-400 
          bg-clip-text text-transparent
          line-clamp-2 min-h-[3.5rem]" // Tambahkan line-clamp dan min-height
                            >
                                {Title}
                            </h3>

                            <p className="text-[#94A3B8] text-sm leading-relaxed 
                            line-clamp-3 min-h-[4.5rem]"> {/* Fixed line count */}
                                {Description}
                            </p>
                        </div>

                        {/* Tombol selalu di bagian bawah */}
                        <div className="pt-4 mt-auto">
                            <div className="flex items-center justify-between">
                                {/* {ProjectLink ? (
                                    <a
                                        href={ProjectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleLiveDemo}
                                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg 
              bg-white/5 hover:bg-white/10 text-white/90 
              transition-all duration-200 hover:scale-105 active:scale-95 
              focus:outline-none focus:ring-2 
              focus:ring-[#14B8A6]/50"
                                    >
                                        <span className="text-sm font-medium">
                                            Live Demo
                                        </span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg 
              bg-white/5 text-white/50 cursor-not-allowed 
              transition-all duration-200"
                                    >
                                        <span className="text-sm font-medium">
                                            Live Demo
                                        </span>
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                )} */}

                                {id ? (
                                    <Link
                                        to={`/project/${id}`}
                                        onClick={handleDetails}
                                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg 
              bg-white/5 hover:bg-white/10 text-white/90 
              transition-all duration-200 hover:scale-105 active:scale-95 
              focus:outline-none focus:ring-2 
              focus:ring-[#14B8A6]/50"
                                    >
                                        <span className="text-sm font-medium">
                                            Details
                                        </span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                ) : (
                                    <button
                                        disabled
                                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg 
              bg-white/5 text-white/50 cursor-not-allowed 
              transition-all duration-200"
                                    >
                                        <span className="text-sm font-medium">
                                            Details
                                        </span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute inset-0 border border-white/0 
        group-hover:border-[#14B8A6]/50 
        rounded-xl transition-colors duration-300 -z-50"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default CardProject;