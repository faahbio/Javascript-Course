//  template strings/literals

const recipient = "James";
const sender = "Faahbio";

// Refactor the email string to use template strings

const email = "Hey " + recipient + "! How is it going? Cheers Faahbio";

const emailTemplate = `
Hey ${recipient}! 
How is it going? Cheers ${sender}
`;

console.log(email);
console.log(emailTemplate);