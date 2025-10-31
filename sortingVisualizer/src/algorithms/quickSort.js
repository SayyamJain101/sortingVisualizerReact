export function getQuickSortAnimations(array) {
    const animations = [];
    const arr = array.slice();

    function qS(arr,low,high){
      if(low<high){
        let pIndex=partition(arr,low,high)
        qS(arr,low,pIndex-1)
        qS(arr,pIndex+1,high)
      }
    }

    function partition(arr,low,high){
      let pivot = arr[low]
      let i=low
      let j=high
      while(i<j){
        while(arr[i]<=pivot && i<=high){
          i++;
        }
        while(arr[j]>pivot && i>=low){
          j--;
        }
        if(i<j){
          [arr[j],arr[i]]=[arr[i],arr[j]]
          animations.push([...arr])
        }
      }
      [arr[low],arr[j]]=[arr[j],arr[low]]
      animations.push([...arr])
      return j;
    }

    qS(arr,0,arr.length-1)
    // for (let i = 0; i < arr.length - 1; i++) {
    //   for (let j = 0; j < arr.length - i - 1; j++) {
    //     animations.push([j, j + 1]); // Comparison
    //     if (arr[j] > arr[j + 1]) {
    //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    //       animations.push([...arr]); // Snapshot after swap
    //     }
    //   }
    // }
  return animations;
}