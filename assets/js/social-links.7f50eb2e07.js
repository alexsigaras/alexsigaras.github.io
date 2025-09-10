document.addEventListener('DOMContentLoaded', function () {
  fetch('assets/data/social-links.json')
    .then(function (response) { return response.json(); })
    .then(function (links) {
      document.querySelectorAll('[data-social-links]').forEach(function (container) {
        var filter = (container.getAttribute('data-social-links') || '').trim();
        var keys = filter ? filter.split(/\s+/) : Object.keys(links);
        keys.forEach(function (key) {
          var link = links[key];
          if (!link) return;
          var a = document.createElement('a');
          a.href = link.href;
          a.target = '_blank';
          a.className = 'btn btn-link';
          var i = document.createElement('i');
          i.className = link.icon + ' i-before';
          a.appendChild(i);
          a.appendChild(document.createTextNode(link.label));
          container.appendChild(a);
        });
      });
    });
});
