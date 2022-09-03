function solution() {
  let fullName = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let postCode = document.getElementById('code');
 
  let ulData = document.getElementById('infoPreview');
 
  document.getElementById('submitBTN').addEventListener('click', addReservation);
  document.getElementById('editBTN').addEventListener('click', editReservation);
  document.getElementById('continueBTN').addEventListener('click', finishReservation);
 
  function addReservation(e) {
    e.preventDefault();
 
    if (fullName.value.trim() != '' && email.value.trim() != '') {
      ulData.innerHTML = `<li>Full Name: ${fullName.value}</li>
                        <li>Email: ${email.value}</li>
                        <li>Phone Number: ${phone.value}</li>
                        <li>Address: ${address.value}</li>
                        <li>Postal Code: ${postCode.value}</li>`;
      document.getElementById('submitBTN').disabled = true;
      document.getElementById('editBTN').disabled = false;
      document.getElementById('continueBTN').disabled = false;
    }
 
    fullName.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    postCode.value = '';
  }
 
  function editReservation() {
    ulArray = Array.from(ulData.children)
 
    fullName.value = ulArray[0].textContent.split(':')[1];
    email.value = ulArray[1].textContent.split(':')[1];
    phone.value = ulArray[2].textContent.split(':')[1];
    address.value = ulArray[3].textContent.split(':')[1];
    postCode.value = ulArray[4].textContent.split(':')[1];
    console.log(fullName)
 
    ulData.innerHTML = '';
 
    document.getElementById('submitBTN').disabled = false;
    document.getElementById('editBTN').disabled = true;
    document.getElementById('continueBTN').disabled = true;
  }
 
  function finishReservation() {
    let divBlock = document.getElementById('block');
    divBlock.innerHTML = `<h3>Thank you for your reservation!</h3>`
  }
}