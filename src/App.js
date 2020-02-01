import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import AccordionPanel from './components/Accordion/AccordionPanel';


function App() {
  // const [comments, setComments] = useState([]);

  // useEffect(function() {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then(response => response.json())
  //     .then(setComments);
  // }, []);

  // const handleClick = useCallback(id => {
  //   setComments(comments => comments.filter(c => c.id !== id));
  // }, []);

// console.log('wft');
  return (
    // <ul className="accordion">
    //   {comments.map(function(item, i) {
    //     if(i <10) {
    //       console.log("help");
    //     //  return( <div className="group">
    //     //   <div className="header">
    //     //   <li onClick={() => handleClick(item.id)}>
    //     //     {item.id}: {item.name}
    //     //   </li>
    //     //   </div>
    //     //   <div className="body">{item.name} body </div>
    //     // </div>)
    //       return <ListItem {...item} key={item.id} onClick={handleClick} />;
    //     }
    //   })}
    // </ul>
    <Accordion>
      <AccordionPanel label="panel 1">
        <div>
          panel1 pannel text
        </div>
      </AccordionPanel>
      <AccordionPanel label="panel 2">
        <div>
          panel2 inner text
        </div>
    </AccordionPanel>
  </Accordion>
  );
}

export default App;
