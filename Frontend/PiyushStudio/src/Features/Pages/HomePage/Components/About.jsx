import React from 'react'

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
            <div className='flex flex-col justify-center item-center'>
                <p className="uppercase text-3xl mb-2 services-heading text-center">About Us</p>
                <h2 className="text-4xl font-bold mb-4 text-center text-[#EBAA3E] welcome-line">
                    Creative Photographer
                </h2>

                <p className="text-gray-600  lg:text-[1.1rem]">
                    <b> Piyush Digital Photo Studio </b> is a trusted photo studio based in Firozabad, offering all types of photography and video services. From wedding shoots, pre-wedding, and events to drone photography, portraits, and product shoots, we capture every moment with creativity and perfection.
                    Owned by <mark> <b>Jitendra Kumar </b></mark>, a skilled and passionate photographer, the studio is known for high-quality work, modern equipment, and a friendly approach. We focus on turning your special moments into beautiful memories that last forever.                </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center w-[130px] m-auto">
                    Read More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <img src="https://i.pinimg.com/1200x/91/08/18/910818d2d147658f7e8adc7d17b54bd6.jpg" className="rounded-lg" />
                <img src="https://i.pinimg.com/736x/cd/42/69/cd426947b38b9a21e128a4dfd25336ae.jpg" className="rounded-lg mt-10" />
            </div>
        </div>
    )
}

export default About