
     function validateForm() {
      var name = document.forms["formuler"]["full_name"].value;
      var tel=  document.forms["formuler"]["tel"].value;
      var ville=  document.forms["formuler"]["ville"].value;
      var phoneNumber = document.getElementById('phone-number').value;
      var phoneNumber2 = document.getElementById('phone-number');
      var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
      var phoneResult = phoneRGEX.test(phoneNumber);
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxhrt1n47797rbO-P0K7Jc6nVxOM69DCi9ZLzbAde0TOBBXTVLEi5ca5sJOLXVlsftj/exec'
                  const form = document.forms['formuler']
      if (name == "" || name == null || tel == "" || tel == null || ville == "" || ville == null) {
        // alert("Name must be filled out");
               if(name == "" || name == null){
                 document.getElementById('name').style.border = "red solid 2px";
                 return false;
               }
               else if(tel == "" || tel == null){
                 document.getElementById('phone-number').style.border = "red solid 2px";
                 return false;
               }
               else {
                 document.getElementById('ville').style.border = "red solid 2px";
                 return false;
               }
            //    else {
                // if(ville == "" || ville == null)
            //     document.getElementById('name').style.border = "#EEEEEE solid 1px";
            //     document.getElementById('phone-number').style.border = "#EEEEEE solid 1px";
            //     document.getElementById('ville').style.border = "#EEEEEE solid 1px";
            //     return true;
            //    }
        
      }
     
      else   {
        // location.href = "thankyoupage.html";
                  if(phoneResult == false)
                {
                  phoneNumber2.style.border ="red solid 2px";
                  return false;
                  
                  
                }
                else {
    
                    form.addEventListener('submit', e => {
                      e.preventDefault()
                      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                      .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
                      .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
                  })
                  
                
                  location.href = "thankyoupage.html";
                  return true;
                }
      }
     
    
    
    }

