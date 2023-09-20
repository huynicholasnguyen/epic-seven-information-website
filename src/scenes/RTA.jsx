import LineGradient from "../components/LineGradient";
import { motion } from 'framer-motion';
import Draft1 from '../assets/rta/draft1.png';
import Draft2 from '../assets/rta/Draft2.png';
import Draft3 from '../assets/rta/draft3.png';
import Cleave1 from '../assets/rta/cleave-draft1.png';
import Cleave2 from '../assets/rta/cleave-draft2.png';
import Cleave3 from '../assets/rta/cleave-draft3.png';
import Standard1 from '../assets/rta/standard-draft1.png';
import Standard2 from '../assets/rta/standard-draft2.png';
import Standard3 from '../assets/rta/standard-draft3.png';


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
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16`;
    const draftTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div
            variants={rtaVariant} className='relative'
        >
            <div className={overlayStyles}>
                <p className='text-xl font-playfair text-black'>
                    {title}
                </p>
                <p className="mt-3 text-black">
                    {text}
                </p>
            </div>
            <img className = 'w-full justify-center' src={image} alt={draftTitle} />
        </motion.div>
    )
}

const RTA = () => {
    return (
        <section id='rta'>
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
                    <div className = 'bg-inherit h-5'> </div>
                    <div className="font-playfair font-semibold text-4xl mt-20">
                        <span className="text-white">RTA DRAFTS</span>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width="w-1/3" />
                    </div>
                </div>

            </motion.div>

            {/*RTA information*/}

            <div className='flex justify-center'>
                <motion.div
                    className="md:grid md:grid-cols-4 relative flex mb-20"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <div className='flex justify-center text-center items-center p-10 bg-dark-grey max-w-[600px] max-h-[600px] text-2xl font-playfair font-semibold'>
                        AGGRO
                    </div>
                    <Draft
                        title = 'Draft 1'
                        image={Draft1}
                        text='Aggro Draft with Amid as cleanser. Amid is generally the bait for ban, as LCBellona and Stene are going to be a deadly combo for later in the match.'
                    />
                    <Draft
                        title = 'Draft 2'
                        image={Draft2}
                        text='Keeps the aggression with constant CR push, especially into a tankier composition'
                    />
                    <Draft
                        title = 'Draft 3'
                        image = {Draft3}
                        text='Again, keeping the aggression keeping the imperative that we must take turn 1'
                    />

                    {/* ROW 2 */}
                    <div className='flex justify-center text-center items-center p-10 bg-dark-grey max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        CLEAVE
                    </div>
                    <Draft
                        title="Draft 4"
                        image = {Cleave1}
                        text = 'Zio/Lua as the openers, with Yufine as the bridge for Zio and Eda as the bridge for Lua. Briseria was a flex pick, could be Commander Pavel as well depending on situation.'
                    />
                    <Draft
                        title="Draft 5"
                        image = {Cleave2}
                        text = "Essentially the same idea as the first one, except the bridges are Zio/Yufine and Lua/Cavel. I only picked Straze here because of how tanky the other team is and I knew with my Straze I had a good chance of outspeeding."
                    />
                    <Draft
                        title="Draft 6"
                        image = {Cleave3}
                        text = "Speed Imprinting after his fast first pick, into reactively picking into anti-cleave units"
                    />

                    {/* ROW 3 */}
                    <div className='flex justify-center text-center items-center p-10 bg-dark-grey max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        STANDARD
                    </div>
                    <Draft
                        title="Draft 7"
                        image = {Standard1}
                        text = "Sample Standard Draft. Usually I'd op for two openers but it just so happened that I could draft multiple units that could counter/sustain."
                    />
                    <Draft
                        title="Draft 8"
                        image = {Standard2}
                        text = "Standard draft, reactively picking after a first pick ML Landy and picking Lilias for Lua"
                    />
                    <Draft
                        title = "Draft 9"
                        image = {Standard3}
                        text = "Another sample standard draft, picking units that are difficult to cleave into such as SCArowell, Briseria and Riolet"
                    />


                </motion.div>
            </div>
        </section>
    )
}
export default RTA;