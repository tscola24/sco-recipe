document.addEventListener('DOMContentLoaded', () =>{
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const pageId = window.location.pathname;

    function saveCheckboxState(){
        const checkedStates = {};
        checkboxes.forEach((checkbox, index)=>{
            checkedStates[index] = checkbox.checked;
        });
        localStorage.setItem(`checkboxStates_${pageId}`, JSON.stringify(checkedStates));
    }

    function loadCheckBoxState(){
        const savedStates = localStorage.getItem(`checkboxStates_${pageId}`);
        if(savedStates){
            const checkedStates = JSON.parse(savedStates);
            checkboxes.forEach((checkbox, index) => {
                if(checkedStates.hasOwnProperty(index)){
                    checkbox.checked = checkedStates[index];
                }
            });
        }
    }

    function resetChecks(){
        checkboxes.forEach((checkbox) =>{
            checkbox.checked = false;
        });
        saveCheckboxState();
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', saveCheckboxState);
    });
    loadCheckBoxState();

    const reset = document.getElementById("reset");
    reset.addEventListener('click', resetChecks);
});