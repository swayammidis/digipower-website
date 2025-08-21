import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const sites = [
    {
        name: "North Tonawanda Power Plant",
        location: "North Tonawanda, NY",
        capacity: "60 MW",
        image: "/assets/nt-site.avif",
        shortDesc:
            "Our North Tonawanda facility is a state-of-the-art 60 MW combined cycle power plant, utilizing both...",
        longDesc: `Our North Tonawanda facility is a state-of-the-art 60 MW combined cycle power plant, utilizing both gas and steam turbines to maximize energy output while minimizing emissions. With its innovative design, this highly efficient plant operates behind the grid, providing a reliable, low-cost energy solution for power-intensive industries, including high-performance computing and Bitcoin mining.

Additionally, the facility has the capability to sell power back to the utility, tapping into multiple revenue streams. We receive capacity payments for maintaining a standby role, ensuring the plant is ready to supply grid power during peak demands. With access to robust transmission infrastructure, North Tonawanda is a cornerstone in delivering sustainable power and versatile energy solutions for a variety of critical applications.`,
        features: [
            "Combined cycle power plant",
            "Gas and steam turbines",
            "Behind-the-grid operation",
            "Capacity payments",
            "Transmission infrastructure access",
        ],
    },
    {
        name: "Buffalo Site",
        location: "Buffalo, NY",
        capacity: "18.7 MW",
        image: "/assets/buffalo-site.avif",
        shortDesc:
            "Located at a repurposed industrial site in Buffalo, this facility leverages 18.7 MW of grid...",
        longDesc: `Located at a repurposed industrial site in Buffalo, this facility leverages 18.7 MW of grid power, primarily sourced from the region’s abundant hydroelectric resources.
    
    By utilizing clean, renewable energy from local hydro power, this site represents a strategic investment in sustainable energy solutions. The facility is equipped to support a variety of high-demand energy applications, ensuring reliable power for industrial operations while contributing to the region’s commitment to green energy.`,
        features: ["Repurposed site", "Grid-connected", "Scalable design"],
    },
    {
        name: "Alabama Site",
        location: "Alabama",
        capacity: "22 MW",
        image: "/assets/alabama-site.jpeg",
        shortDesc:
            "Situated at a repurposed industrial location, our Alabama facility features a 22 MW substation powered...",
        longDesc: `Situated at a repurposed industrial location, our Alabama facility features a 22 MW substation powered by the local utility grid. This site is designed to deliver consistent and reliable energy, making it ideal for high-demand operations such as data centers and industrial applications.
    
    With robust infrastructure and access to efficient utility power, the facility is positioned to support scalable energy needs while contributing to the economic revitalization of the region.`,
        features: [
            "22 MW substation",
            "Strategic location",
            "Future expansion potential",
        ],
    },
    {
        name: "North Carolina Site",
        location: "North Carolina",
        capacity: "200 MW (Potential)",
        image: "/assets/nc-site.avif",
        shortDesc:
            "Located adjacent to one of the largest substations in North Carolina, this 20-acre, fully graded...",
        longDesc: `Located adjacent to one of the largest substations in North Carolina, this 20-acre, fully graded site offers a significant development opportunity with up to 200 MW of infrastructure potential.

    Positioned for future growth, this prime location is ideal for large-scale energy projects and high-performance computing. With plans to begin development in the coming year, the site is poised to become a key energy hub, leveraging the existing electrical infrastructure to support a wide range of industrial and technological needs.`,
        features: ["200 MW potential", "Prime substation adjacency", "20-acre land"],
    },
];

export default function SitesSection() {
    const [selectedSite, setSelectedSite] = useState(null);

    return (
        <section className="bg-[#08121c] py-16 text-center">
            {/* Heading */}
            <h2 className="text-5xl font-extrabold text-cyan-400 mb-4">Our Sites</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
                Strategic locations across the United States, each designed for maximum
                efficiency and sustainable energy production.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto">
                {sites.map((site, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                        onClick={() => setSelectedSite(site)}
                    >
                        <img
                            src={site.image}
                            alt={site.name}
                            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 flex flex-col justify-end items-start text-left">
                            <h3 className="text-xl font-bold text-cyan-400">{site.name}</h3>
                            <p className="text-sm text-gray-300">{site.location}</p>
                            <span className="mt-2 inline-flex items-center justify-center bg-black/85 text-white px-3 py-1 rounded-md text-[12px] font-bold tracking-wide">
                                {site.capacity}
                            </span>
                            <p className="text-gray-300 text-sm mt-2">{site.shortDesc}</p>
                            <p className="text-cyan-400 text-xs mt-2">
                                Click anywhere to learn more
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedSite && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${selectedSite.image})` }}
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-[#0d1b2a]/90" />

                            {/* Content */}
                            <div className="relative p-8 overflow-y-auto h-full text-left text-white">
                                {/* Close button */}
                                <button
                                    className="absolute top-4 right-4 text-gray-300 hover:text-white"
                                    onClick={() => setSelectedSite(null)}
                                >
                                    <X size={28} />
                                </button>

                                <h3 className="text-3xl font-bold text-cyan-400">
                                    {selectedSite.name}
                                </h3>
                                <p className="text-gray-300">{selectedSite.location}</p>
                                <span className="inline-block bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold mt-3">
                                    {selectedSite.capacity}
                                </span>

                                <h4 className="text-xl font-semibold mt-6 mb-2">Overview</h4>
                                <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                                    {selectedSite.longDesc}
                                </p>

                                <h4 className="text-xl font-semibold mt-6 mb-2">Key Features</h4>
                                <ul className="list-disc list-inside text-gray-200 space-y-1">
                                    {selectedSite.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>

                                <button className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition">
                                    Learn More About This Facility
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
