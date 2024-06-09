let c;

window.onload = () => {
  c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);
};
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
