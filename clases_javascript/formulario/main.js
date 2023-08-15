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
  showDataPerson(dataPerson);
}

const showDataPerson = (arrayDataPerson) => {
  let listTable = '';
  if(arrayDataPerson.length > 0) {
    arrayDataPerson.forEach((person) => {
      let status = returnStatusPerson(parseInt(person.status));
      listTable += `<tr>
        <td>${person.dni}</td>
        <td>${person.firstName} ${person.lastName}</td>
        <td>${person.birthday}</td>
        <td>${person.address}</td>
        <td>${status}</td>
      </tr>`;
  });
}else {
  listTable += `<tr><td colspan="5" class="text-center">No se encuentran registros</td></tr>`;
}
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

const searchFilter = () => {
  let search = document.getElementById("search").value;
  search = search.trim().toLowerCase();
  document.getElementById("search").value = search;

  if(search.length > 0) {
    let dataFilter = dataFilterPerson(search);
    showDataPerson(dataFilter);
  } else {
    showDataPerson(dataPerson);
  }
}

const dataFilterPerson = (words) => {
  let resultFilter = dataPerson.filter((person) => {
    return person.firstName.toLowerCase().includes(words) || person.lastName.toLowerCase().includes(words);
  });
  return resultFilter;
}