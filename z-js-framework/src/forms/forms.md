# Z Js - Forms

Builtin primitives to enhance native html form capabilities,  form state handling, form status for touched and untouched inputs, standard or common validations and bindings for form action attribute and form data methods

Examples:

``` html
<form id="accountForm" action="https://api.example.com/createAccount" method="POST">
 <div>
   <label for="username">Username:</label>
   <input type="text" id="username" name="username" required>
 </div>
 <div>
   <label for="password">Password:</label>
   <input type="password" id="password" name="password" required>
 </div>
 <div>
   <label for="email">Email:</label>
   <input type="email" id="email" name="email" required>
 </div>
 <input type="submit" value="Create Account">
</form>
```

and then
``` js
document.getElementById('accountForm').addEventListener('submit', function(e) {
 e.preventDefault();
 var formData = new FormData(this);
 fetch(this.action, {
   method: 'POST',
   body: formData
 }).then(response => response.json())
   .then(result => console.log('Success:', result))
   .catch(error => console.error('Error:', error));
});
function validateForm(e) {
 var formElements = e.target.elements;
 for (var i = 0; i < formElements.length; i++) {
   var item = formElements.item(i);
   if (item.value === '' && item.hasAttribute('required')) {
     item.setCustomValidity('This field cannot be left blank');
   } else {
     item.setCustomValidity('');
   }
 }
 return e.target.checkValidity();
}
function validateEmail(email) {
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(String(email).toLowerCase());
}

```