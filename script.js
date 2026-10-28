document.documentElement.classList.add('js');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector(".share").addEventListener("click",async()=>{const status=document.querySelector(".share-status");try{if(navigator.share){await navigator.share({title:document.title,url:location.href});}else if(navigator.clipboard && location.protocol!=="file:"){await navigator.clipboard.writeText(location.href);status.textContent="نُسخ رابط الصفحة";}else{status.textContent="يمكنك نسخ رابط الصفحة من شريط المتصفح";}}catch(e){if(e.name!=="AbortError")status.textContent="يمكنك نسخ رابط الصفحة من شريط المتصفح";}});
