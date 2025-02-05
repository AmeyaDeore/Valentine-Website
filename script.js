document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("responseMessage");
    const container = document.getElementById("animationContainer");

    let yesSize = 20; // Starting font size for "Yes" button

    yesButton.addEventListener("click", () => {
        message.innerText = "Yippppeeee can't wait to meet you again ❤️ Cya soon";
        showAnimation();
    });

    noButton.addEventListener("click", () => {
        yesSize += 10; // Increase size
        yesButton.style.fontSize = `${yesSize}px`;

        if (yesSize >= 100) { // When it gets big enough, make "No" disappear
            noButton.style.display = "none";
            message.innerText = "Cmon don't make me sad now. There's only one right choice 😉";
        }
    });

    function showAnimation() {
        container.innerHTML = ""; // Clear previous animations

        const flowerImg = document.createElement("img");
        flowerImg.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2NpajZ4a3pxeDZ1MjEwNTMzZnVpcHlwdjkzYWRmZWdhcnVxMjgxMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mBGcf7ReM5FHVCSyHT/giphy.gif";
        flowerImg.classList.add("flower");

        const bearImg = document.createElement("img");
        bearImg.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTlhcTduNmtldzVhaHEzNHplM3BqdnIwcXZwenVzMHZjbTZ6a292bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif";
        bearImg.classList.add("bear");

        container.appendChild(flowerImg);
        container.appendChild(bearImg);

        // Apply styles for mobile visibility
        const style = document.createElement('style');
        style.innerHTML = `
            #animationContainer {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .flower, .bear {
                max-width: 100%;
                height: auto;
                margin: 10px 0;
            }

            @media (min-width: 600px) {
                .flower, .bear {
                    max-width: 50%;
                }
            }
        `;
        document.head.appendChild(style);
    }
});
