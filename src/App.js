import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const countries = gql`
  {
    countries {
      code
      name
      emoji
      emojiU
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Query query={countries} variables={{}}>
          {({ data, loading }) =>
            loading ? (
              <span>Loading...</span>
            ) : (
              <div>
                {data.countries.map((country, i) => (
                  <React.Fragment>
                    <h2 key={i}>
                      {country.name}
                      {country.emoji}
                    </h2>
                  </React.Fragment>
                ))}
              </div>
            )
          }
        </Query>
      </div>
    );
  }
}

export default App;
