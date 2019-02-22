// Interfaces allow us to create contracts wherein other classes/objects have to get it implement

// Importane Note:- Interfaces are not compiled to JavaScript.
// It's just used for checking/validation done by TypeScript compiler.

interface User {
    username: string;
    password: string;
    confirmPassword?: string; // Optional property => Does not have to be implemented
}

let user: User;

// This statement  does satisfy the interface
user = { username: 'VinayChauhan', password: 'VinayChauhan' };

// Interfaces can also contain functions (without the function body - as it only is a blueprint/requirement)
interface CanDrive {
    accelerate(speed: number): void;
}

let car: CanDrive = {
    accelerate: function (speed: number) {
        console.log("Speed ::" + speed);
    }
};