const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -36px 0px',
    }
  );

  revealElements.forEach((element) => {
    if (!element.classList.contains('in-view')) {
      observer.observe(element);
    }
  });
} else {
  revealElements.forEach((element) => element.classList.add('in-view'));
}
