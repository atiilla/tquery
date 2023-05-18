const $ = new TQ();

// Get the an element by id
// $.bul('#kok').innerHTML = 'Hello World!';

// Create a title element
let baslik = $.olustur('h1', { id: 'baslik', class: 'baslik' }, 'Merhaba Dünya!');

// Add the title element to the root element
$.ekle('#kok', baslik);

// Create a paragraph element
let paragraf = $.olustur('p', { id: 'paragraf', class: 'paragraf' }, 'Bu bir paragraf örneğidir.');

// Update the title element
$.OznitelikGuncelle(baslik, { id: 'baslik', class: 'baslik', style: 'color: red;' });

// Remove class attribute from the title element
$.OznitelikGuncelle(baslik, {style: null});

// Get attribute of the title element
console.log($.OznitelikOku(baslik, 'id'));

// Get children of the root element
console.log($.AltElemanlariGetir('#kok'));
// $.AltElemanlariGetir('#kok').forEach(element => {
//     $.sil(element);
// });

// Get children of the root element and change content
$.AltElemanlariGetir('#kok').forEach(element => {
    $.IcerikGuncelle(element, 'Hello World!');
});

// Get content of the title element
console.log($.IcerikOku(baslik));

// Replace element with another element
// let h4 = $.olustur('h4', { id: 'h4', class: 'h4' }, 'Hello friend!');
// $.ElementDegistir(baslik, h4);

// Copy element
let h4 = $.ElementKopyala(baslik);
// Change content of the copied element
$.IcerikGuncelle(h4, 'Hello friend!');
$.ekle('#kok', h4);

// Convert dom string to element
let domString = '<h2 id="h2" class="h2">Hello World!</h2>';
console.log($.HTMLElDonustur(domString));


// Add event listener to the title by className
$.olayEkle('.baslik', 'tikla', () => {
    console.log('Tıklandı!');
});



// // HTML root element is not deletable
// $.sil('#kok'); // Kök eleman silinemez!

