import React from "react";
function Main() {
  let notesObj = [];

  const additems = () => {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let Amt = document.getElementById("Amt");
    let Date= document.getElementById("Date");
  
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let myObj = {
      title: addTitle.value,
      Amt:  Amt.value ,
      text: addTxt.value ,
      Date: Date.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesObj);
  }
  return (<>

    <div className="Main">
      <input type="text" placeholder="tittle" id="addTitle" /> <br />
      <input type="number" placeholder="Amount" id="Amt" /> <br />
      <input type="text" id="addTxt" placeholder="Note" /> <br />
      <input type="date" id="date" placeholder="Date" /> <br />
      <br />
      <button onClick={additems}>Add</button>
    </div>

    {
      notesObj.map((el, i) => {
        return (<>
          <div className="notes" key="i">
            <h1 >  tittle : {el.title}</h1>
            <h2>   Amount : {el.Amt}   </h2>
            <h2>    note   :    {el.text}     </h2>
            <h2>   Date : {el.date} </h2  >
          </div>
        </>
        )


      })}

  </>
  );
}
export default Main;
