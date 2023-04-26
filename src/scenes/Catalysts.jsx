import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import AncientCreatureNucleus from '../assets/catalysts/ancient_creature_nucleus.png'
import SlimeJelly from '../assets/catalysts/slime-jelly.png'
import FighterMedal from '../assets/catalysts/fighter_medal.png'
import BlackCursePowder from '../assets/catalysts/black_curse_powder.png'
import BlazingSoul from '../assets/catalysts/blazing_soul.png'
import DemonBloodGem from '../assets/catalysts/demon_blood_gem.png'
import DragonsWrath from '../assets/catalysts/dragons_wrath.png'
import FusedNerve from '../assets/catalysts/fused_nerve.png'
import HeartOfHypocrisy from '../assets/catalysts/heart_of_hypocrisy.png'
import ReingarStudentID from '../assets/catalysts/reingar_student_id.png'
import MercenarysMedicine from '../assets/catalysts/mercenarys_medicine.png'
import NightmareMask from '../assets/catalysts/nightmare_mask.png'
import HornOfDesire from '../assets/catalysts/horn_of_desire.png'
import OrderOfTheShieldInsignia from '../assets/catalysts/order-of-the-shield-insignia.png'
import LeatherSheath from '../assets/catalysts/leather-sheath.png'
import BlessingOfOrbis from '../assets/catalysts/blessing-of-orbis.png'
import PathPowerLoop from '../assets/catalysts/path-power-loop.png'
import SpecialAlarmLoop from '../assets/catalysts/special-alarm-loop.png'
import BabyMouseInsignia from '../assets/catalysts/baby-mouse-insignia.png'
import CursedAshes from '../assets/catalysts/cursed-ashes.png'
import SmallSunBadge from '../assets/catalysts/small-sun-badge.png'
import RingOfGlory from '../assets/catalysts/ring-of-glory.png'
import UltraFang from '../assets/catalysts/ultra-fang.png'
import TwistedFang from '../assets/catalysts/twisted-fang.png'
import DreamTimeCircuit from '../assets/catalysts/dream-time-circuit.png'
import MysteriousFlash from '../assets/catalysts/mysterious-flash.png'
import BloodFlakedBone from '../assets/catalysts/blood-flaked-bone.png'
import StrangeJelly from '../assets/catalysts/strange-jelly.png'
import ColdLook from '../assets/catalysts/cold-look.png'
import ArchersVision from '../assets/catalysts/archers-vision.png'
import ErikionCarapace from '../assets/catalysts/erikion-carapace.png'
import SharpSpearhead from '../assets/catalysts/sharp-spearhead.png'
import BlazingRage from '../assets/catalysts/blazing-rage.png'
import ShinyEnchantment from '../assets/catalysts/shiny-enchantment.png'
import EternalForestDust from '../assets/catalysts/eternal-forest-dust.png'
import FlameOfSoul from '../assets/catalysts/flame-of-soul.png'
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
                    <div className = 'bg-inherit h-5'> </div>
                    <div className='font-playfair font-semibold text-4xl mt-20'>
                        <span className='text-white'>CATALYSTS</span>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width='w-1/3' />
                    </div>
                </div>

                <div className='mt-10 mb-10'>
                    Sorted by Zodiac Sign. Hover over the Catalyst to find where to farm in Unrecorded History.
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
                        AQUARIUS
                    </div>
                    <Catalyst name='Order of the Shield Insignia' image = {OrderOfTheShieldInsignia} text = "Found in 18, 19, 20"/>
                    <Catalyst name='Leather Sheath' image = {LeatherSheath} text = "Found in 12, 13, 22"/>
                    <Catalyst name='Fighter Medal' image = {FighterMedal} text = "Found in 26"/>
                    {/*ROW 2*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        ARIES
                    </div>
                    <Catalyst name = 'Blessing of Orbis' image = {BlessingOfOrbis} text = "Found in 4, 21"/>
                    <Catalyst name = 'Path Power Loop' image = {PathPowerLoop} text = 'Found in 5, 6, S1, 20'/>
                    <Catalyst name = 'Nightmare Mask' image = {NightmareMask} text = 'Found in 7'/>
                    {/*ROW 3*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        CANCER
                    </div>
                    <Catalyst name = 'Special Alarm Loop' image = {SpecialAlarmLoop} text = 'Found in 5, 6, S1, 18'/>
                    <Catalyst name = 'Baby Mouse Insignia' image = {BabyMouseInsignia} text = 'Found in 11'/>
                    <Catalyst name = 'The Heart of Hypocrisy' image = {HeartOfHypocrisy} text = 'Found in 27'/>
                    {/*ROW 4*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        CAPRICORN
                    </div>
                    <Catalyst name = 'Cursed Ashes' image = {CursedAshes} text = 'Found in 3, 25'/>
                    <Catalyst name = 'Slime Jelly' image = {SlimeJelly} text = 'Found in 1, 2, 8, 10'/>
                    <Catalyst name = "Dragon's Wrath" image = {DragonsWrath} text = 'Found in 15'/>
                    {/*ROW 5*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        Gemini
                    </div>
                    <Catalyst name = 'Small Sun Badge' image = {SmallSunBadge} text = 'Found in 13, 27, 29, 30, 32'/>
                    <Catalyst name = 'Ring of Glory' image = {RingOfGlory} text = 'Found in 26, 27, 29, 30, 31, 32'/>
                    <Catalyst name = 'Fused Nerve' image = {FusedNerve} text = 'Found in 23'/>
                    {/*ROW 6*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        LEO
                    </div>
                    <Catalyst name = 'Ultra Fang'image = {UltraFang} text = 'Found in 17'/>
                    <Catalyst name = 'Twisted Fang' image = {TwistedFang} text = 'Found in 25'/>
                    <Catalyst name = "Blazing Soul" image = {BlazingSoul} text = 'Found in 13'/>
                    {/*ROW 7*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        LIBRA
                    </div>
                    <Catalyst name = 'Dream Time Circuit' image = {DreamTimeCircuit} text = 'Found in 7'/>
                    <Catalyst name = 'Mysterious Flash' image = {MysteriousFlash} text = 'Found in 4, 19, 20'/>
                    <Catalyst name = 'Reingar Student ID' image = {ReingarStudentID}/>
                    {/*ROW 8*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        PISCES
                    </div>
                    <Catalyst name = 'Blood Flaked Bone' image = {BloodFlakedBone}/>
                    <Catalyst name = 'Strange Jelly' image = {StrangeJelly}/>
                    <Catalyst name = 'Ancient Creature Nucleus' image = {AncientCreatureNucleus}/>
                    {/*ROW 9*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        SAGITTARIUS
                    </div>
                    <Catalyst name = 'Cold Look' image = {ColdLook}/>
                    <Catalyst name = "Archer's Vision" image = {ArchersVision}/>
                    <Catalyst name = "Mercenerary's Medicine" image = {MercenarysMedicine}/>
                    {/*ROw 10*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        SCORPIO
                    </div>
                    <Catalyst name = 'Erikion Carapace' image = {ErikionCarapace}/>
                    <Catalyst name = 'Sharp Spearhead' image = {SharpSpearhead}/>
                    <Catalyst name = 'Black Curse Powder' image = {BlackCursePowder} />
                    {/*ROW 11*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        TAURUS
                    </div>
                    <Catalyst name = 'Blazing Rage' image = {BlazingRage}/>
                    <Catalyst name = 'Shiny Enchantment' image = {ShinyEnchantment}/>
                    <Catalyst name = 'Horn of Desire' image = {HornOfDesire}/>
                    {/*ROW 12*/}
                    <div className='flex justify-center text-center items-center p-10 bg-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        VIRGO
                    </div>
                    <Catalyst name = 'Eternal Forest Dust' image = {EternalForestDust}/>
                    <Catalyst name = 'Flame of Soul' image = {FlameOfSoul}/>
                    <Catalyst name = 'Demon Blood Gem' image = {DemonBloodGem}/>

                </motion.div>
            </div>
        </section>
    )
}

export default Catalysts