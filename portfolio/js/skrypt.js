function myOverFunctiondc(){
    document.getElementById("dc").src='./img/dc-kolor.webp';
    document.getElementById("dc").style.transition = 0.3;
}

function myOverFunctiondcleavedc(){
    document.getElementById("dc").src='./img/dc-czarne.webp';
}

function myOverFunctionig(){
    document.getElementById("ig").src='./img/ig-kolor.png';
    document.getElementById("ig").style.transition = 0.3;
}

function myOverFunctiondcleaveig(){
    document.getElementById("ig").src='./img/ig-czarne.png';
}


document.addEventListener("DOMContentLoaded", function () {
    const languagesSection = document.getElementById("jezyki");
    const skillsBox = document.querySelector(".box.hidden");
  
    // Funkcja sprawdzająca, czy element jest widoczny na ekranie
    const isElementInViewport = function (el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Funkcja obsługująca animację ładowania paska umiejętności
    const animateSkills = function () {
      const skillLines = document.querySelectorAll(".line");
      const skillPercentages = document.querySelectorAll("[id^='procent-']");
  
      skillLines.forEach((line, index) => {
        const percentage = skillPercentages[index].textContent.replace("%", "");
        line.style.width = percentage;
        line.style.opacity = 1;
      });
    };
  
    // Funkcja uruchamiająca animację po wejściu sekcji "Languages" na ekran
    const handleSkillsAnimation = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkills();
          skillsObserver.unobserve(languagesSection);
        }
      });
    };
  
    // Utwórz obserwatora dla sekcji "Languages"
    const skillsObserver = new IntersectionObserver(handleSkillsAnimation, {
      threshold: 0.5, // Określa, ile procent elementu musi być widoczne
    });
  
    // Rozpocznij obserwację sekcji "Languages"
    skillsObserver.observe(languagesSection);
  });
  