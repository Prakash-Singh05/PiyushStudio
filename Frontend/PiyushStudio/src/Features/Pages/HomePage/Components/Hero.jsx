import React from 'react'
import Button from '../../Components/Button'



const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center hero-section">

                        <div>
                            <p className=" uppercase lg:text-3xl mb-2 welcome-line bold">
                                Welcome To <br /> Piyush Digital Photo Studio
                            </p>

                            <h1 className="text-6xl font-bold mb-4 text-[#EBAA3E] hero-text">
                                All Types of Photography  From Lens to Drone
                            </h1>

                            <p className="text-gray-600 mb-6 welcome-line text-xl">
                                Professional photography with creative excellence.
                            </p>

                            <div className="">
                                 <Button btn_text="Get Contact" />
                            </div>
                        </div>

                        <div className="grid grid-row-2 gap-3">
                            <div className="hero-top-image flex justify-center items-center gap-4">
                                <div className="relative lg:w-[290px] lg:h-[290px] overflow-hidden  group">
                                    <img
                                        src="https://i.pinimg.com/1200x/79/52/58/795258031ab9e309c0f449a0bb5e154d.jpg"
                                        className="w-full h-full object-cover image-filter"
                                    />
                                    {/* Overlay */}
                                    <div className="overlay">
                                        <p className="text-white p-4 text-lg font-semibold">
                                            Wedding & Event Shoots
                                        </p>

                                    </div>
                                </div>
                                <div className="relative lg:w-[200px] lg:h-[200px] overflow-hidden  group">
                                    <img
                                        src="https://i.pinimg.com/1200x/9b/d5/6a/9bd56a1358bdac02bc57ce228a553405.jpg"
                                        className="w-full h-full object-cover image-filter"
                                    />
                                    {/* Overlay */}
                                    <div className="overlay">
                                        <p className="text-white p-4 text-lg font-semibold">
                                            Drone Photography
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-bottom-images flex justify-center items-center gap-4">
                                 <div className="relative lg:w-[200px] lg:h-[200px] overflow-hidden  group">
                                    <img
                                        src="https://i.pinimg.com/736x/71/28/20/7128202116811708df7ab2cb1755204f.jpg"
                                        className="w-full h-full object-cover image-filter"
                                    />
                                    {/* Overlay */}
                                    <div className="overlay">
                                        <p className="text-white p-4 text-lg font-semibold">
                                            Wedding Photography
                                        </p>
 
                                    </div>
                                </div>
                                <div className="relative lg:w-[290px] lg:h-[290px] overflow-hidden  group">
                                    <img
                                        src="https://i.pinimg.com/736x/75/88/59/758859bb20712b47d63221993d56defa.jpg"
                                        className="w-full h-full object-cover image-filter"
                                    />
                                    {/* Overlay */}
                                    <div className="overlay">
                                        <p className="text-white p-4 text-lg font-semibold">
                                            Wedding Photography
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
  )
}

export default Hero