import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    // uri:"https://pacific-beyond-15227.herokuapp.com/"
    uri:"http://localhost:4000"

})

export default client