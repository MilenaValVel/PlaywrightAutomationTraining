const requestPrefix: string = "REQ-";

const requestId: string = "REQ-1042";

const numId: number = Number(requestId.replace(requestPrefix, ""));

console.log(numId);

const nextId: number = numId + 1;

const newRequestId: string = `${requestPrefix}${nextId}`;

console.log(newRequestId); // REQ-1043