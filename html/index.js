const formSubmission = () => {
  const formData = document.getElementById("contactForm");

  console.log(formData);
  const formDatas = new FormData(formData);
  console.log(formDatas);
  for (const value of formDatas.values()) {
    console.log(value);
  }
};

//write a function to check if the number is even or odd

const checkNumber = (a) =>
  a % 2 === 0 ? console.log("Number is even") : console.log("Number is odd");

const b = checkNumber(3);
console.log(b);

//write a function that convert fullname to propercase

const fullname = (a) =>
  a
    .split(" ")
    .map(
      (word) =>
        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.length).toLowerCase()
    )
    .join(" ");
console.log(fullname("smriTi poudel"));

//write a js function to check if the phone number us nepal number or not

const phoneNumber = (a) =>
  a.length === 10 && a.match(/9[8|7]/gi) //gi=global insensitive(target to both upper and lower case)
    ? console.log(` nepal's number`)
    : console.log(`doesn't belong to nepal)`);
const pp = phoneNumber("97924566766");
console.log(pp);
