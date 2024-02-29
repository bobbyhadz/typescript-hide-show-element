const el = document.getElementById('container');

const btn = document.getElementById('btn');

if (el != null && btn != null) {
  btn.addEventListener('click', function handleClick() {
    if (el.style.display === 'none') {
      // ✅ Shows element if hidden
      el.style.display = 'block';

      btn.textContent = 'Hide element';
    } else {
      // ✅ Hides element if shown
      el.style.display = 'none';

      btn.textContent = 'Show element';
    }
  });
}