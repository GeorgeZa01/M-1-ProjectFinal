fetch("../data/attendance.json")
  .then((response) => response.json())
  .then((data) => {
    const contentDiv = document.getElementById("content");

    data.attendanceAndLeave.forEach((employee) => {
      const employeeSection = document.createElement("div");
      employeeSection.classList.add("mb-5");
      employeeSection.innerHTML = `
        <h2>${employee.name} (ID: ${employee.employeeId})</h2>
        <h3>Attendance</h3>
        <table id="myTable" class="table   table-bordered" >
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${employee.attendance
              .map(
                (att) => `
                <tr>
                  <td>${att.date}</td>
                  <td>${att.status}</td>
                </tr>
              `
              )
              .join("")}
          </tbody>
        </table >
        <br>
        <h3>Leave Requests</h3>
        <table id="leave-table" class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${employee.leaveRequests
              .map(
                (leave) => `
                <tr>
                  <td>${leave.date}</td>
                  <td>${leave.reason}</td>
                  <td>${leave.status}</td>
                </tr>
              `
              )
              .join("")}
          </tbody>
        </table>
        <br>
        <hr>
      `;
      contentDiv.appendChild(employeeSection);
    });
  })
  .catch((error) => {
    console.error("Error fetching the JSON file:", error);
  });
