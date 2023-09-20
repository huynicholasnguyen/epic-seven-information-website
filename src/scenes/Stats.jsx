import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion} from "framer-motion";
import Carousel1 from './Carousel1';

const Stats = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return(
        <section id = "stats" className = "pt-10 pb-24">
            { /* CAROUSEL OF IMAGES SECTION */}
            <div className = "md:flex md:gap-16 mt-16">
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
                    <div className = "font-playfair font-semibold text-4xl mb-5">
                        MY <span className = "text-white">UNITS AND STATS</span>
                    </div>
                    <LineGradient width = "w-1/3" />
                    <div className = "mt-10 mb-7 float-left font-playfair text-2xl">
                        These are the units that allowed me to finish Top 2500 Champion. A big mix of standard units along with some cleave units. I started out playing cleave until I got gear gapped and then transitioned into a more standard composition at the end of the season.
                    </div>
                    
                </motion.div>
                <div className = 'relative w-2/3 float-right'>
                    {isAboveMediumScreens ? (
                        <div>
                            <Carousel1 />
                        </div>
                    ) : (
                        <div>
                            {/*MOBILE*/}
                            <Carousel1 />
                        </div>
                    )} 
                </div>
            </div>
        </section>
    )
}
export default Stats;