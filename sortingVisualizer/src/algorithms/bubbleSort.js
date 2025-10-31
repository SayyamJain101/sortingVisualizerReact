export function getBubbleSortAnimations(array) {
  const animations = [];
  const arr = array.slice();
  for (let i = arr.length-1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        animations.push([...arr]);
      }
    }
  }
  return animations;
}
