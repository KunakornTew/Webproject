document.getElementById('submit-button').addEventListener('click', function(event) {
    const caregiverName = document.getElementById('caregiver-name').value.trim();
    const caregiverPhone = document.getElementById('caregiver-phone').value.trim();
    const elderlyName = document.getElementById('elderly-name').value.trim();
    const elderlyPhone = document.getElementById('elderly-phone').value.trim();
    const elderlyAddress = document.getElementById('elderly-address').value.trim();
    const relativeName = document.getElementById('relative-name').value.trim();
    const relativePhone = document.getElementById('relative-phone').value.trim();
    const relativeAddress = document.getElementById('relative-address').value.trim();
    
    const phoneRegex = /^[0-9]+$/;
    
    let valid = true;
    
    if (!caregiverName || !caregiverPhone || !elderlyName || !elderlyPhone || !elderlyAddress || !relativeName || !relativePhone || !relativeAddress) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        valid = false;
    }
    
    if (caregiverPhone && !phoneRegex.test(caregiverPhone)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ของผู้ดูแลเป็นตัวเลข');
        valid = false;
    }
    
    if (elderlyPhone && !phoneRegex.test(elderlyPhone)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ของผู้สูงอายุเป็นตัวเลข');
        valid = false;
    }
    
    if (relativePhone && !phoneRegex.test(relativePhone)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ของญาติผู้สูงอายุเป็นตัวเลข');
        valid = false;
    }
    
    if (valid) {
        alert('เสร็จสิ้น');
    } else {
        event.preventDefault(); 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tr[data-href]');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            window.location.href = row.getAttribute('data-href');
        });
    });
});

function saveAsPDF() {
    html2canvas(document.body).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var doc = new jsPDF('p', 'mm');
        doc.addImage(imgData, 'PNG', 10, 10);
        doc.save('fall-detail.pdf');
    });
}