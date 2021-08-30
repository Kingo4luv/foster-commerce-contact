import gql from 'graphql-tag'

const FREE_FORM = gql `query {
      freeform {
        form(handle: "contact") {
          id
          uid
          hash
          pages {
            rows {
              fields {
                type
                handle
                label
                required
                instructions
                ... on FreeformField_Select {
                  options {
                    value
                    label
                    checked
                  }
                }
                ... on FreeformField_Submit {
                  position
                }
              }
            }
          }
        }
      }
    }`;

export default FREE_FORM