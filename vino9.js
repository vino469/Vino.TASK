<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time Character Counter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        textarea {
            width: 100%;
            height: 100px;
            padding: 10px;
            font-size: 16px;
        }
        p {
            font-size: 18px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h2>Real-Time Character Counter</h2>
    <textarea id="textInput" placeholder="Type something..."></textarea>
    <p>Characters: <span id="charCount">0</span></p>

    <script>
        const textInput = document.getElementById("textInput");
        const charCount = document.getElementById("charCount");

        textInput.addEventListener("input", () => {
            charCount.textContent = textInput.value.length;
        });
    </script>
</body>
</html>