function rectangle(width, height, color) {
    return {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1, color.lenth),
        calcArea: function () {
            return width * height;
        }
    }
}