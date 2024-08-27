  document.addEventListener("DOMContentLoaded", ()=>{
    const navLinks = document.querySelectorAll(".nav-link");

    // Função para remover a classe 'active' de todos os links
    function removeSelectedClass() {
      navLinks.forEach(link => link.classList.remove("active"));
    }

    // Função para adicionar a classe 'active' ao link ativo
    function addSelectedClass(id) {
      const activeLink = document.querySelector(`a[href="#${id}"]`);
      activeLink.classList.add("active");
    }

    // Função que verifica qual seção está no viewport
    function onScroll() {
      const sections = document.querySelectorAll("[data-section]");
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    

      sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.4 &&
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.4) {
          const currentId = section.getAttribute("id");
          console.log(currentId)
          removeSelectedClass();
          addSelectedClass(currentId);
        }
      });
    }

    // Adiciona um listener de scroll para chamar a função onScroll
    window.addEventListener("scroll", onScroll);
  });
