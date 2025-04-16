<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show & Hide Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input {
            padding: 8px;
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <input type="password" id="password" placeholder="Enter password">
        <button id="toggleBtn" onclick="togglePassword()">Show</button>
    </div>

    <script>
        function togglePassword() {
            let passwordField = document.getElementById('password');
            let toggleBtn = document.getElementById('toggleBtn');
            
            if (passwordField.type === "password") {
                passwordField.type = "text";
                toggleBtn.textContent = "Hide";
            } else {
                passwordField.type = "password";
                toggleBtn.textContent = "Show";
            }
        }
    </script>
</body>
</html>
