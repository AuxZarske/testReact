import { useState, useEffect } from "react";
import Card from "./Card"

const Test = ({width}) => {

  const URL = 'https://randomuser.me/api/?results=9&exc=gender,location,login,dob,registered,id';
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {

    /* Call API to get the data of users */
    const fetchItems = async () => {
      try {
        const response = await fetch(`${URL}`);
        if (!response.ok) throw Error('Did not received expected data');
        const data = await response.json();
        setItems(data.results);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message)
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();

  }, [])


  return (
    <>
      {isLoading && <p className="loadingMessage">Loading cards...</p>}
      {fetchError && <p className="errorMessage">{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading && <div className="collection">

        {/* Render every card adding its data */}
        {items.map((value, index) => (
          <Card 
            key={index} 
            data={value} 
            width={width}
            />
        ))}

      </div>}
    </>
  );
};

export default Test;
