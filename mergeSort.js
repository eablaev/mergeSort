const mergeSort = (c) => {
  if (c.length <= 1) {
    return c;
  }
  const mid = Math.floor(c.length/2)
  const a = c.slice(0,mid);
  const b = c.slice(mid);
  return sort(mergeSort(a),mergeSort(b))
}
const sort = (a,b) => {
  let i = 0;
  let j = 0;
  let k = 0;
  const c = [];
 
  while(i < a.length && j < b.length) {
    if(a[i] < b[j]) {
    c[k] = a[i];
    i++;
    } else {
    c[k] = b[j]
    j++
    }
    k++;
 }
  while(j < b.length) {
    c[k] = b[j]
    j++;
    k++;
  }
  while(i < a.length) {
    c[k] = a[i]
    i++;
    k++;
  }
  
  return c
}
  

c = [4,1,3,2,6,5]
console.log(mergeSort(c))
