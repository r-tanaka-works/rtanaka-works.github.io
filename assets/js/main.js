        function NavToggle() {
            target = document.getElementById("footer");
            target.id = "footer-mini";
            target = document.getElementById("wrapper");
            target.id = "wrapper-big";
            target = document.getElementById("sec1");
            target.id = "sec1-fade"; 
			window,setTimeout( delay, 300 );
            return false;
        }
		function  delay(){
			target3 = document.getElementById("sec2");
			target3.id = "sec2-active";
		}