function scrollToSection() {
    const targetSection = document.querySelector('.scrollable-section.second-background');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error('Target section not found!');
    }
}
function Homescroll(){
    const targetSection = document.querySelector('.background-section');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error('Target section not found!');
    }

}