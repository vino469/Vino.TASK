<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            flex-direction: column;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button id="colorButton">Change Background Color</button>
    <script>
        function getRandomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
        }
        
        document.getElementById("colorButton").addEventListener("click", function() {
            document.body.style.backgroundColor = getRandomColor();
        });
    </script>
</body>
</html>
