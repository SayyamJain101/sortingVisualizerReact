export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;

  const arr = array.slice();

  function mergeSort(arr, start, end) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }

  function merge(arr, start, mid, end) {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
      animations.push([...arr]);
    }

    while (i < left.length) {
      arr[k++] = left[i++];
      animations.push([...arr]);
    }

    while (j < right.length) {
      arr[k++] = right[j++];
      animations.push([...arr]);
    }
  }

  mergeSort(arr, 0, arr.length - 1);
  return animations;
}
