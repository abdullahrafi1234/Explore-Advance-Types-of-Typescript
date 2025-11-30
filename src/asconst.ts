// as const assertion

// enum UserRules {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRules = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

// There are two way
// 1. typeof
// 2. keyof

const canEdit = (role: keyof typeof UserRules) => {
  if (role === UserRules.Admin || role === UserRules.Editor) return true;
  else return false;
};

const isEditPermissible = canEdit(UserRules.Admin);
console.log(isEditPermissible);
