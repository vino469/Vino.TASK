<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Click Counter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        button {
            font-size: 20px;
            padding: 10px 20px;
            cursor: pointer;
        }
        p {
            font-size: 24px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <button id="clickMe">Click Me</button>
    <p id="counter">Button Clicked: 0 times</p>
    
    <script>
        let count = 0;
        document.getElementById("clickMe").addEventListener("click", function() {
            count++;
            document.getElementById("counter").textContent = `Button Clicked: ${count} times`;
        });
    </script>
</body>
</html>
