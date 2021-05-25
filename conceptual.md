### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    React Router adds some behind-the-scenes logic to better portray a normal multi-page app, it manipulates browser history to allow the forward and back buttons to work, it also allows edits to the URL to be caught and responded to without a new http request

- What is a single page application?
    A single page application is one where the page never needs to reload during its use

- What are some differences between client side and server side routing?
    Client side routing does not require a page reload or multiple requests to the server, whereas server side routing requires a new request for each different view. 

- What are two ways of handling redirects with React Router? When would you use each?
    After reviewing the lessons, only one method seems to be discussed in the content, which is the <Redirect to="" /> component.

- What are two different ways to handle page-not-found user experiences using React Router? 
    You can either use a component as the last option on a switch ro render a '404', or you can use a redirect to send users that attempt to access and invalid url to a specific route to handle the 404 

- How do you grab URL parameters from within a component using React Router?
    You import useParams hook from react-router-dom, then you assign the return from useParams(someName) to a variable inside your component function

- What is context in React? When would you use it?
    Context is similar to state, expect that it can be passed to only functions that require it, instead of having to include it in all levels of a hierarchy. You use it to avoid passing props to components that don't make direct use of them.

- Describe some differences between class-based components and function
  components in React.
    Function based components are more stable, simpler to read and to write, and less complex to understand.

- What are some of the problems that hooks were designed to solve?
    Hooks were created to allow designers using function based components to have access to useful tools such as state, context, and effects