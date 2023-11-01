function* generator() {
    yield 1;
    yield 2;
    yield 3;

}
const gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

var xhr = new XMLHttpRequest();
xhr.open('GET', 'votre_service_java', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        // Traitez la réponse ici
    }
};
xhr.send();
