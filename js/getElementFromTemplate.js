// getElementFromTemplate.js

const getElementFromTemplate = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template.trim();
  return div;
};

export default getElementFromTemplate;
