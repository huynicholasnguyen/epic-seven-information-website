import LineGradient from "../components/LineGradient";
import { motion } from 'framer-motion';
import Draft1 from '../assets/rta/draft1.png';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
}

const rtaVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Draft = ({ title, image, text }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const draftTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div
            variants={rtaVariant} className='relative'
        >
            <div className={overlayStyles}>
                <p className='text-2xl font-playfair text-black'>
                    {title}
                </p>
                <p className="mt-7 text-black">
                    {text}
                </p>
            </div>
            <img src={image} alt={draftTitle} />
        </motion.div>
    )
}

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

            {/*RTA information*/}

            <div className='flex justify-center'>
                <motion.div
                    className="sm:grid sm:grid-cols-4"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Aggro Drafts
                    </div>
                    <Draft
                        title="Draft 1"
                        image={Draft1}
                        text='Aggro Draft with Amid as cleanser. Amid is generally the bait for ban, as LCBellona and Stene are going to be a deadly combo for later in the match.'
                    />
                    <Draft
                        title="Draft 2"
                        image=''
                        text='TEST TEXT'
                    />
                    <Draft
                        title="Draft 3"
                    />

                    {/* ROW 2 */}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Cleave Drafts
                    </div>
                    <Draft
                        title="Draft 4"
                    />
                    <Draft
                        title="Draft 5"
                    />
                    <Draft
                        title="Draft 6"
                    />

                    {/* ROW 3 */}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Standard Drafts
                    </div>
                    <Draft
                        title="Draft 7"
                    />
                    <Draft
                        title="Draft 8"
                    />


                </motion.div>
            </div>
        </section>
    )
}
export default RTA;