export const getCurrentDateInISOFormat = () => {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth() returns 0-11
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}Z`;
};

export const averageIntensityInBlocks = (data) => {
  const twoHourBlock = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
  let blockStart = new Date(data[0].from).getTime();
  let blockEnd = blockStart + twoHourBlock;
  let currentBlock = [];
  let averages = [];

  data.forEach((entry) => {
    let entryStart = new Date(entry.from).getTime();
    let entryEnd = new Date(entry.to).getTime();

    if (entryStart >= blockStart && entryEnd <= blockEnd) {
      currentBlock.push(entry.intensity.forecast);
    } else {
      // Calculate and store the average for the completed block
      const average =
        currentBlock.reduce((acc, cur) => acc + cur, 0) / currentBlock.length;
      averages.push({
        from: new Date(blockStart).toISOString(),
        to: new Date(blockEnd).toISOString(),
        averageIntensity: average,
      });

      // Reset for the next block
      blockStart = blockEnd;
      blockEnd = blockStart + twoHourBlock;
      currentBlock = [entry.intensity.forecast];
    }
  });

  // Handle the last block
  if (currentBlock.length > 0) {
    const average =
      currentBlock.reduce((acc, cur) => acc + cur, 0) / currentBlock.length;
    averages.push({
      from: new Date(blockStart).toISOString(),
      to: new Date(blockEnd).toISOString(),
      averageIntensity: average,
    });
  }

  return averages;
};
