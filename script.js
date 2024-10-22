window.onload = function() {
    // ดึงค่าภาษาจาก localStorage
    let language = localStorage.getItem('selectedLanguage');

    // ถ้าไม่มีการเลือกภาษา ให้ตั้งเป็น 'TH' เป็นค่าเริ่มต้น
    if (!language) {
        language = 'TH'; // เริ่มต้นที่ 'TH'
    }

    Chooselanguage(language);
};

function Chooselanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    let change = {
        TH: {
            PRODUCTS: 'สินค้า',
            STORELOCATOR: 'ที่ตั้งร้านค้า',
            SOCIETY: 'สังคม',
            CONTACTUS: 'ติดต่อเรา',
        },
        EN: {
            PRODUCTS: 'PRODUCTS',
            STORELOCATOR: 'STORE LOCATOR',
            SOCIETY: 'SOCIETY',
            CONTACTUS: 'CONTACT US',
        }
    };
    
    // อัปเดตเนื้อหาขององค์ประกอบใน DOM
    document.getElementById('PRODUCTS').innerText = change[language].PRODUCTS;
    document.getElementById('STORELOCATOR').innerText = change[language].STORELOCATOR;
    document.getElementById('SOCIETY').innerText = change[language].SOCIETY;
    document.getElementById('CONTACTUS').innerText = change[language].CONTACTUS;
}
