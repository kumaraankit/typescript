"use strict";
let anyExample; // Any kind of data can be assigned
let unknownExample; // before assigning we need to check the type of data otherwise it will throw error
anyExample = 123;
anyExample = "Ankit";
anyExample = false;
// Before dng any operation unknnown allows us to check the type and then perform the operation
if (typeof unknownExample === "string") {
    //perofm something on unknown
}
