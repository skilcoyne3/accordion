import React, { memo, useCallback, useState, useEffect, cloneElement, Children } from 'react';
import './Accordion.css';
import AccordionPanel from './AccordionPanel';

const ListItem = memo(function({ name, id, onClick }) {
  console.log("rerender");
  return (
    <div className="group">
      <div className="header">
      <li onClick={() => onClick(id)}>
        {id}: {name}
      </li>
      </div>
      <div className="body">{name} body </div>
    </div>
  );
});

function Accordion(props) {
  const [comments, setComments] = useState([]);

  useEffect(function() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(setComments);
  }, []);

  const handleClick = useCallback(id => {
    console.log("clicked header", id);
    setComments(comments => comments.filter(c => c.id !== id));

  }, []);

console.log('wft');
  return (
    <ul className="accordion">
      {/* {props.children} */}
      
      {/* {cloneElement(props.children)} */}
      {Children.map(props.children, child => {
        console.log(child);
        // return (
        //   <AccordionPanel label={child.props.label}>
        //     {child}
        //   </AccordionPanel>
        // )
         return cloneElement(child,{handleClick})
      })}
      {/* {comments.map(function(item, i) {
        if(i <10) {
          console.log("help");
        //  return( <div className="group">
        //   <div className="header">
        //   <li onClick={() => handleClick(item.id)}>
        //     {item.id}: {item.name}
        //   </li>
        //   </div>
        //   <div className="body">{item.name} body </div>
        // </div>)
          return <ListItem {...item} key={item.id} onClick={handleClick} />;
        }
      })} */}
    </ul>
  );
}

export default Accordion;
