# Vectors

Blocks relating to vectors and various actions with them.
These blocks store an X and Y component into a string.

## Making Vectors
**Ways to make a vector**

```scratch
(position::#85b1ff)
```
This sprite's location as a vector.

```scratch
(vector x: [0] y: [0]::#85b1ff)
```
Makes a vector with a specified X and Y component.

```scratch
(vector x: [0] y: [0] to x: [1] y: [1]::#85b1ff)
```
Makes a vector between two points.

```scratch
(vector [0,0] to [1,1]::#85b1ff)
```
Makes a vector between two vectors

```scratch
([0] direction to vector::#85b1ff)
```
Converts a direction to a vector with length 1.

```scratch
([0,0] vector to direction::#85b1ff)
```
Converts a vector to a direction.

## Vector Math
**Various math actions on a vector**

```scratch
(vectors [0,0] (+ v) [1,1]::#85b1ff)
```
Preforms an operation on the X and Y components of two vectors.

```scratch
(vector [0,0] length (+ v) [0]::#85b1ff)
```
Preforms an operation on the length of a vector.

```scratch
(vector [0,0] length [0]::#85b1ff)
```
Sets the length of a vector.

## Vector actions
**Move a sprite using vectors**

```scratch
go to vector [0,0]::#85b1ff
```
Go to a vector's X and Y.

```scratch
move by vector [0,0]::#85b1ff
```
Change X and Y by a vector.

## Vector Data
**Get data on a vector**

```scratch
(vector [0,0] (x v)::#85b1ff)
```
Get the x, y, or length of a vector.

```scratch
(vectors' [0,0] [1,1] dot product::#85b1ff)
```
Get the dot product of two vectors.

```scratch
(vectors' [0,0] [1,1] distance::#85b1ff)
```
Gets the distance between two vectors.

## Misc
**Some blocks relating to radians and degrees**

```scratch
([0] radians to degrees::#85b1ff)
```
Converts radians to degrees.

```scratch
([0] degrees to radians::#85b1ff)
```
Converts degrees to radians.