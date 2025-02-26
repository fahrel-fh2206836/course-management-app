//Encontered Errors, Keep for now but might not use it

fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        let navbar = document.getElementById("navbar");
        navbar.innerHTML = html;

        let scripts = navbar.querySelectorAll("script[src]");
        scripts.forEach(script => {
            let newScript = document.createElement("script");
            newScript.src = script.src;
            newScript.async = true;
            document.body.appendChild(newScript);
        });

        let inlineScripts = navbar.querySelectorAll("script:not([src])");
        inlineScripts.forEach(script => {
            eval(script.innerText);
        });
    })
    .catch(error => console.error("Error loading HTML:", error));


// fetch('navbar.html')
//     .then(response => response.text())
//     .then(html => {
//         document.getElementById('navbar').innerHTML = html;
//         let scripts = document.getElementById('navbar').getElementsByTagName('script');
//         for (let script of scripts) {
//             eval(script.innerText);
//         }
//     })
//     .catch(error => console.error('Error loading HTML:', error));