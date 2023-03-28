import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
}

const catalystVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Catalyst = ({ name, image, text }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const catalystName = name.split(" ").join("-").toLowerCase();

    return (
        <motion.div
            variants={catalystVariant} className='relative'
        >
            <div className={overlayStyles}>
                <p className='text-2xl font-playfair text-black'>
                    {name}
                </p>
                <p className="mt-7 text-black">
                    {text}
                </p>
            </div>
            <img src={image} alt={catalystName} />
        </motion.div>
    )
}

const Catalysts = () => {
    return (
        <section id='catalysts' className='pt:48 pb-48'>
            {/*HEADINGS*/}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <div className='font-playfair font-semibold text-4l mt-5'>
                        <span className='text-white'>CATALYSTS</span>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width='w-1/3' />
                    </div>
                </div>

                <div className='mt-10 mb-10'>
                    Test
                </div>
            </motion.div>

            {/*Catalyst Information */}
            <div className='flex justify-center'>
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/*ROW 1*/}

                    {/*ROW 2*/}

                    {/*ROW 3*/}

                    {/*ROW 4*/}

                    {/*ROW 5*/}

                    {/*ROW 6*/}

                    {/*ROW 7*/}

                    {/*ROW 8*/}

                </motion.div>
            </div>
        </section>
    )
}

export default Catalysts