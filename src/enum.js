// enum
// set of fixed string literal type
// type UserRules = "Admin" | "Editor" | "Viewer";
var UserRules;
(function (UserRules) {
    UserRules["Admin"] = "Admin";
    UserRules["Editor"] = "Editor";
    UserRules["Viewer"] = "Viewer";
})(UserRules || (UserRules = {}));
// const canEdit = (role: UserRules) => {
//   if (role === "Admin" || role === "Editor") return true;
//   else return false;
// };
var canEdit = function (role) {
    if (role === UserRules.Admin || role === UserRules.Editor)
        return true;
    else
        return false;
};
var isEditPermissible = canEdit(UserRules.Admin);
console.log(isEditPermissible);
