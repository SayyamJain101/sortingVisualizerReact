export function getSelectionSortAnimations(array) {
    const animations = [];
    const arr = array.slice();
    for (let i = 0; i <= arr.length - 2; i++) {
      let mini = i
      for (let j = i; j <= arr.length - 1; j++) {
        if (arr[mini] > arr[j]) {
          mini=j
        }
      }
      [arr[mini],arr[i]]=[arr[i],arr[mini]]
      animations.push([...arr]);
    }
  return animations;
}