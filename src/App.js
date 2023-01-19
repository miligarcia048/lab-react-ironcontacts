import "./App.css";
import contactsArrayFile from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsArray, setContactsArray] = useState(
    contactsArrayFile.slice(5, 10)
  );
  const handleAddRandom = () => {
    const newRandomContact =
      contactsArray[Math.floor(Math.random() * contactsArray.length)];

    setContactsArray([...contactsArray, newRandomContact]);
  };

  const handleSortName = () => {
    const arraySortName = [...contactsArray];

    arraySortName.sort((a, b) => (a.name > b.name ? 1 : -1));

    setContactsArray(arraySortName);
  };

  const handleSortPopularity = () => {
    const numAscending = [...contactsArray];

    numAscending.sort((a, b) => a.popularity - b.popularity);

    setContactsArray(numAscending);
  };
  const handleDelete = (contactId) => {
    const arrayWithDeletedContact = contactsArray.filter((contact) => {
      return contact.id !== contactId;
    });

    setContactsArray(arrayWithDeletedContact);
  };
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={handleAddRandom}>Add Random Contact</button>
      <button onClick={handleSortName}>Sort by name</button>
      <button onClick={handleSortPopularity}>Sort by popularity</button>
      <div className="table">
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Osccar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {contactsArray.map((contact) => {
            return (
              <tr key={contact.id}>
                <th>
                  <img
                    width="120"
                    height="150"
                    src={contact.pictureUrl}
                    alt={contact.pictureUrl}
                  />
                </th>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td>{contact.wonOscar ? <td>🏆</td> : <td></td>}</td>

                <td>{contact.wonEmmy ? <td>🏆</td> : <td></td>}</td>
                <td>
                  <button onClick={() => handleDelete(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default App;
