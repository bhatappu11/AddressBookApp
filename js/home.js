window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th>FullName</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip code</th>
        <th>Phone Number</th>
    </tr>
    <tr>
        <td>Arpitha Bhat</td>
        <td>carstreet tth</td>
        <td>Bengaluru</td>
        <td>Karnataka</td>
        <td>563298</td>
        <td>+918987654345</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete"
            src="../assets/icons/delete-black-18dp.svg" style="padding-right: 5px;">
            <img id="1" alt="edit" onclick="update(this)"
            src="../assets//icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
} 