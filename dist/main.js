"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
let currentRole;
currentRole = Role.Admin;
console.log("Current Role (Admin):", currentRole);
currentRole = "SupperAdmin";
console.log("Current Role(SupperAdmin):", currentRole);
