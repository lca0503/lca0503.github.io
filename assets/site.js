(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const updateThemeLabel = () => {
    const label = `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} mode`;
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
  };
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {}
    updateThemeLabel();
  });

  const controls = document.querySelector('.publication-controls');
  if (!controls) return;
  controls.hidden = false;
  const search = document.querySelector('#publication-search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const papers = [...document.querySelectorAll('#all-publications .publication')];
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#no-results');
  let filter = 'all';
  const update = () => {
    const words = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const paper of papers) {
      const matches = (filter === 'all' || paper.dataset.type === filter) && words.every(word => paper.dataset.search.includes(word));
      paper.hidden = !matches;
      visible += Number(matches);
    }
    count.textContent = `${visible} ${visible === 1 ? 'result' : 'results'}${search.value.trim() ? ` for “${search.value.trim()}”` : ''}`;
    empty.hidden = visible !== 0;
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
  };
  for (const button of buttons) button.addEventListener('click', () => { filter = button.dataset.filter; update(); });
  search.addEventListener('input', update);
  document.querySelector('#reset-search').addEventListener('click', () => { filter = 'all'; search.value = ''; update(); search.focus(); });
})();
