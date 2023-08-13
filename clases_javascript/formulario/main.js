let dataPerson = [];

const addDataPerson = (firstName, lastName, birthday, status, address, dni, action=true) => {
  let person = {
    dni,
    firstName,
    lastName,
    birthday,
    address,
    status
  };
  if(action==true) {
    dataPerson.push(person);
  } else {
    dataPerson.unshift(person);
  }
};
//Función para capturar los datos
const addFormPerson = () => {
  const dni = document.getElementById("dni");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const birthday = document.getElementById("birthday");
  const address = document.getElementById("address");
  const status = document.getElementById("status");

  addDataPerson(firstName.value, lastName.value, birthday.value, address.value, status.value);
  console.log(dataPerson);
  document.getElementById("person").reset();
  dni.focus();
}

const showDataPerson = () => {
  let listTable = '';
  dataPerson.forEach((person) => {
    listTable += `<tr>
      <td>${person.dni}</td>
      <td>${person.firstName} ${person.lastName}</td>
      <td>${person.birthday}</td>
      <td>${person.address}</td>
    </tr>`;
  });
}