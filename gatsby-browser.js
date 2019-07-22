window.onload = () => {
  if (window.location.pathname.includes('typing-animation')) {
    window.setTimeout(() => {
      const typeElement = document.getElementById('type1');
      console.log(typeElement);
    }, 100);
  }
}
