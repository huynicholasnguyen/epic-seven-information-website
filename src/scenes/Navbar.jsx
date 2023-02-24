import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedpage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className = {`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover: text-yellow transition duration-500`}
        href = {`#${lowerCasePage}`}
        onClick = {() => setSelectedpage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({selectedPage, setSelectedpage}) => {
    const [isMenuToggled, setisMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return(
        <nav className = {`z-40 w-full fixed top-0 py-6`}>
            <div className = "flex items-center justify-between mx-auto w-5/6">
                <h4 className = "font-playfair text-3xl font-bold">Epic Seven</h4>
                
                {/*DESKTOP NAV */}
                {isDesktop ? (
                    <div className = "flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link 
                        page = "Home"
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedpage}
                        />
                        <Link 
                            page = "Stats"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedpage}
                        />
                        <Link 
                            page = "Catalysts"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedpage}
                        />
                        <Link 
                            page = "RTA Drafts"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedpage}
                    />
                    </div>
                ) : (
                <button className = "rounded-full bg-red p-2" onClick = {() => setisMenuToggled(!isMenuToggled)}>
                    
                </button>
                ) }

                {/*MOBILE*/}
                {!isDesktop && isMenuToggled && (
                    <div className = "fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* CLOSE ICON */}
                        <div className = "flex justify-end p-12">
                            <button onClick = {() => setisMenuToggled(!isMenuToggled)}>

                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className = "flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                        <Link 
                        page = "Home"
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedpage}
                        />
                        <Link 
                            page = "Stats"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedpage}
                        />
                        <Link 
                            page = "Catalysts"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedpage}
                        />
                        <Link 
                            page = "RTA Drafts"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedpage}
                        />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;