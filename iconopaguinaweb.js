function cambiarFavicon(ruta)
 {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = ruta;
    document.head.appendChild(link);
}