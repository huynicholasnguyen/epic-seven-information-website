import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const RTA = () => {
    const isAboveMediumScreens = useMediaQuery("min-width: 1060px");
    return (
        <section id = "rta" className = 'pt-10 pb-24'>
            <div className = 'md:flex md:gap-16 mt-16'>
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
                    <div className = 'font-playfair font-semibold text-4xl mb-5 text-center'>
                        <span className = 'text-white'>RTA Drafts</span>
                    </div>
                    <LineGradient className = "w-1/6"/>
                    <div className = 'mt-10 mb-7 float-left font-playfair text-2xl'>

                    </div>
                </motion.div>
                <div className = 'relative w-2/3 float-right'>
                    {isAboveMediumScreens ? (
                        <div>
                            {/*DESKTOP */}
                        </div>
                    ) : (
                        <div>
                            {/* MOBILE */}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default RTA;