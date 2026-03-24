import React from 'react'
import { useState } from 'react'
import Navbar from '../../Header/Header.jsx'
import '../PagesStyle/Style.css'
import Hero from './Components/Hero.jsx'
import Services from './Components/Services.jsx'
import About from './Components/About.jsx'
import Gallery from './Components/Gallery.jsx'
import ContactForm from './Components/Contact.jsx'
import ContactInfo from './Components/ContactInfo.jsx'

const HomePage = () => {

    const facts = [
        { number: "35", title: "Award Winning" },
        { number: "45", title: "Years Experience" },
        { number: "12345", title: "Happy Clients" },
    ];

    return (
        <main>
            <Navbar />
            <div className="font-sans">
                {/* HERO */}
                <section className="bg-[#FDF5EB] py-16">
                    <Hero />
                </section>
                {/* SERVICES */}
                <section className="py-16">
                    <Services />
                </section>
                {/* ABOUT */}
                <section className="py-16 bg-[#FDF5EB]">
                    <About />
                </section>
                {/* PROJECTS */}
                <section className="py-16 ">
                    <Gallery />
                </section>

                {/* Contact */}
                <section className="py-16 bg-[#FDF5EB] ">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">

                            <div className="flex-1">
                                <ContactInfo />
                            </div>
                            <div className="flex-1">
                                <ContactForm />
                            </div>


                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 text-center">

                        <p className="text-blue-500 mb-2">Client Review</p>
                        <h2 className="text-3xl font-bold mb-10">
                            Trusted By Clients
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-gray-600 mb-4">
                                        Amazing service and quality work!
                                    </p>
                                    <h4 className="font-bold">Client {i}</h4>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default HomePage