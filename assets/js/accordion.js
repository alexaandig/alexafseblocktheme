(() => {
  const e = document.querySelectorAll("details");
  for (const s of e)
    s.addEventListener("click", (t) => {
      for (const t of e)
        if (t !== s) {
          t.removeAttribute("open");
          const e = t.getElementsByTagName("section").item(0);
          e && (e.classList.remove("is-open"), e.classList.add("is-closed"));
        }
      const o = s.getElementsByTagName("section").item(0);
      o &&
        (o.style.setProperty("--height", o.scrollHeight + "px"),
        s.hasAttribute("open")
          ? (o.classList.add("is-closed"), o.classList.remove("is-open"))
          : (o.classList.remove("is-closed"), o.classList.add("is-open")));
    });
})();
