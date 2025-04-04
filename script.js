// Função para exibir a categoria selecionada
function showCategory(categoryId) {
    // Primeiro, esconder todas as seções
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Exibir a seção clicada
    const selectedSection = document.getElementById(categoryId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
