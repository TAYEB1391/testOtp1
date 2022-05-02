let inpBoxs = document.querySelectorAll(".otpInp");

for (let i = 0; i < inpBoxs.length; i++) {
  inpBoxs[i].addEventListener("keyup", function (e) {
    e.preventDefault();
    if (this.nextElementSibling == null) {
      if (e.keyCode == 8) {
        this.previousElementSibling.focus();
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'OTP Verified !',
          footer: '<a href="dropDown.html">Go to previous page ?</a>'
        })
      }
    } else {
      this.nextElementSibling.focus();
    }
  });
  inpBoxs[i].addEventListener("keyup", function (e) {
    e.preventDefault();
    if (e.keyCode == 8) {
      this.previousElementSibling.focus();
    }
  });
}
