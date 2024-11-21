function darkmode() 
		{
			var element = document.body; element.classList.toggle("dark");
			
			

		}
		
		//W3schools thank you.
function KSSearchFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('input-bar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("WebsiteList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function ok()
{}