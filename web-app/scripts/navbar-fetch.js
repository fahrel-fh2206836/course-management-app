fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        let navbar = document.getElementById("navbar");
        navbar.innerHTML = html;

        // Find and execute external scripts
        let scripts = navbar.querySelectorAll("script[src]");
        scripts.forEach(script => {
            let newScript = document.createElement("script");
            newScript.src = script.src;
            newScript.async = true; // Ensure non-blocking execution
            document.body.appendChild(newScript);
        });

        // Execute inline scripts
        let inlineScripts = navbar.querySelectorAll("script:not([src])");
        inlineScripts.forEach(script => {
            eval(script.innerText); // Execute the script code
        });
    })
    .catch(error => console.error("Error loading HTML:", error));


// fetch('navbar.html')
//     .then(response => response.text())
//     .then(html => {
//         document.getElementById('navbar').innerHTML = html;
//         let scripts = document.getElementById('navbar').getElementsByTagName('script');
//         for (let script of scripts) {
//             eval(script.innerText); // Execute scripts inside the imported HTML
//         }
//     })
//     .catch(error => console.error('Error loading HTML:', error));