document.addEventListener('DOMContentLoaded', function() {
 
  const searchForm = document.getElementById('search');
  const searchInput = document.getElementById('search-input');
  const listItems = document.querySelectorAll('#list li');

  if (!searchForm || !searchInput || listItems.length === 0) {
      console.error('Ошибка: Не найдены необходимые элементы!');
      return;
  }

  function resetSearch() {
      listItems.forEach(item => {
          item.style.display = ''; 
          item.innerHTML = item.getAttribute('data-value'); 
      });
  }

  function handleSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      
      resetSearch(); 

      
      if (!searchTerm) return;

      listItems.forEach(item => {
          const originalText = item.getAttribute('data-value');
          const lowerText = originalText.toLowerCase();

          if (lowerText.includes(searchTerm)) {
              const highlightedText = originalText.replace(
                  new RegExp(searchTerm, 'gi'),
                  match => `<span style="background-color: yellow">${match}</span>`
              );
              item.innerHTML = highlightedText;
          } else {
              item.style.display = 'none'; 
          }
      });
  }

  searchForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
      handleSearch();
  });

  
  searchInput.addEventListener('input', handleSearch);

  console.log('Система поиска успешно инициализирована!');
});
