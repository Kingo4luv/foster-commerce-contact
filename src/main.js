import Vue from 'vue'
import App from './App.vue'
import VueApollo from "vue-apollo";
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from './fragmentTypes.json';
import './index.css'
import FText from '@/components/forms/FText'
import FSelect from '@/components/forms/FSelect'
import FTextarea from '@/components/forms/FTextarea'
import FBtn from '@/components/forms/FBtn'
import FEmail from '@/components/forms/FEmail'
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

Vue.use(VueApollo)

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: `${process.env.VUE_APP_BASE_URL}api`,
})

// Cache implementation
const cache = new InMemoryCache({
  fragmentMatcher
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('FText', FText)
Vue.component('FSelect', FSelect)
Vue.component('FTextarea', FTextarea)
Vue.component('FSubmit', FBtn)
Vue.component('FEmail', FEmail)

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
