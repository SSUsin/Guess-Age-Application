import * as React from 'react';
import DropArea from './Components/DropArea/DropArea'
import Header from './Components/Header/Header'
import IntroContent from './Components/IntroContent/IntroContent'
import Result from './Components/Result/Result'
import ResultHeader from './Components/ResultHeader/ResultHeader'

interface IState {
  result:string
  filelength:number
}

class App extends React.Component<{},IState>{
    public constructor(props:any){
      super(props)
      this.state = {
        result:"",
        filelength:0,
      }
    
    }
    public render() {
      return (
        <div>
          <Header />
          <IntroContent />
          <DropArea setResults={this.resultstate} />
          <ResultHeader />
          <Result result={this.state.result} filelength={this.state.filelength} />
          <br />
        </div>
      );
    }

    public resultstate = (resultString:string,filelen:any) => {
      this.setState({result:resultString,filelength:filelen})
    }
}

export default App;