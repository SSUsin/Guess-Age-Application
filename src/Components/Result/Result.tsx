import * as React from 'react'
import Loader from 'react-loader-spinner'
import './Result.css'

interface IProps{
  result:string
  filelength:any
}

export default class Result extends React.Component<IProps,{}> {
  
  public render() {
    return (
      <div className="resultContainer">
        <div className="resultDetail">
          {
            this.props.result === "" && this.props.filelength>0 ?
              <Loader type="TailSpin" color="#FF9999" height={80} width={80} /> :
              <p>{this.props.result}</p>
          }
        </div>
      </div>
    )
  }
}