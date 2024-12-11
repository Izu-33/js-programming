let role = "Employee";
let access;

switch (role) {
    case "Employee":
        access = "Dietary Services";
        break;
    case "Enrolled Member":
        access = "Dietary Services and One-On-One Interaction with Dietician";
        break;
    case "Subscriber":
        access = "Partial Dietary Services";
        break;
    default:
        access = "Enroll or Subscribe to Avail this Facility";
}

console.log("Access Type:", access);