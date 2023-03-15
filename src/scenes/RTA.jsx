import LineGradient from "../components/LineGradient";
import { motion } from 'framer-motion';

const RTA = () => {
    return (
        <section id='projects' className='pt:48 pb-48'>
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
                    <div className="font-playfair font-semibold text-4xl mt-5">
                        <span className="text-white">RTA DRAFTS</span>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width="w-1/3" />
                    </div>
                </div>

                <div className="mt-10 mb-10">
                    Test
                </div>

            </motion.div>
        </section>
    )
}
export default RTA;