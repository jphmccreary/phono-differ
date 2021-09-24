import './Root.css';
import ConsonantTable from '../ConsonantTable/ConsonantTable';
import charts from '../../charts';

function Root() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/72756055_10157883488333701_4043854877623844864_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OQLF3tJSg0gAX_myh9v&tn=RCiNEJHBc0n38EDs&_nc_ht=scontent-dfw5-2.xx&oh=09839848df9868ccbb1844c1101ffa32&oe=617429AA'} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ConsonantTable chart={charts.consonants} />
  );
}

export default Root;
