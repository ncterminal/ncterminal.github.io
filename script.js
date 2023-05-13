const input = document.querySelector(".input");
const terminal = document.querySelector(".terminal");

input.addEventListener("keydown", handleInput);

function handleInput(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const inputValue = input.value.trim().toLowerCase();
        const output = document.createElement("p");

        output.classList.add("output");
        terminal.insertBefore(output, terminal.lastElementChild);

        if (inputValue === "explore") {
            output.innerHTML = `
                email<br>
                cv<br>
                linkedIn<br>
                research <br>
                about<br>
                random
            `;
        } else if (inputValue === "email") {
            output.textContent = "nochen@ucsd.edu";
        } else if (inputValue === "cv") {
            output.innerHTML = '<a href="https://drive.google.com/file/d/1ouN7rx-SkGjOKVDkFi9I9AbAhP6_ZM8M/view?usp=sharing" target="_blank">https://drive.google.com/file/d/1ouN7rx-SkGjOKVDkFi9I9AbAhP6_ZM8M/view?usp=sharing</a>';
        } else if (inputValue === "linkedin") {
            output.innerHTML = '<a href="https://www.linkedin.com/in/imnora" target="_blank">https://www.linkedin.com/in/imnora</a>';
        } else if (inputValue === "intuitive physics") {
            output.textContent = "Where it all started: https://www.youtube.com/watch?v=TFyAEHk5asY&t=473s&ab_channel=MITCBMM";
        } else if (inputValue === "research") {
            output.textContent = "I am interested in exploring the cognitive underpinnings that allow people to understand and make fast, robust inferences about diverse, unknown physical phenomena. To facilitate these capabilities, I research how latent physical properties can be inferred from observed data and how humans use this information to improve predictive models of the world. Through this, I aim to shed light on the cognitive processes enabling robust inferential performance and inform the design of artificial intelligence systems that are better equipped to cope with the dynamic, uncertain nature of the physical world and more attuned to its nuanced complexities. ";
        } else if (inputValue === "about") {
            output.textContent = "I am a junior undergraduate student at the University of California San Diego majoring in Cognitive Science and specializing in Machine Learning and Neural Computation. In the UCSD Department of Psychology, I am a research assistant in the Cognitive Tools Lab, advised by Dr. Judith Fan.            ";
        } else if (inputValue === "random") {
            const links = [
                "https://norachen.dev",
                "https://physion-benchmark.github.io/",
                "https://arxiv.org/pdf/1604.00289.pdf",
                "http://harvardlds.org/wp-content/uploads/2017/11/Ullman-Spelke-Battaglia-Tenenbaum_Mind-Games_2017.pdf",
                "https://cogsci.ucsd.edu/",
                "https://escholarship.org/content/qt34q4n0cg/qt34q4n0cg.pdf",
                "https://hire.ucmerced.edu/ssi/showcase/s22/nora-chen",
                 "https://github.com/norascs",
                 "https://ncrecap.github.io"
                
            ];
            const randomLink = links[Math.floor(Math.random() * links.length)];
            output.innerHTML = `<a href="${randomLink}" target="_blank">${randomLink}</a>`;
        } else if (inputValue === "reset") {
            const inputContainer = document.querySelector(".input-container");
            inputContainer.remove();
            const newInputContainer = document.createElement("div");
            newInputContainer.classList.add("input-container");
            newInputContainer.innerHTML = '<span class="prompt">&gt;</span><input class="input" type="text" autofocus>';
            terminal.appendChild(newInputContainer);
            input = document.querySelector(".input");
            input.addEventListener("keydown", handleInput);
        } else {
            output.textContent = `Unknown command: ${inputValue}`;
        }

        input.value = "";
    }
}

terminal.addEventListener("click", () => {
    input.focus();
});