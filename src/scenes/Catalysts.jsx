import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import AncientCreatureNucleus from '../assets/catalysts/ancient_creature_nucleus.png'
import SlimeJelly from '../assets/catalysts/slime_jelly.png'
import FighterMedal from '../assets/catalysts/fighter_medal.png'
import BlackCursePowder from '../assets/catalysts/black_curse_powder.png'
import BlazingSoul from '../assets/catalysts/blazing_soul.png'
import DemonBloodGem from '../assets/catalysts/demon_blood_gem.png'
import DragonsWrath from '../assets/catalysts/dragons_wrath.png'
import FusedNerve from '../assets/catalysts/fused_nerve.png'
import HeartOfHypocrisy from '../assets/catalysts/heart_of_hypocrisy.png'
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
            <img className = 'w-full justify-center' src = {image} alt={catalystName} />
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
                    className="sm:grid sm:grid-cols-4"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/*ROW 1*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Aquarius
                    </div>
                    <Catalyst name='Order of the Shield Insignia'/>
                    <Catalyst name='Leather Sheath'/>
                    <Catalyst name='Fighter Medal' image = {FighterMedal} />
                    {/*ROW 2*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Aries
                    </div>
                    <Catalyst name = 'Blessing of Orbis'/>
                    <Catalyst name = 'Path Power Loop'/>
                    <Catalyst name = 'Nightmare Mask'/>
                    {/*ROW 3*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Cancer
                    </div>
                    <Catalyst name = 'Special Alarm Loop'/>
                    <Catalyst name = 'Baby Mouse Insignia'/>
                    <Catalyst name = 'The Heart of Hypocrisy' image = {HeartOfHypocrisy}/>
                    {/*ROW 4*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Capricorn
                    </div>
                    <Catalyst name = 'Cursed Ashes'/>
                    <Catalyst name = 'Slime Jelly' image = {SlimeJelly} text = 'Found in 1, 2, 8, 10 of Unrecorded History'/>
                    <Catalyst name = "Dragon's Wrath" image = {DragonsWrath}/>
                    {/*ROW 5*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Gemini
                    </div>
                    <Catalyst name = 'Small Sun Badge'/>
                    <Catalyst name = 'Ring of Glory'/>
                    <Catalyst name = 'Fused Nerve' image = {FusedNerve}/>
                    {/*ROW 6*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Leo
                    </div>
                    <Catalyst name = 'Ultra Fang'/>
                    <Catalyst name = 'Twisted Fang'/>
                    <Catalyst name = "Blazing Soul" image = {BlazingSoul}/>
                    {/*ROW 7*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Libra
                    </div>
                    <Catalyst name = 'Dream Time Circuit'/>
                    <Catalyst name = 'Mysterious Flash'/>
                    <Catalyst name = 'Reingar Student ID'/>
                    {/*ROW 8*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Pisces
                    </div>
                    <Catalyst name = 'Blood Flaked Bone'/>
                    <Catalyst name = 'Strange Jelly'/>
                    <Catalyst name = 'Ancient Creature Nucleus' image = {AncientCreatureNucleus}/>
                    {/*ROW 9*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Sagittarius
                    </div>
                    <Catalyst name = 'Cold Look'/>
                    <Catalyst name = "Archer's Vision"/>
                    <Catalyst name = "Mercenerary's Medicine"/>
                    {/*ROw 10*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Scorpio
                    </div>
                    <Catalyst name = 'Erikion Carapace'/>
                    <Catalyst name = 'Sharp Spearhead'/>
                    <Catalyst name = 'Black Curse Powder' image = {BlackCursePowder} />
                    {/*ROW 11*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Taurus
                    </div>
                    <Catalyst name = 'Blazing Rage'/>
                    <Catalyst name = 'Shiny Enchantment'/>
                    <Catalyst name = 'Horn of Desire'/>
                    {/*ROW 12*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Virgo
                    </div>
                    <Catalyst name = 'Eternal Forest Dust'/>
                    <Catalyst name = 'Flame of Soul'/>
                    <Catalyst name = 'Demon Blood Gem' image = {DemonBloodGem}/>

                </motion.div>
            </div>
        </section>
    )
}

export default Catalysts