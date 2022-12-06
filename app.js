const male = document.querySelector('#male');
const female = document.querySelector('#female');
const calculate = document.querySelector('#calculate');


USunits.addEventListener('click', function() {
    const USunits = document.querySelector('#USunits');
    const METRICunits = document.querySelector('#METRICunits');

    if (USunits.checked) {
        weight.placeholder = "lbs"
        height.placeholder = "feet"
    }
    else if (METRICunits.checked) {
        weight.placeholder = "kgs"
        height.placeholder = "cm"
    }

    let inputInches = document.createElement('input');
    inputInches.setAttribute("id", "inputInches");
    inputInches.placeholder = 'inches';

    if (inputHeight.contains(document.querySelector('#inputInches'))) {
         inputHeight.removeChild(document.querySelector('#inputInches'))
    }

    inputHeight.appendChild(inputInches);
});

METRICunits.addEventListener('click', function() {
    const USunits = document.querySelector('#USunits');
    const METRICunits = document.querySelector('#METRICunits');  
    if (USunits.checked) {
        weight.placeholder = "lbs"
        height.placeholder = "feet"
    }
    else if (METRICunits.checked) {
        weight.placeholder = "kgs"
        height.placeholder = "cm"
    }

    const inputHeight = document.querySelector('#inputHeight');
    if (inputHeight.contains(document.querySelector('#inputInches'))) {
         inputHeight.removeChild(document.querySelector('#inputInches'))
    }
});

calculate.addEventListener('click', function() {
    while (finalDiv.hasChildNodes()) {
        finalDiv.removeChild(finalDiv.firstChild);
    }

    if (METRICunits.checked) {

        if (!male.checked && !female.checked ||
        !document.querySelector('#USunits').checked && !document.querySelector('#METRICunits') || 
        !document.querySelector('#age').value ||
        !document.querySelector('#weight').value ||
        !document.querySelector('#height').value ||
         document.querySelector('#activity').value === "blank" ||
        !document.querySelector('#cut').checked &&
        !document.querySelector('#maintain').checked &&
        !document.querySelector('#bulk').checked
    ){
        alert("Need to complete all the fields to calculate")
        return;
    } 


    if (male.checked) { 
        const age = document.querySelector('#age').value;
        const weight = document.querySelector('#weight').value;
        const height = document.querySelector('#height').value;
        const activity = document.querySelector('#activity').value;
        let BMRmaleKG = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        let p1 = document.createElement('p');
        let BMR = BMRmaleKG;
        let total = Math.round(BMR * activity);
        p1.innerText = 'Your BMR (basal metabolic rate) is: ' + total;
        const finalDiv = document.querySelector('#finalDiv');
        finalDiv.append(p1);
        let p2 = document.createElement('p');

            if (cut.checked) {
                p2.innerText = 'For cutting you have to eat ' + (total - 500) 
                + ' calories';
                finalDiv.append(p2);
            }
            else if (maintain.checked) {
                p2.innerText = 'For mainting you have to eat ' + total + ' calories';
                finalDiv.append(p2);
            }
            else if (bulk.checked) {
                p2.innerText = 'For bulking you have to eat ' + (total + 500)
                 + ' calories';
                 finalDiv.append(p2);
            }
        }

        if (female.checked) { 
            const age = document.querySelector('#age').value;
            const weight = document.querySelector('#weight').value;
            const height = document.querySelector('#height').value;
            const activity = document.querySelector('#activity').value;
            let BMRfemaleKG = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            let p1 = document.createElement('p');
            let BMR = BMRfemaleKG;
            let total = Math.round(BMR * activity);
            p1.innerText = 'Your BMR (basal metabolic rate) is: ' + total;
            const finalDiv = document.querySelector('#finalDiv');
            finalDiv.append(p1);
            let p2 = document.createElement('p');

            if (cut.checked) {
                p2.innerText = 'For cutting you have to eat ' + (total - 500) 
                + 'calories';
                finalDiv.append(p2);
            }
            else if (maintain.checked) {
                p2.innerText = 'For mainting you have to eat ' + total;
                finalDiv.append(p2);
            }
            else if (bulk.checked) {
                p2.innerText = 'For bulking you have to eat ' + (total + 500)
                 + 'calories';
                 finalDiv.append(p2);
            }
        }
    }

    if (USunits.checked) {

        if (!male.checked && !female.checked ||
        !document.querySelector('#USunits').checked && !document.querySelector('#METRICunits') || 
        !document.querySelector('#age').value ||
        !document.querySelector('#weight').value ||
        !document.querySelector('#height').value ||
        !document.querySelector('#inputInches').value ||
         document.querySelector('#activity').value === "blank" ||
        !document.querySelector('#cut').checked &&
        !document.querySelector('#maintain').checked &&
        !document.querySelector('#bulk').checked
    ){
        alert("Need to complete all the fields to calculate")
        return;
    } 

    
    if (male.checked) { 
        const age = document.querySelector('#age').value;
        const weight = document.querySelector('#weight').value;
        const height = document.querySelector('#height').value;
        const inputInches = document.querySelector('#inputInches').value;
        const activity = document.querySelector('#activity').value;
        const heightCount = height * 12;
        const totalHeight = +heightCount + +inputInches;
        const BMRmalePOUNDS = 66.47 + (6.24 * weight) + (12.7 * totalHeight) - (6.75 * age);
        let p1 = document.createElement('p');
        let BMR = BMRmalePOUNDS;
        let total = Math.round(BMR * activity);
        p1.innerText = 'Your BMR (basal metabolic rate) is: ' + total;
        const finalDiv = document.querySelector('#finalDiv');
        finalDiv.append(p1);
        let p2 = document.createElement('p');

            if (cut.checked) {
                p2.innerText = 'For cutting you have to eat ' + (total - 500) 
                + ' calories';
                finalDiv.append(p2);
            }
            else if (maintain.checked) {
                p2.innerText = 'For mainting you have to eat ' + total + ' calories';
                finalDiv.append(p2);
            }
            else if (bulk.checked) {
                p2.innerText = 'For bulking you have to eat ' + (total + 500)
                 + ' calories';
                 finalDiv.append(p2);
            }
        }

        if (female.checked) { 
            const age = document.querySelector('#age').value;
            const weight = document.querySelector('#weight').value;
            const height = document.querySelector('#height').value;
            const inputInches = document.querySelector('#inputInches').value;
            const activity = document.querySelector('#activity').value;
            const heightCount = height * 12;
            const totalHeight = +heightCount + +inputInches;
            const BMRfemalePOUNDS = 65.51 + (4.35 * weight) + (4.7 * totalHeight) - (4.7 * age);
            let p1 = document.createElement('p');
            let BMR = BMRfemalePOUNDS;
            let total = Math.round(BMR * activity);
            p1.innerText = 'Your BMR (basal metabolic rate) is: ' + total;
            const finalDiv = document.querySelector('#finalDiv');
            finalDiv.append(p1);
            let p2 = document.createElement('p');

            if (cut.checked) {
                p2.innerText = 'For cutting you have to eat ' + (total - 500) 
                + 'calories';
                finalDiv.append(p2);
            }
            else if (maintain.checked) {
                p2.innerText = 'For mainting you have to eat ' + total;
                finalDiv.append(p2);
            }
            else if (bulk.checked) {
                p2.innerText = 'For bulking you have to eat ' + (total + 500)
                 + 'calories';
                 finalDiv.append(p2);
            }
        }
    }
});
