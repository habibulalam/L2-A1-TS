Title : Access Modifiers in TypeScript

Introduction: 

In OOP classes sometime we do not want to make accessible/change sensitive information publicly, we want to restrict those information inside that class or a particular area, thats where the Access modifiers were introduced. there are 4 type of access modifier in Type Script Public, Private, Protected, Readonly. But in JAVA OOP there are Default access modifier instead of Readonly, Default modifier can be accessible in every classes and files in the same package.

Detailed Explanation:

1) Public means a property that can be accessible from anywhere. we can access a public property from its own class,child class

            class User {
                 public name: string = "Habib";
            }

            const user = new User();
            user.name; 


2) Private means a property that only accessible inside of its own class, we cannot access it form other class or child class.

            class Account {
                 private balance: number = 500;
            }

3) Protected means a property that can be accessible  in its own class and child class only, protected property can not be accessible by any class that are not connected to that specific class where the property declared.

            class Employee {
                protected name: string = "Habib";
            }

            class Manager extends Employee {
                showName(): string {
                    return this.name;
                }
            }

4) Readonly means a property that can only be readable after initialization, and after that we can not modify or change that properly value from anywhere.

            class Student {
                readonly id: number;
                name: string;

                constructor(id: number, name: string) {
                    this.id = id;
                    this.name = name;
                }
            }

Conclusion: 

By using access modifier we can limit the accessibility of any properly/variable/method,  its helps us to protect sensitive data and make a proper structure of data.