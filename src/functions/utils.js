export function formatDate(date) {
  return new Date(date).toLocaleDateString()
}

export function headerRenderer(str) {
  let frags = str.split('_');
  for (let i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(' ');
}