class HashMap {
    constructor() {
        this.length = 0;
        this.buckets = new Array(16);
    }
    // Hashing function
    hash(string) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < string.length; i++) {
            hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }

        return hashCode % this.buckets.length;
    }

    set(key, value) {
        // Overwrite the value of the key if it exists in the hashmap
        if (this.has(key)) {
            const index = this.hash(key);
            this.buckets[index].value = value;
        }
    }

    has(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error('Trying to access index out of bound');
        } else if (key === this.buckets[index].key) {
            return true;
        }
        return false;
    }
}
