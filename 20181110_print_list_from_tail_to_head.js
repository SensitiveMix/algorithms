/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function printListFromTailToHead (head) {
  let ret = []
    // write code here
  while (head !== null) {
    ret.unshift(head.val)
    head = head.next
  }
  return ret
}

console.log(printListFromTailToHead())
