import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import lcbellonaArt from "../assets/lcbellona-art.png";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return(
        <section id = "home" className = "md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

            {/* IMAGE SECTION */}
            <div className = "basis-5/5 z-10 mt-16 md:mt-16 flex justify-center md:order-2">
                {isAboveMediumScreens ? (
                    <div className = "">
                        <img
                            alt = "lcbellona-art"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] float-left mr-8 rounded-md"
                            src = {lcbellonaArt}
                        />
                        <div className = "text-xl">
                            Welcome to my page! This website is basically going to be an overview of my account,
                            along with some other potentially helpful tips when it comes to drafting in RTA and finding catalysts in side story! To explore, just use the navigation bar, or you can just scroll!
                        </div>
                        <div className = "text-stone text-xs mt-2">
                            Credit to u/butterballbuns on Reddit for this awesome Lone Crescent Bellona Art
                        </div>
                    </div>
                ) : (
                    <div>
                        <img
                            alt = "lcbellona-art"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src = {lcbellonaArt}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Landing;