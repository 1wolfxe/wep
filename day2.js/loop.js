const users = [
      { name: "Ali Ahmed", email: "ali@example.com" },
      { name: "Sara Mostafa", email: "sara@example.com" },
      { name: "Omar Khalid", email: "omar@example.com" },
      { name: "Lina Hussein", email: "lina@example.com" }
    ];
    const tablebody =document.querySelector("#tablemo tbody");
    for(let i=0;i<users.length;i++)
    {

 const row = document.createElement("tr");
    row.innerHTML=`
    <td>${users[i].name}</td>
    <td>${users[i].email}</td>`;
    tablebody.appendChild(row);
    }
