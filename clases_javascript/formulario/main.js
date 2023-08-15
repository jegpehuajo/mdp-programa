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

  addDataPerson(firstName.value, lastName.value, birthday.value,status.value, address.value,dni.value);

  console.log(dataPerson);
  document.getElementById("person").reset();
  dni.focus();
  showDataPerson();
}

const showDataPerson = () => {
  let listTable = '';
  dataPerson.forEach((person) => {
    let status = returnStatusPerson(parseInt(person.status));
    listTable += `<tr>
      <td>${person.dni}</td>
      <td>${person.firstName} ${person.lastName}</td>
      <td>${person.birthday}</td>
      <td>${person.address}</td>
      <td>${status}</td>
    </tr>`;
  });
  document.getElementById("listPerson").innerHTML = listTable;
}

const returnStatusPerson = (status) => {
  switch(status) {
    case 0: return 'Inactivo'; break;
    case 1: return 'En Proceso'; break;
    case 2: return 'Concluido'; break;
    default: return 'Activo'; break;
  }
}