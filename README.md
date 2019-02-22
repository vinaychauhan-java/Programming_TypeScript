# Programming_TypeScript

TypeScript is a superset to JavaScript, which means, that it compiles into pure JavaScript in the end. It provides "Strong Typing" (that�s where the name comes from). This means that we can (and should) assign types to our variables and class members. These types won�t compile to JavaScript (as JS does not know types) but we will get compilation errors if we assign wrong types or make any other type-related errors. This is a HUGE help in the daily development work and should not be underestimated. 

In additon to this, TypeScript introduces some nice features, JavaScript does not have out of the box (at least in the ES5 specification). This includes classes (�class� keyword), interfaces, generics and modules. Being able to use these constructs makes our code cleaner, easier to read and helps us avoid nasty errors. Especially in combination with the strong typing we are really able to write high quality code and track down errors quickly.

-- To install TypeScript through Node.js
D:\Programming_TypeScript>npm install -g typescript

-- To check installed packages
D:\Programming_TypeScript>npm list -g --depth=0

-- To create tsconfig.json
D:\Programming_TypeScript>tsc --init

-- In order to run the project, press Ctrl+Shift+P and type "Configure Task", press Enter to select it then TypeScript - tsconfig.json. This will create a file named tasks.json in .vscodefolder. It contains all needed commands and arguments for our build.

-- For running the project, press Ctrl+Shift+Band if all went well a new file will be created (main.js). 
node fileName.js

Happy Learning !!