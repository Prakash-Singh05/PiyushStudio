import React from 'react'

const Services = () => {
    const services = [
        { title: "Wedding & Event Shoots", img: "https://i.pinimg.com/1200x/73/ca/07/73ca07f8a74c1336e85d3354f4a494f3.jpg" },
        { title: "Portrait & Personal Shoots", img: "https://i.pinimg.com/1200x/3c/7e/00/3c7e00ef655312967403b4c82d444252.jpg" },
        { title: "Family & Lifestyle", img: "https://i.pinimg.com/736x/ae/a5/13/aea513f6ed0a6d757fab9433530be514.jpg" },
        { title: "Editorial", img: "https://i.pinimg.com/avif/736x/f4/02/5a/f4025a5fbf27aa5d1db565bc60331fd9.avf" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10 services-heading">
                Professional Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((item) => (
                    <div key={item.title} className="bg-white rounded-lg shadow hover:shadow-lg transition">
                        <img src={item.img} className="rounded-t-lg lg:w-[400px] lg:h-[400px] object-cover" />
                        <div className="p-4 font-semibold services-title text-xl">{item.title}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services