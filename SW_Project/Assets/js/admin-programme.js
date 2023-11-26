var flag = 0;
    function forfocus() {
        if(flag == 1){
            document.getElementById("for-down").style.marginBottom = "0vh";    
            flag = 0;
        }
        else{
        document.getElementById("for-down").style.marginBottom = "7vh";
        flag = 1;
        }
        
    
    }

    function forblur() {
        document.getElementById("for-down").style.marginBottom = "0vh";
        flag = 0;
        // alert("Input field lost focus.");
        
    }