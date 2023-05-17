const uygulama = new TQ();

// Get the an element by id
uygulama.bul('#kok').innerHTML = 'Hello World!';

// Create a title element
let baslik = uygulama.olustur('h1', { id: 'baslik', class: 'baslik' }, 'Merhaba Dünya!');
let x=  uygulama.olustur()
// Add the title element to the root element
uygulama.ekle('#kok', baslik);


// Add event listener to the title by className
uygulama.olayEkle('.baslik', 'tikla', () => {
    console.log('Tıklandı!');
});


// HTML root element is not deletable
uygulama.sil('#kok'); // Kök eleman silinemez!