function Node (val, next) {
  this.val = val;
  this.next = next;
}

const node5 = new Node(5, null);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

const reverseList = (head, tail, prevGroup) => {
  let prev = head;
  let current = head.next;
  let result = head;
  const nextGroup = tail.next;

  if (!current) {
    return head;
  }

  while (current !== nextGroup) {
    if (current.next === nextGroup) {
      result = current;
    }

    const temp = current;
    current = current.next;
    temp.next = prev;
    prev = temp;
  }
  head.next = nextGroup;
  if (prevGroup) {
    prevGroup.next = result;
  }

  return result;
}

const reverseKGroup = (head, k) => {
  if (k === 1) {
    return head;
  }

  let start = head;
  let result = head;
  let prevGroup = null;

  while (true) {
    if (!start) {
      return result;
    }

    let end = start;
    for (let i = 0; i < k - 1; i++) {
      end = end.next;
      if (!end) {
        return result;
      }
    }
    const currentStart = start;
    const nextGroup = end.next;
    const newStart = reverseList(start, end, prevGroup);
    if (!prevGroup) {
      result = newStart;
    }
    prevGroup = currentStart;
    start = nextGroup;
  }

}

const result = reverseKGroup(node1, 5);

let ptr = result;
while (ptr) {
  console.log(ptr.val);
  ptr = ptr.next;
}
