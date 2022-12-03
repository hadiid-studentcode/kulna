const c = document.getElementById("copyright");

const date =getFullYear();


c.innerHTML = "Copyright ©"+date+"Kulna";



function kirim() {
    
    const e = document.getElementById('name').value;
    const n = document.getElementById('email').value;
    const m = document.getElementById("message").value;


    const kirim = document.location.href =
       "https://api.whatsapp.com/send?phone=6281363274209&text=nama%20saya%20adalah%20"+e+"%20dengan%20email%20saya%20"+n+"%20pesan%20saya%20yaitu%20"+m+"";


return kirim;

}


