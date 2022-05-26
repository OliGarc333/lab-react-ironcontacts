import './App.css';
import contact from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5));

  const updatedContact = () => {
    const newA = Math.floor(Math.random() * contact.length);
    const updatedContact = [...contacts, contact[newA]];

    setContacts(updatedContact);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={updatedContact}>Add Random Contact</button>
      <table>
        <th>
          <h2>Picture</h2>
        </th>
        <th>
          <h2>Name</h2>
        </th>
        <th>
          <h2>Popularity</h2>
        </th>
        <th>
          <h2>Won Oscar</h2>
        </th>
        <th>
          <h2>Won Emmy</h2>
        </th>
      </table>
      {contacts.map(contact => {
        return (
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} width="50" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🏆' : ''} </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
