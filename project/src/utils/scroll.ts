export function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }