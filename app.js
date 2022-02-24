console.log("connected!");
let favNum = window.prompt("What's your favorite number?");
if (favNum>=1000) {
    window.alert("Woah!");
}else if (favNum>=0) {
    window.alert("Cool!");
}else if (favNum<0) {
    window.alert("Bananas!");
}else if (isNaN(favNum)) {
    window.alert("Invalid integer");
}