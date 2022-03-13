$(function() {
    function clickfix(){
      var name = document.forms["formuler"]["full_name"].value;
  
        document.getElementById('names').style.border = "red solid 2px";    
        
    }

    $(document).on('click', '.Myclick', function(e){
      let name = document.forms["formuler"]["full_name"].value;
     let tel = document.forms["formuler"]["tel"].value;
     let ville = document.forms["formuler"]["ville"].value;

     let telRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
     let phoneResult = telRGEX.test(tel);

     if (name == ""){
      document.getElementById('names').style.border ="red solid 2px"; 
     }
      else if (phoneResult == false){
      document.getElementById('phone-number').style.border ="red solid 2px"; 
     }

     else if (ville == ""){
      document.getElementById('villeid').style.border ="red solid 2px"; 
      
s
     }
     else{
      
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxhrt1n47797rbO-P0K7Jc6nVxOM69DCi9ZLzbAde0TOBBXTVLEi5ca5sJOLXVlsftj/exec';
          const formm = document.forms['formuler'];
                      formm.addEventListener('submit', e => {
                        e.preventDefault()
                        fetch(scriptURL, { method: 'POST', body: new FormData(formm)})
                        .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
                        .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
                    })
  
                    location.href = "thankyoupage.html";
                    return true;
     }
      e.preventDefault();
    });

    function validateForm(){
     let name = document.forms["formuler"]["full_name"].value;
     let tel = document.forms["formuler"]["tel"].value;
     let ville = document.forms["formuler"]["ville"].value;

     let telRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
     let phoneResult = telRGEX.test(tel);

     if (name == ""){
       document.getElementById('names').style.border ="red solid 2px"; 
       return false;
     
     }
     else if (tel == "" || phoneResult == false){
      document.getElementById('phone-number').style.border ="red solid 2px"; 
      return false;
     }

     else if (ville == ""){
      document.getElementById('villeid').style.border ="red solid 2px"; 
      return false;

     }
     else{
      console.log(55);
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxhrt1n47797rbO-P0K7Jc6nVxOM69DCi9ZLzbAde0TOBBXTVLEi5ca5sJOLXVlsftj/exec';
          const formm = document.forms['formuler'];
                      formm.addEventListener('submit', e => {
                        e.preventDefault()
                        fetch(scriptURL, { method: 'POST', body: new FormData(formm)})
                        .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
                        .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
                    })
  
                    location.href = "thankyoupage.html";
                    return true;
     }



    }
});