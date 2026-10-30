(() => {
  function initializeTheme() {
    const root = document.documentElement;
    const button = document.querySelector('.theme-toggle');

    function updateLabel() {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const label = `Switch to ${nextTheme} mode`;
      button.setAttribute('aria-label', label);
      button.title = label;
    }

    updateLabel();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';

      try {
        localStorage.setItem('theme', root.dataset.theme);
      } catch (_) {
        // Theme switching still works when browser storage is unavailable.
      }

      updateLabel();
    });
  }

  function initializePublicationSearch() {
    const controls = document.querySelector('.publication-controls');
    if (!controls) return;

    const search = document.querySelector('#publication-search');
    const buttons = [...controls.querySelectorAll('[data-filter]')];
    const papers = [...document.querySelectorAll('#all-publications .publication')];
    const resultCount = document.querySelector('#result-count');
    const emptyState = document.querySelector('#no-results');
    const resetButton = document.querySelector('#reset-search');
    let activeFilter = 'all';

    function updateResults() {
      const query = search.value.trim();
      const words = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let visibleCount = 0;

      for (const paper of papers) {
        const matchesType = activeFilter === 'all' || paper.dataset.type === activeFilter;
        const matchesQuery = words.every(word => paper.dataset.search.includes(word));
        const matches = matchesType && matchesQuery;

        paper.hidden = !matches;
        if (matches) visibleCount += 1;
      }

      const noun = visibleCount === 1 ? 'paper' : 'papers';
      const queryLabel = query ? ` matching “${query}”` : '';
      resultCount.textContent = `${visibleCount} ${noun}${queryLabel}`;
      emptyState.hidden = visibleCount !== 0;

      for (const button of buttons) {
        button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter));
      }
    }

    for (const button of buttons) {
      button.addEventListener('click', () => {
        activeFilter = button.dataset.filter;
        updateResults();
      });
    }

    search.addEventListener('input', updateResults);
    resetButton.addEventListener('click', () => {
      activeFilter = 'all';
      search.value = '';
      updateResults();
      search.focus();
    });

    controls.hidden = false;
  }

  initializeTheme();
  initializePublicationSearch();
})();
