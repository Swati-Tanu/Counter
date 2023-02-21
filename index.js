const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute("data-target");
        const startingCounter = Number(counter.innerHTML);
        const incr = targetCount / 100;

        if(startingCounter < targetCount){
            counter.innerHTML = `${Math.round(startingCounter + incr)}`;
            setTimeout(updateCounter, 10)
        }else{
            counter.innerHTML = targetCount;
        }
    }

    updateCounter();
})