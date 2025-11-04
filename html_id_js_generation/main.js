function main() {
  setTimeout(
    function() {
      const result = "Hello, World!";
      // Both elements are automatically created based on the HTML's id.
      hello_title.innerHTML = result;
      hello_p.innerHTML = result;
    },
    2000
  );
};
document.addEventListener("DOMContentLoaded", main);
