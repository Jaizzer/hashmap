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
        let index = this.hash(key);

        // Overwrite the value of the key if it exists in the hashmap
        if (this.has(key)) {
            this.buckets[index].value = value;
        } else {
            while (this.buckets[index] !== undefined) {
                index++;

                // Cycle back to the array if end is reached.
                if (index == this.buckets.length) {
                    index = 0;
                }
            }
            // Insert the key-value pair to the hash map.
            this.buckets[index] = { key: key, value: value };

            // Update key count.
            this.length++;

            const loadFactor = 0.75;
            const isLoadFactorReached = this.length / this.buckets.length >= loadFactor;

            // Double the buckets if load factor is reached.
            if (isLoadFactorReached) {
                this.buckets = this.buckets.concat(new Array(this.buckets.length));
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        if (this.has(key)) {
            return this.buckets[index].value;
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error('Trying to access index out of bound');
        } else if (this.buckets[index] !== undefined && key === this.buckets[index].key) {
            return true;
        }
        return false;
    }

    clear() {
        // Create new array of the same size of the previous.
        this.buckets = new Array(this.buckets.length);

        // Reset the length.
        this.length = 0;
    }

    remove(key) {
        const index = this.hash(key);

        // Remove the key if it exists by setting its container bucket to undefined.
        if (this.has(key)) {
            this.buckets[index] = undefined;
            this.length--;
            return true;
        }
        return false;
    }

    // Returns an array of keys.
    keys() {
        const keys = this.buckets.filter((value) => value !== undefined).map((obj) => obj.key);
        return keys;
    }

    // Returns an array of values.
    values() {
        const values = this.buckets.filter((value) => value !== undefined).map((obj) => obj.value);
        return values;
    }

    // Returns an array of key-value pairs.
    entries() {
        const entries = this.buckets.filter((value) => value !== undefined).map((obj) => [obj.key, obj.value]);
        return entries;
    }
}
