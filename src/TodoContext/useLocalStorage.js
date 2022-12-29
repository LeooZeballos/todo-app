import React from "react";

// Custom Hook to manage the items in the localStorage
function useLocalStorage(itemName, initialValue) {
  // Use State Hook to manage the state of the error
  const [error, setError] = React.useState(false);
  // Use State Hook to manage the state of the loading
  const [loading, setLoading] = React.useState(true);
  // Use State Hook to manage the state of the items
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Get the items from the localStorage
        const localStorageItem = localStorage.getItem(itemName);

        // Parse the items from the localStorage
        let parsedItem;
        if (!localStorageItem) {
          // If the items are not in the localStorage, set the default items
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          // If the items are in the localStorage, parse the items
          parsedItem = JSON.parse(localStorageItem);
        }
        // Update the items state
        setItem(parsedItem);
        // Update the loading state
        setLoading(false);
      } catch (error) {
        // If there is an error, update the error state
        setError(error);
      }
    }, 1000);
  }, []);

  // Function to save the items in the localStorage
  const saveItem = (newItems) => {
    try {
      // Update the items state
      setItem(newItems);
      // Save the items in the localStorage
      localStorage.setItem(itemName, JSON.stringify(newItems));
    } catch (error) {
      // If there is an error, update the error state
      setError(error);
    }
  };

  // Return the items and the function to save the items
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage }