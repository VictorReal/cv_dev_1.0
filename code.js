let text = document.getElementById('myText').innerHTML;
const copyContent = async function () {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard: " + text);
    } catch (err) {
      alert("Failed to copy: ", err);
    }    
}