## React Context

# Announcements

- Project week 1 - **your project and blog must be complete and handed in by 11:59pm EST Sunday, July 2nd to avoid any penalty to your final grade.**
- See Oli’s walkthrough: ****[Submit Empty GitHub Repo](https://www.youtube.com/watch?v=-PKY4CiVCPk)****

# SWBATs

- [x]  Explain what context is and what problem it solves
- [x]  Set up context in a React app
- [x]  Use (consume) context
- [x]  Update context
- [ ]  The problem with context

### Prop Drilling

- Figma Jam Example
    
    https://www.figma.com/file/UBXfdwT6cfnApyRTD5PGGV/Prop-Drilling?node-id=0%3A1&t=34J4bDiIz30Avos9-1
    
- **Let’s check out the code example in 01-prop-drilling**

- It works - what's the problem? 🤷
    - **Complex and verbose**:
        - Prop drilling means passing data through multiple components.
        - This can make the code more complicated and harder to read.
    - **Code maintenance and refactoring**:
        - you have to update all the intermediate components in between.
        - This makes it harder to change or improve the code later on.
    - **Prop pollution**:
        - Components receive data they don't actually need.
        - This can make the code messy and confusing.
    - **Increased development effort**:
        - Because prop drilling requires passing data through each intermediate component manually,  it can take more time and can introduce mistakes.

### A Solution to Prop Drilling - Context

- What is React Context?
    - [From the docs](https://react.dev/learn/passing-data-deeply-with-context#:~:text=Context%20lets%20the%20parent%20component%20make%20some%20information%20available%20to%20any%20component%20in%20the%20tree%20below%20it%E2%80%94no%20matter%20how%20deep%E2%80%94without%20passing%20it%20explicitly%20through%20props.)
        - *Context* lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.
    - In other words:
        - Context is a way to share state between unrelated or distant components.
            - Think of React Context as a shared container that holds some data.
            - This data can be accessed by any component that needs it, regardless of how nested the component is in the component tree.
    - **Context solves the prop drilling problem**

https://www.figma.com/file/iEUOX1Hy8u61cX4bAbTG6X/useContext?node-id=0%3A1&t=dMQFUSjnrg8cROSg-1

- [Context Toolkit Slides](https://docs.google.com/presentation/d/1YsiZGUpCamrJ8ori3iq1CJI56cNyBmdz4oZAOEvcCLY/edit?usp=sharing)

### Break 😴

### Updating Context

- **In the prop drilling example:**
    - We used a state setter function to update the state when the user clicked the button in the Child component.
    - We can add this functionality back into the app by moving the Provider into the App component.
    - This would give us access to the state variable and setter function.

### Abstracting The Context Provider

- create a provider component in the CreatedContext file that uses the CreatedContext.Provider and wrap the app or grandparent component.

### The Problem With The Context API

- See the code example in the 05-the-context-problem directory.
- The Problem with React’s Context API - [https://leewarrick.com/blog/the-problem-with-context/#:~:text=The problem with context is,renders all over the place](https://leewarrick.com/blog/the-problem-with-context/#:~:text=The%20problem%20with%20context%20is,renders%20all%20over%20the%20place)!

### Resources

- The Problem with React’s Context API - [https://leewarrick.com/blog/the-problem-with-context/#:~:text=The problem with context is,renders all over the place](https://leewarrick.com/blog/the-problem-with-context/#:~:text=The%20problem%20with%20context%20is,renders%20all%20over%20the%20place)!
- Kent Dodds useMemo/useCallback: [https://kentcdodds.com/blog/usememo-and-usecallback](https://www.notion.so/Arrays-Objects-and-Iteration-bbac0d21c0764d48b3abf42c06fbdf30?pvs=21)