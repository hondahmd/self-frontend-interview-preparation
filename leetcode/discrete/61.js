var rotateRight = function (head, k) {
  if (!head || !k) return head;
  const tmp = head;
  let ptr = head;
  let length = 0;
  while (ptr) {
    length++;
    ptr = ptr.next;
  }
  if (length === 1 || !(k % length)) return head;
  ptr = head;
  const step = length - (k % length);
  for (let i = 0; i < (step - 1); i++) {
    ptr = ptr.next;
  }
  const newStart = ptr.next;
  ptr.next = null;
  ptr = newStart;
  while (ptr && ptr.next) ptr = ptr.next;
  ptr.next = tmp;
  return newStart;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const list = [1, 2, 3, 4, 5];
const nodes = [];
for (let i = 0; i < list.length; i++) {
  nodes.push(new ListNode(list[i]));
}
for (let i = 0; i < nodes.length - 1; i++) {
  nodes[i].next = nodes[i + 1];
}
console.log(rotateRight(nodes[0], 10));
