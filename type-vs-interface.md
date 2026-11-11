Title : Type vs Interface in TypeScript

Introduction:

When I started learning TypeScript, I saw that we can use both
type and interfaces to describe the structure of data. At first they
looked almost the same to me because both can define that what properties an
object should have. But there are some differences, and knowing them
helps us choose the right one.

Detailed Explanation:

The main diffarence is that an interface is mostly used to describe
the shape of an object. It can also be extended by another interface.
For example:

        interface User {
            name: string;
            age: number;
        }

        interface Admin extends User {
            role: string;
        }

Here, Admin interface extended User interface thats why it can get automatically name and age from User and also it added a new variable called role .

A type alias can also describe an object but a type alias can not be extended, 
but it can do other things that interface can't do.
It can be used for union types, primitive types, tuples, and other
combinations.

        type Status = "active" | "inactive";
        type Point = [number, number];

One importent difference is that interfaces can be declared more than
once with the same name where type alias does not work like this.

Conclusion:

In my opinion, both are useful and there is no need to choose only one.
I will use interface when I mainly need to describe an object
structure, especially when it may be extended. I would use type when I
need unions, tuples, or more flexible type combinations.