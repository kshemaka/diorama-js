export class Vector3 {
    x
    y
    z

    constructor(x = 0, y = 0, z = 0) {
        this.x = x
        this.y = y
        this.z = z
    }

    norm() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }

    /**
     *
     * @param {Vector3} a
     * @param {number} b
     * @returns {Vector3}
     */
    static multiplication(a, b) {
        return new Vector3(a.x * b, a.y * b, a.z * b)
    }

    /**
     * Returns the result of subtracting one vector from another.
     *
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector3}
     */
    static difference(a, b) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z)
    }

    /**
     * Returns the scalar product of two vectors.
     *
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {number}
     */
    static dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z
    }

    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`
    }
}
