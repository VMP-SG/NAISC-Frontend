export function getGraphData() {
  const hour = new Date().getHours();
  const counts = [0, 0, 0, 0, 0, 6, 7, 7, 19, 29, 30, 51, 60, 48, 30, 22, 17, 20, 46, 57, 80, 43, 18, 9];
  const scaleFactor = counts[hour] === 0 ? 1 : 51 / counts[hour];
  const scaledCounts = counts.map((count) => Math.floor(count * scaleFactor));
  const adjCounts = hour === 23 ? scaledCounts : [...scaledCounts.slice(hour + 1), ...scaledCounts.slice(0, hour + 1)];

  const labels = adjCounts.map((_, i) => {
    const now = new Date();
    now.setHours(hour + 1 + i);
    return now.toLocaleString('en-US', { hour: 'numeric', hour12: true })
  });
  console.log(labels, adjCounts);
  return [labels, adjCounts];
}

