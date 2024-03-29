import AnchorLink from "react-anchor-link-smooth-scroll";
const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
        before:rounded-full before:border-2 before:border-yellow
        before:left-[-50%] before:top-[-50%]`
    return (
        <div className = "flex flex-col gap-6 fixed top-[60%] right-7 z-30">
            <AnchorLink className = {`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href = "#home"
                onClick = {() => setSelectedPage('home')}
            />
            <AnchorLink className = {`${selectedPage === 'stats' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href = "#stats"
                onClick = {() => setSelectedPage('stats')}
            />
            <AnchorLink className = {`${selectedPage === 'rta drafts' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href = "#rta"
                onClick = {() => setSelectedPage('rta drafts')}
            />
            <AnchorLink className = {`${selectedPage === 'catalysts' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href = "#catalysts"
                onClick = {() => setSelectedPage('catalysts')}
            />
            <AnchorLink className = {`${selectedPage === 'calculator' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href = "#calculator"
                onClick = {() => setSelectedPage('calculator')}
            />
        </div>
    )
}

export default DotGroup;