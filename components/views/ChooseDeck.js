export default st => `
<section id="chooseDeck">
${st.pictures.reduce(
  (html, pic) => html + `<img src="${pic.url}" alt="${pic.title}">`,
  ``
)}
</section>
`;
