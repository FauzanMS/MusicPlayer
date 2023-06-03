class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

export class DLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(element) {
        var new_node = new Node(element);
        var last = this.head;
        new_node.next = null;

        if (this.head == null) {
            new_node.prev = null;
            this.head = new_node;
            return;
        }

        while (last.next != null)
            last = last.next;
        
        last.next = new_node;
        new_node.prev = last;
    }

    isEmpty() {
        return (this.size === 0);
    }

    traverseTo(id) {
        if (!this.head)
            return;
        if (this.head.element.id < id) {
            while (this.head.element.id !== id) {
                this.head = this.head.next;
            }
        }
        else {
            while (this.head.element.id !== id) {
                this.head = this.head.prev;
            }
        }
    }

    forward() {
        if (this.head && this.head.next)
            this.head = this.head.next;
    }

    backward() {
        if (this.head && this.head.prev)
            this.head = this.head.prev;
    }

    printDLinkedList() {
        let temp = this.head;
        while (temp) {
            temp = temp.next;
        }
    }

    getCurrentHead() {
        if (this.head)
            return this.head;
        return null;
    }
}


