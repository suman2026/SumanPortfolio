export function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if(section) {
        // offset for header height 
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: 'smooth'  
        });
    }
}