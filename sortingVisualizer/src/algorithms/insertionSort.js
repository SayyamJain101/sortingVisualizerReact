export function getInsertionSortAnimations(array) {
    const animations = [];
    const arr = array.slice();
    for (let i = 0; i < arr.length; i++) {
      let j=i;
      while(j>0 && arr[j-1]>arr[j]){
        [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
        animations.push([...arr]); // Snapshot after swap
        j--;
      }
    }
  return animations;
}