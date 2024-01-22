# HashMap Implementation in JavaScript

This JavaScript HashMap implementation provides a basic structure for managing key-value pairs using a hash map data structure. A hash map allows efficient storage, retrieval, and manipulation of data by utilizing a hash function to map keys to specific locations within an array of buckets.

## Key Features

-   **Dynamic Sizing:** The hash map dynamically adjusts its size to accommodate the increasing number of key-value pairs while maintaining optimal performance.
-   **Collision Handling:** Collisions, where multiple keys map to the same index, are managed using linear probing to find the next available bucket.
-   **Load Factor and Rehashing:** The implementation includes a load factor check, triggering rehashing when the threshold is reached. Rehashing involves doubling the size of the buckets array to ensure even distribution of key-value pairs.
-   **Key Operations:**
    -   **Set:** Inserts or updates a key-value pair.
    -   **Get:** Retrieves the value associated with a specific key.
    -   **Has:** Checks if a particular key exists in the hash map.
    -   **Remove:** Removes a specific key-value pair.
    -   **Clear:** Empties the entire hash map.
    -   **Keys, Values, Entries:** Retrieve arrays of keys, values, or key-value pairs.

## HashMap Class Methods

### `constructor()`

-   Initializes a new instance of the hash map.
-   Sets the initial length to 0.
-   Creates an array of buckets with a default size of 16.

### `hash(string)`

-   Calculates the hash code for a given string using a basic hashing algorithm.
-   Returns the index for placing the key-value pair within the array of buckets.

### `set(key, value)`

-   Inserts or updates a key-value pair in the hash map.
-   Handles collisions by using linear probing to find the next available bucket.
-   Checks the load factor and triggers rehashing if the threshold is reached.

### `rehash()`

-   Doubles the size of the buckets array.
-   Replaces key-value pairs in the new buckets based on the updated hash values.
-   Resets the length counter.

### `get(key)`

-   Retrieves the value associated with a specific key.
-   Performs linear probing if the key is not found in its intended location due to collisions.

### `has(key)`

-   Checks if a particular key exists in the hash map.
-   Considers collisions and performs linear probing if necessary.

### `clear()`

-   Empties the entire hash map.
-   Creates a new array of buckets with the same size as the previous one.
-   Resets the length counter to 0.

### `remove(key)`

-   Removes a specific key-value pair from the hash map.
-   Sets the corresponding bucket to `undefined`.
-   Decrements the length counter if the key is successfully removed.

### `keys()`

-   Returns an array containing all the keys in the hash map.
-   Filters out `undefined` values from the buckets array.

### `values()`

-   Returns an array containing all the values in the hash map.
-   Filters out `undefined` values from the buckets array.

### `entries()`

-   Returns an array containing all key-value pairs in the hash map.
-   Filters out `undefined` values from the buckets array and formats them as arrays of key-value pairs.

These methods collectively provide functionality for managing key-value pairs, handling collisions, and maintaining the integrity of the hash map.

## Contribution

Contributions are welcome! If you find any issues or have improvements to suggest, feel free to open an issue or create a pull request.

## License

This HashMap implementation is licensed under the [MIT License](LICENSE).
