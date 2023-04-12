import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import lcbellonaArt from "../assets/lcbellona-art.png";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return(
        <section id = "home" className = "md:flex md:justify-center md:items-center md:h-full py-10">

            {/* IMAGE SECTION */}
            <div className = "basis-5/6 z-10 flex justify-center md:order-2 mt-20">
                {isAboveMediumScreens ? (
                    <div className = "relative">
                        <img
                            alt = "lcbellona-art"
                            className="h-[90%] z-10 w-full mr-8 rounded-md"
                            src = {lcbellonaArt}
                        />
                        <div className = 'font-playfair absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1'>
                            Welcome to my page! *Write some more stuff here as an introduction*
                        </div>
                        {/* TEXT */}
                        <motion.div
                            initial = "hidden"
                            whileInView = "visible"
                            viewport = {{once: true, amount: 0.5}}
                            transition = {{duration: 0.5}}
                            variants = {{
                                hidden: { opacity: 0, x: -50},
                                visible: { opacity: 1, x: 0},
                            }}
                        >
                        <div className = "text-stone text-xs mt-2">
                            Credit to u/butterballbuns on Reddit for this awesome Lone Crescent Bellona Art
                        </div>
                        </motion.div>
                    </div>
                ) : (
                    <div>
                        <img
                            alt = "lcbellona-art"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src = {lcbellonaArt}
                        />
                        <motion.div
                            initial = "hidden"
                            whileInView = "visible"
                            viewport = {{once: true, amount: 0.5}}
                            transition = {{duration: 0.5}}
                            variants = {{
                                hidden: { opacity: 0, x: -50},
                                visible: { opacity: 1, x: 0},
                            }}
                        >
                        <div className = "text-xl">
                            Welcome to my page! This website is basically going to be an overview of my account,
                            along with some other potentially helpful tips when it comes to drafting in RTA and finding catalysts in side story! To explore, just use the navigation bar, or you can just scroll!
                        </div>
                        <div className = "text-stone text-xs mt-2">
                            Credit to u/butterballbuns on Reddit for this awesome Lone Crescent Bellona Art
                        </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Landing;