const khodamNames = [
    "tidak punya khodam"
];

function getRandomKhodam() {
    const randomIndex = Math.floor(Math.random() * khodamNames.length);
    return khodamNames[randomIndex];
}

function cekKhodam() {
    const nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput) {
        const khodamName = getRandomKhodam();
        document.getElementById("khodamName").textContent = khodamName;
        document.getElementById("result").style.display = "block";
    } else {
        alert("Masukkan nama Anda terlebih dahulu.");
    }
}

function contactDev() {
            alert('Silahkan hubungi dev di email: xwbygood@gmail.com');
        }

        function apiDoc() {
            alert('API Documentation bisa diakses di: 082389924037');
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            if (sidebar.style.display === 'none' || sidebar.style.display === '') {
                sidebar.style.display = 'flex';
            } else {
                sidebar.style.display = 'none';
            }
        }

function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("khodamName").textContent = "";
} 
