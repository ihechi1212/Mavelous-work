          /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
          function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        
        /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }

        
        
    
        function myFunction() {
            input = document.getElementById("myInput");
            
        var input, filter, divOutside, divInner, p, i, txtValue;
        filter = input.value.toUpperCase();
        divOutside = document.getElementById("outer");
        divInner = divOutside.getElementsByTagName("li");
        for (i = 0; i < divInner.length; i++) {
            p = divInner[i].getElementsByTagName("p")[0];
            txtValue = p.textContent || p.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                divInner[i].style.display = "";
            } else {
                divInner[i].style.display = "none";
            }
        }

        if(input.value < 1){
            divOutside.style.visibility = 'hidden'
        }else{
            divOutside.style.visibility = 'visible'
            divOutside.style.display = 'block'
        }
    }



























    


//  function myMap() {
//             var mapProp = {
//                 center:new google.maps.LatLng(51.508742,-0.120850),
//                 zoom:5,
//             };
//             var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//             }
//             myMap();