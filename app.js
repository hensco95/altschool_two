let show_password = document.getElementById("show_p");
let p_field = document.getElementById("password");

show_password.addEventListener("click", () => {
  if (p_field.type === "password") {
    p_field.type = "text";
  } else {
    p_field.type = "password";
  }
});
