// Basic Imports
import React from 'react'
const ContextModule = React.createContext()

// Context Provider Component

class ContextProvider extends React.Component {
  // define all the values you want to use in the context
  state = {
    value: {
      counter: 10,
      date: "",
      error: false,
      loading: false,
    }
  }

  // Method to update manually the context state, this method isn't used in this example
  /*
  setValue = (value) => {
    this.setState({
      value: {
        ...this.state.value,
        ...value,
      }
    })
  }
  */

  // Method to update date in context state
  updateDate = () => {
    this.setState({
      ...this.state.value,  // DONT REMOVE THIS LINE OR IT WILL DELETE THE CONTEXT STATE
      loading: true         // Avoid multiple requests until the response is received
    },
      () => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("http://worldtimeapi.org/api/ip", requestOptions)
          .then(response => response.text())
          .then(result => {
            this.setState({
              value: {
                ...this.state.value,      // DONT REMOVE THIS LINE OR IT WILL DELETE THE CONTEXT STATE
                date: JSON.parse(result),
                error: false,
                loading: false,
              }
            })
          })
          .catch(error => {
            this.setState({
              value: {
                ...this.state.value,     // DONT REMOVE THIS LINE OR IT WILL DELETE THE CONTEXT STATE
                error: true,
                loading: false,
              }
            })
          });
      })
  }

  // Method to counter down

  counterDown = () => {
    this.setState({
      value: {
        ...this.state.value,    // DONT REMOVE THIS LINE OR IT WILL DELETE THE CONTEXT STATE
        counter: this.state.value.counter - 1, 
      }
    })
  }

  // Method to counter up

  counterUp = () => {
    this.setState({
      value: {
        ...this.state.value,    // DONT REMOVE THIS LINE OR IT WILL DELETE THE CONTEXT STATE
        counter: this.state.value.counter + 1,
      }
    })
  }

  render() {
    const { children } = this.props
    const { value } = this.state
    // Fill this object with the methods you want to pass down to the context
    const { updateDate, counterDown, counterUp } = this

    return (
      <ContextModule.Provider
        // Provide all the methods and values defined above
        value={{
          value,
          updateDate,
          counterDown,
          counterUp,
        }}
      >
        {children}
      </ContextModule.Provider>
    )
  }
}

// Dont Change anything below this line

export { ContextProvider }
export const ContextConsumer = ContextModule.Consumer
export default ContextModule