/* Javascript Crud App */

/* DataForm Add , Remove , Delete */

document.addEventListener('DOMContentLoaded' , () => {
    const addform = document.getElementById('AddForm')
    const editForm = document.getElementById('EditForm')
    const studentTable = document.querySelector('.student-table')
    let students = [];
    
    let editIndex  = -1;
    
    addform.addEventListener('submit' , (e) => {
      e.preventDefault();
      const newStudent = {
        name:addform.studentADDname.value,
        age:addform.studentAge.value,
        email:addform.studentEmail.value,
        mobile:addform .studentPhoneNo.value,
        address:addform .studentAddress.value,
         };
      students.push(newStudent);
      addform.reset();
      renderTable();
    })
    
    editForm.addEventListener('submit' , (e) => {
      e.preventDefault();
      const updateStudent = {
        name:editForm.studentEDITname.value,
        age:editForm.studentAge.value,
        email:editForm.studentEmail.value,
        mobile:editForm.studentPhoneNo.value,
        address:editForm.studentAddress.value,
      };
      students[editIndex] = updateStudent;
      editIndex = -1
      editForm.reset();
      renderTable();
    });
    
    const renderTable = () => {
      const tableHTML = `
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${students.map((student , index) => `
                <tr>
                  <td>${student.name}</td>
                  <td>${student.age}</td>
                  <td>${student.email}</td>
                  <td>${student.mobile}</td>
                  <td>${student.address}</td>
                  <td>
                    <button onclick='editStudent(${index})'>Edit</button>
                    <button onclick='deleteStudent(${index})'>Delete</button>
                  </td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      `;
      studentTable.innerHTML  = tableHTML;
    }
    
    window.editStudent  = (index) => {
      editIndex = index;
      const student = students[index];
      editForm.studentEDITname.value = student.name
      editForm.studentAg.value = student.Age
      editForm.studentEmail.value = student.Email
      editForm.studentPhoneNo.value = student.Mobile
      editForm.studentAddress.value = student.Address
    }
    
    window.deleteStudent = (index) => {
      students.splice(index , 1);
      renderTable();
    }
  })
  
  
 
  
  