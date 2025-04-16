<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form with Table</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input, button {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        table {
            width: 100%;
            margin-top: 20px;
            border-collapse: collapse;
            background: white;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Enter Details</h2>
        <form id="userForm">
            <input type="text" id="name" placeholder="Name" required>
            <input type="text" id="degree" placeholder="Degree" required>
            <input type="text" id="batch" placeholder="Batch Passed Out" required>
            <input type="url" id="linkedin" placeholder="LinkedIn Profile" required>
            <input type="tel" id="phone" placeholder="Phone No" required>
            <input type="email" id="email" placeholder="Mail ID" required>
            <button type="button" onclick="addData()">Submit</button>
        </form>
        
        <table id="dataTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Degree</th>
                    <th>Batch</th>
                    <th>LinkedIn</th>
                    <th>Phone</th>
                    <th>Mail ID</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    
    <script>
        function addData() {
            var name = document.getElementById("name").value;
            var degree = document.getElementById("degree").value;
            var batch = document.getElementById("batch").value;
            var linkedin = document.getElementById("linkedin").value;
            var phone = document.getElementById("phone").value;
            var email = document.getElementById("email").value;
            
            if (name && degree && batch && linkedin && phone && email) {
                var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
                var newRow = table.insertRow();
                newRow.innerHTML = `<td>${name}</td>
                                    <td>${degree}</td>
                                    <td>${batch}</td>
                                    <td><a href="${linkedin}" target="_blank">Profile</a></td>
                                    <td>${phone}</td>
                                    <td>${email}</td>`;
                
                document.getElementById("userForm").reset();
            } else {
                alert("Please fill in all fields.");
            }
        }
    </script>
</body>
</html>
