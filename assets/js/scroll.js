window.addEventListener(
  "scroll",
  () => {
    const o =
      window.scrollY / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty("--scroll", o.toFixed(2).toString());
  },
  !1
);
