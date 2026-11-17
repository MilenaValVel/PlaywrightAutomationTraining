type Status =
  | "Submitted"
  | "In Review"
  | "Waiting for Info"
  | "Resolved";

const current: Status = "In Review";
let next: Status = "Resolved";

let allowed = false;

switch (current as Status) {
  case "Submitted":
    allowed = next === "In Review";
    break;

  case "In Review":
    allowed =
      next === "Resolved" ||
      next === "Waiting for Info";
    break;

  case "Waiting for Info":
    allowed = next === "In Review";
    break;

  case "Resolved":
    allowed = false;
    break;

  default:
    throw new Error(`Unknown status: ${current}`);
}

console.log(allowed ? "Allowed" : "Not allowed");