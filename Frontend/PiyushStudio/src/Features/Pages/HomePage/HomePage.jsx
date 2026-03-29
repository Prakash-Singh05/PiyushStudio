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
import ReviewsSection from './Components/ReviewData.jsx'

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
                <section className="py-14 bg-[#FDF5EB] ">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10 sm:mb-0">
                            <h2 className="text-blue-500 text-[#EBAA3E] text-5xl  services-title contact-heading">Contact Us</h2>
                            
                        </div>
                        <div className="flex flex-col lg:flex-row lg:gap-2 md:gap-1 justify-center items-center">
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
                <section className="py-16">
                    <ReviewsSection />
                </section>
            </div>
        </main>
    );
}

export default HomePage