// إدارة المظهر (فاتح/مظلم)
function setTheme(theme) {
  const body = document.getElementById('pageBody');
  if (body) {
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add('theme-' + theme);
    localStorage.setItem('theme', theme);
  }
}

// استعادة المظهر المحفوظ عند تحميل الصفحة
(function() {
  const saved = localStorage.getItem('theme') || 'light';
  const body = document.getElementById('pageBody');
  if (body) {
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add('theme-' + saved);
  }
})();

// إدارة اللغة (عربي/إنجليزي)
function setLang(lang) {
  const html = document.getElementById('htmlRoot');
  const body = document.getElementById('pageBody');
  if (body) {
    body.classList.remove('lang-ar', 'lang-en');
    body.classList.add('lang-' + lang);
  }
  if (html) {
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
  localStorage.setItem('lang', lang);
}

// استعادة اللغة المحفوظة
(function() {
  const saved = localStorage.getItem('lang') || 'ar';
  setLang(saved);
})();
