let btn = document.querySelector("button")
let tbody = document.querySelector("tbody")
let allowRow = true;
btn.addEventListener("click", () => {
    if (allowRow) {
        let tr = document.createElement("tr");

        let orderTD = document.createElement("td");

        let nameTD = document.createElement("td");
        let nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder", "adiniz");
        nameTD.append(nameInput);

        let surnameTD = document.createElement("td");
        let surnameInput = document.createElement("input");
        surnameInput.setAttribute("type", "text");
        surnameInput.setAttribute("placeholder", "soyadiniz");
        surnameTD.append(surnameInput);

        let salaryTD = document.createElement("td");
        let salaryInput = document.createElement("input");
        salaryInput.setAttribute("type", "text");
        salaryInput.setAttribute("placeholder", "soyadiniz");
        salaryTD.append(salaryInput);

        let operationsTd = document.createElement("td");

        let deleteBTN = document.createElement("button");
        deleteBTN.textContent = "Sil";
        deleteBTN.classList.add("delete");
        deleteBTN.addEventListener("click", deleteData)

        let saveBTN = document.createElement("button");
        saveBTN.textContent = "Yadda saxla";
        saveBTN.classList.add("save");
        saveBTN.addEventListener("click", saveData)

        operationsTd.append(deleteBTN, saveBTN);

        tr.append(orderTD, nameTD, surnameTD, salaryTD, operationsTd);
        tbody.append(tr)
        allowRow = false;
        makeOrder()

    } else {
        alert("Bir evvelkini tamamlamalisiniz!!")
    }
})

const deleteData = (e) => {
    let check = confirm("Silinsinmi?")
    if (check) {
        e.target.closest("tr").remove()
        allowRow = true;
        makeOrder()
    }
}
const saveData = (e) => {
    let inputs = [...document.querySelectorAll("input")]
    inputs.map(input => {
        input.parentElement.textContent = input.value;
    })
    allowRow = true;
    e.target.textContent = "Duzelis et"
    e.target.classList.remove("save");
    e.target.classList.add("edit");
    e.target.removeEventListener("click", saveData);
    e.target.addEventListener("click", editData);

}

const editData = (e) => {
    let tr = e.target.closest("tr");
    let tds = [...tr.querySelectorAll("td:not(:first-child, last-child")]
    tds.map(td => {
        let inp = document.createElement("input");
        inp.setAttribute("type", "text");
        inp.setAttribute("value", td.textContent);
        td.textContent = "";
        td.append(inp);
    })
    e.target.textContent = "Yadda saxla";
    e.target.classList.remove("edit");
    e.target.classList.add("save");
    e.target.removeEventListener("click", editData);
    e.target.addEventListener("click", saveData);
}

const makeOrder = () => {
    const rows = [...document.querySelectorAll("tbody tr")]
    rows.map((a, b) => {
        a.querySelector("td").textContent = b + 1
    })
}