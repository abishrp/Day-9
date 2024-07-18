// import Content from "./Content";
// import ChildDetail from "./ChildDetail";
// import Detail from "./Detail";
// import ArrayDetail from "./ArrayDetail";
// import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
// import Oneof from "./Oneof";


function app() {
  // const items = [
  //   {
  //     id: 1, name: "item1"
  //   },
  //   {
  //     id: 2, name: "item2"
  //   },
  //   {
  //     id: 3, name: "item9"
  //   }
  // ]


  return (
    <div className="App">
      <Header />
      {/* <Counter /> */}
      
      {/* <Oneof color="green" /> */}




      {/* <ArrayDetail items={items}/> */}

      {/* <Content /> */}

        {/* <Detail name="Abish" age={21} phone={9361599342} isStudent={true}/>
      <Detail name="Abish1" age={21} phone={9361599342} isStudent={true}/>
      <Detail name="Abish2" age={21} phone={9361599342} isStudent={true}/>
      <Detail name="Abish3"/>
      <ChildDetail>This  
        <p>Hello</p>
      </ChildDetail> */}
      <Footer />

    </div>
  )
}
export default app;

// import React, { Component } from 'react';

// class LifecycleDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     console.log('constructor');
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     return null;
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate');
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('getSnapshotBeforeUpdate');
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('componentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     console.log('render');
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default LifecycleDemo;

