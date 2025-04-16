<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic List</title>
    <style>
        body { font-family: Arial, sans-serif; }
        #itemList { margin-top: 20px; }
        .item { display: flex; align-items: center; margin: 5px 0; }
        .item button { margin-left: 10px; }
    </style>
</head>
<body>
    <h2>Dynamic List</h2>
    <input type="text" id="itemInput" placeholder="Enter an item">
    <button onclick="addItem()">Add Item</button>
    <ul id="itemList"></ul>

    <script>
        function addItem() {
            const input = document.getElementById("itemInput");
            const itemText = input.value.trim();
            if (itemText === "") return;

            const li = document.createElement("li");
            li.className = "item";
            li.innerHTML = `${itemText} <button onclick="removeItem(this)">Remove</button>`;
            
            document.getElementById("itemList").appendChild(li);
            input.value = "";
        }

        function removeItem(button) {
            button.parentElement.remove();
        }
    </script>
</body>
</html>
