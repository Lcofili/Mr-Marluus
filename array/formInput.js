let y = document.getElementById("output");

const SubmitData = () => {
  let num1 = document.getElementById("firstname").value;
  let num2 = document.getElementById("secondname").value;
  let num3 = document.getElementById("email").value;
  let num4 = document.getElementById("password").value;
  let num5 = document.getElementById("confirm password").value;

  if (num1 === "") {
    output.innerHTML = "Firstname is required";
    return false;
  }

  if (num2 === "") {
    output.innerHTML = "secondname is required";
    return false;
  }

  if (num3 === "") {
    output.innerHTML = "Enter your email";
    return false;
  }

  if (num4 === "") {
    output.innerHTML = "Enter your password";
    return false;
  }

  if (num5 !== num4) {
    output.innerHTML = "password doesnt match";
    return false;
  } else {
    output.innerHTML = `Welcome + ${firstName}`;
    return true;
  }
  console.log(firstName);
};
