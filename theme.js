// Dark mode button: switches the page between light and dark and remembers the choice in this browser.
// Without a choice the page follows the system setting. (The choice is applied early by a script in each page's head.)
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  if (!button) return;
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  function isDark() { return root.dataset.theme ? root.dataset.theme === 'dark' : system.matches; }
  function show() {
    var dark = isDark();
    button.querySelector('.label').textContent = dark ? 'Light mode' : 'Dark mode';
    button.querySelector('.icon').textContent = dark ? '\u2600' : '\u263E';
  }
  button.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    show();
  });
  system.addEventListener('change', show);
  show();
})();
