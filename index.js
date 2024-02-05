$(".action").on("click", function () {
    var imgbt = "." + this.classList[2] + " .btn img";
  
    var textToggle = ".answer-" + this.classList[2];
    if ($(imgbt).hasClass("plus")) {
      $(imgbt).removeClass("plus");
      $(imgbt).addClass("minus");
      $(textToggle).show();
    } else {
      $(imgbt).removeClass("minus");
      $(imgbt).addClass("plus");
      $(textToggle).hide();
    }
  });