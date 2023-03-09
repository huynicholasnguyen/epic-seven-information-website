import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion} from "framer-motion";
import Carousel from "./Carousel";

const Stats = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

    return(
        <section id = "stats" className = "pt-10 pb-24">
            { /* CAROUSEL OF IMAGES SECTION */}
            <div className = "md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className = "md:w-1/3"
                    initial = "hidden"
                    whileInView="visible"
                    viewport = {{once: true, amount: 0.5}}
                    transition = {{ duration: 0.5}}
                    variants = {{
                        hidden: { opacity: 0, x: -50} ,
                        visible: { opacity: 1, x:0}
                    }}
                >
                    <p className = "font-playfair font-semibold text-4xl mb-5">
                        MY <span className = "text-red">UNITS AND STATS</span>
                    </p>
                    <LineGradient width = "w-1/3" />
                    <p className = "mt-10 mb-7">
                        Test 
                    </p>

                </motion.div>
                <div>
                    {isAboveMediumScreens ? (
                        <Carousel1 />
                    ) : (
                        <div></div>
                    )} 
                </div>
            </div>
        </section>
    )
}