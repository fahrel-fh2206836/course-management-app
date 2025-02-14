fetch('navbar.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('navbar').innerHTML = html;
                let scripts = document.getElementById('navbar').getElementsByTagName('script');
                for (let script of scripts) {
                    eval(script.innerText); // Execute scripts inside the imported HTML
                }
            })
            .catch(error => console.error('Error loading HTML:', error));
