// enum

// set of fixed string literal

// type UserRules = "Admin" | "Editor" | "Viewer";

enum UserRules {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

// const canEdit = (role: UserRules) => {
//   if (role === "Admin" || role === "Editor") return true;
//   else return false;
// };

const canEdit = (role: UserRules) => {
  if (role === UserRules.Admin || role === UserRules.Editor) return true;
  else return false;
};

const isEditPermissible = canEdit(UserRules.Admin);
console.log(isEditPermissible);
