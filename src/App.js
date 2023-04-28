import { useState, useEffect } from 'react';
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Stats from "./scenes/Stats";
import RTA from './scenes/RTA';
import Catalysts from './scenes/Catalysts';
import Calculator from './scenes/Calculator';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar'
import LineGradient from "./components/LineGradient";
import Footer from './scenes/Footer';
import { motion } from 'framer-motion';
function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <div className="bg-black">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-6/6 mx-auto md: h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-6/6">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("stats")}
        >

          <Stats setSelectedPage={setSelectedPage} />

        </motion.div>

      </div>

      <LineGradient />

      <div className='w-5/6 mx-auto lg:h-full'>
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("rta drafts")}
        >

          <RTA setSelectedPage={setSelectedPage} />


        </motion.div>
      </div>

      <LineGradient />

      <div className='w-5/6 mx-auto 2xl:h-full relative'>
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("catalysts")}
        >

          <Catalysts setSelectedPage={setSelectedPage} />

        </motion.div>
      </div>

      <div className = 'h-24 bg-black'>
        <Footer />
      </div>


    </div>
  );
}

export default App;
