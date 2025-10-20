function YasbeehFunction(textContent, yasbeehCountElement) {
    return new Promise(resolve => {
        let Count = 0;

        let intervalId = setInterval(function() {
            Count++;
            yasbeehCountElement.textContent = textContent + ": " + Count;

            if (Count >= 33) {
                clearInterval(intervalId);
                resolve(); // ✅ tell async/await that we are done
            }

        }, 1000);
    });
}

async function StartingFunction() {
    let yasbeehCountElement = document.getElementById("yasbeehCount");
    let startButton = document.getElementById("startButton");
    startButton.disabled = true;
    await YasbeehFunction("سبحان الله", yasbeehCountElement);
    await YasbeehFunction("الحمد لله", yasbeehCountElement);
    await YasbeehFunction("الله أكبر", yasbeehCountElement);
    yasbeehCountElement.textContent = "تم الانتهاء من التسبيح!";
    startButton.disabled = false;
}
