export default function pagesBadges({ currentPage, pages, numBadges = 5 }) {
  const maxBadgesSide = numBadges - 2;

  // Without separators case
  // ex: [1, 2, 3, 4, 5]
  if (pages <= numBadges) return [...Array(pages)].map((v, i) => i + 1);

  const sideBadges = [...Array(numBadges - 1)];

  // With a separator at the end case
  // ex: [1, 2, 3, 4, null, 49]
  if (currentPage <= maxBadgesSide) {
    return [...sideBadges.map((v, i) => i + 1), null, pages];
  }

  // With a separator at the beginning case
  // ex: [1, null, 46, 47, 48, 49]
  if (currentPage > pages - maxBadgesSide) {
    return [1, null, ...sideBadges.map((v, i) => pages - i).reverse()];
  }

  // In the middle (separator left + right) case
  // ex: [1, null, 26, 27, 28, null, 49]
  sideBadges.pop();
  const curr = Math.floor(sideBadges.length / 2);
  const center = sideBadges.map((v, i) => currentPage - curr + i);

  return [1, null, ...center, null, pages];
}
