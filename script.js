
function like(button) {
    const countSpan = button.nextElementSibling;
    let count = parseInt(countSpan.innerText);
    count += 1; 
    countSpan.innerText = count; 
    document.getElementById("likeimg").src="./liked.png";
   
}