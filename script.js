const akkordionButonlari = document.getElementsByClassName('full');
let i;
let butonunuzunlugu=akkordionButonlari.length
for (i = 0; i < butonunuzunlugu; i++) {
  akkordionButonlari[i].addEventListener('click', function() {
    // this.classList.toggle("active");

 
    const panelDivi = this.nextElementSibling;
    if (panelDivi.style.display === "block") {
      panelDivi.style.display = "none";
    } else {
      panelDivi.style.display = "block";
    }
  });
}