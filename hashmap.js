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
}
