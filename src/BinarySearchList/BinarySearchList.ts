export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);

    if (haystack[mid] === needle) {
      return true;
    }

    if (haystack[mid] < needle) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return false;
}
