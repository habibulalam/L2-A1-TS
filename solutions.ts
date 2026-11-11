
function multiplyValue (value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        return value*2;
    }

    return value*multiplier;
}



type ProcessInput = string | number | boolean;

function processInput(value : string | number | boolean) : ProcessInput{
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }
    else if(typeof value === "number"){
        return value*10;
    }
    else {
        if(value === true){
            return "Active";
        }
        else{
            return "Inactive";
        }
    }
}


function formatCoordinate (arr: readonly [number, number, string]) : string {
    const [latitude, longitude, locationName] = arr;
    return `Location: ${locationName} (${latitude}, ${longitude})`
}



function concatenateArrays<T>(...arrays : T[][]): T[] {
    return arrays.flat();
}



interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses (courses: Course[], minStudents: number): Course[] {
    const popularCourses : Course[] = [];
    
    for (const course of courses) {
        if (course.isPublished === true && course.students >= minStudents) {
            popularCourses.push(course);
        }
    }
    return popularCourses;
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const result: T[K][] = [];
    for (const item of items) {
        result.push(item[key]);
    }
    return result;
}



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee{
    private department: string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

async function validateAgeAsync(age: number): Promise<string>{
    
    if(age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise<void>(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })

    return "Access Granted";
}