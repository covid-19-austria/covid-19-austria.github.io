// Taken from https://www.geeksforgeeks.org/program-spearmans-rank-correlation/
function spearmanCorrelationCoefficient(X, Y) {
  let n = X.length;
  let sigma_x = 0, sigma_y = 0, sigma_xy = 0, sigma_xsq = 0, sigma_ysq = 0;
  for (let i = 0; i < n - 1; i++) {
    sigma_x += X[i];
    sigma_y += Y[i];
    sigma_xy += X[i] * Y[i];
    sigma_xsq += X[i] * X[i];
    sigma_ysq += Y[i] * Y[i]
  }

  let num = (n * sigma_xy - sigma_x * sigma_y);
  let den = Math.sqrt((n * sigma_xsq - Math.pow(sigma_x, 2)) * (n * sigma_ysq - Math.pow(sigma_y, 2)));
  return num / den
}

// Taken from https://stackoverflow.com/a/41089665/10738825
function pearsonCorrelationCoefficient(x, y) {
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
  const minLength = x.length = y.length = Math.min(x.length, y.length),
    reduce = (xi, idx) => {
      const yi = y[idx];
      sumX += xi;
      sumY += yi;
      sumXY += xi * yi;
      sumX2 += xi * xi;
      sumY2 += yi * yi;
    };
  x.forEach(reduce);
  return (minLength * sumXY - sumX * sumY) / Math.sqrt((minLength * sumX2 - sumX * sumX) * (minLength * sumY2 - sumY * sumY));
}
