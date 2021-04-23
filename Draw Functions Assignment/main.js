// Create Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;



function drawHome(x, y, h, color) {
    ctx.strokeStyle = color; // Color of Whole House

    ctx.strokeRect(x, y, h / 2, h, "stroke") // Rectangle / Walls

    ctx.beginPath(); // Rectangle / Roof
    ctx.moveTo(x + h / 4, y - h / 6); // Vertex 1
    ctx.lineTo(x, y); // Vertex 2
    ctx.lineTo(x + h / 2, y); // Vertex 3
    ctx.closePath();
    ctx.stroke();

    ctx.strokeRect(x + h / 6, y + h - h / 5, h / 6, h / 5, "stroke") // Rectangle / Door
}

function drawPlatform(x, y, w, h, colorT, colorB) {
    ctx.fillStyle = colorB;  // Bottom Color
    ctx.fillRect(x, y, w, h, colorT) // Bottom Rectangle
    ctx.fillStyle = colorT; // Top Color
    ctx.fillRect(x, y - h, w, h, colorB) // Top Rectangle
}

// The Three Home Examples
drawHome(20, 20, 50, "green");
drawHome(400, 350, 200, "red")
drawHome(500, 100, 100, "purple")

// The Three Platform Examples
drawPlatform(100, 400, 100, 10, "purple", "yellow")
drawPlatform(200, 100, 200, 15, "green", "brown")
drawPlatform(150, 200, 150, 20, "red", "blue")