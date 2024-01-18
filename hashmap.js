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
        const index = this.hash(key);

        // Overwrite the value of the key if it exists in the hashmap
        if (this.has(key)) {
            this.buckets[index].value = value;
        } else {
            const loadFactor = 0.75;
            const isLoadFactorReached = this.length / this.buckets.length >= loadFactor;

            // Double the buckets if load factor is reached.
            if (isLoadFactorReached) {
                this.buckets = this.buckets.concat(new Array(this.buckets.length));
            }
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
