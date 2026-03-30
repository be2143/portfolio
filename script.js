document.querySelectorAll('.site-nav a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var id = this.getAttribute('href');
    if (id && id.length > 1) {
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Selected work: hover/focus swaps active preview image + updates tech caption.
(function () {
  var showcase = document.querySelector('.projects-showcase');
  if (!showcase) return;

  var links = showcase.querySelectorAll('.projects-links li[data-preview]');
  var caption = document.getElementById('preview-caption');
  var description = document.getElementById('preview-description');

  function setActive(li) {
    var id = li.getAttribute('data-preview');
    var tech = li.getAttribute('data-tech') || '';
    var desc = li.getAttribute('data-desc') || '';
    if (id == null) return;

    showcase.classList.add('is-interacting');
    links.forEach(function (other) {
      other.classList.toggle('is-hovered', other === li);
    });
    showcase.setAttribute('data-active-preview', id);

    if (caption) caption.textContent = tech;
    if (description) description.textContent = desc;
  }

  function clearHover() {
    showcase.classList.remove('is-interacting');
    links.forEach(function (li) {
      li.classList.remove('is-hovered');
    });

    // Reset to first item
    showcase.setAttribute('data-active-preview', '0');
    var first = showcase.querySelector('.projects-links li[data-preview="0"]');
    if (caption && first) caption.textContent = first.getAttribute('data-tech') || '';
    if (description && first) description.textContent = first.getAttribute('data-desc') || '';
  }

  links.forEach(function (li) {
    li.addEventListener('mouseenter', function () {
      setActive(li);
    });
    li.addEventListener('focusin', function () {
      setActive(li);
    });
  });

  showcase.addEventListener('mouseleave', clearHover);
})();
