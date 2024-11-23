enum Role{
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}

let currentRole: Role | "SupperAdmin";

currentRole = Role.Admin;
console.log("Current Role (Admin):", currentRole);

currentRole = "SupperAdmin";
console.log("Current Role(SupperAdmin):", currentRole);








