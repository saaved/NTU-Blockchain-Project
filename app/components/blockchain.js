import EmbarkJS from 'Embark/EmbarkJS';
import SimpleStorage from 'Embark/contracts/SimpleStorage';
import React from 'react';
import { Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';

class Blockchain extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valueSet: 0.1,
      valueGet: "",
      balance: 1337,
      contractAddress: 1337,
      contractBalance: 0,
      logs: []
    }
  }

  handleChange(e) {
    this.setState({ valueSet: e.target.value });
  }

  setValue(e) {
    e.preventDefault();
    var value = parseInt(this.state.valueSet, 10);

    // If web3.js 1.0 is being used
    if (EmbarkJS.isNewWeb3()) {
      SimpleStorage.methods.set().call();
      this._addToLog("SimpleStorage.methods.set().send({from: web3.eth.defaultAccount})");
    } else {
      SimpleStorage.set();
      this._addToLog("#blockchain", "SimpleStorage.set()");
    }
  }

  showResult() {
    SimpleStorage.methods.get().call()
      .then(_value => this.setState({ valueGet: _value }))

    var valueGet = this.state.valueGet;
    console.log(this.state);
    console.log(this.state.valueGet);
    console.log(this.state.valueSet)
    setTimeout(function () { //Start the timer

      if (this.state.valueGet > 5) {

        var winSum = (parseFloat(this.state.valueSet) + (parseFloat(this.state.valueSet) * 0.95)) * 1.0
        console.log(winSum)
        document.getElementById("result").innerHTML = '<h3>You won! ' + winSum + ' Ether was sent to your address</h3>';
      } else {
        document.getElementById("result").innerHTML = '<h3>You lost :-( try again!</h3>';
      }
    }.bind(this), 3000);

  }

  createTransaction(e) {
    e.preventDefault();
    // If web3.js 1.0 is being used
    if (EmbarkJS.isNewWeb3()) {
      const etherVal = this.state.valueSet * 1000000000000000000;
      SimpleStorage.methods.bet(web3.eth.defaultAccount, etherVal)
        .send({ from: web3.eth.defaultAccount, to: SimpleStorage._address, value: etherVal, gas: 210000 })
        .then(function (value) {
          console.log("Transaction successful")
          document.getElementById("status").innerHTML = 'Transaction successfull, rolling dice..';
          document.getElementById("coinflip").innerHTML = '<img src="../images/coinflip.gif"></img>';
          document.getElementById("button").innerHTML = '';
          document.getElementById("betAmount").innerHTML = '';
          this.showResult();
        }.bind(this), function (reason) {
          console.log("Transaction failed")
          document.getElementById("status").innerHTML = 'Status: Transaction failed, please try again.';
        });

      console.log(web3.eth.defaultAccount)
      this._addToLog("SimpleStorage.methods.set().send({from: web3.eth.defaultAccount})");
    } else {
      SimpleStorage.bet();
      this._addToLog("#blockchain", "SimpleStorage.set()");
    }

  }

  getValue(e) {
    e.preventDefault();
    if (EmbarkJS.isNewWeb3()) {
      SimpleStorage.methods.get().call()
        .then(_value => this.setState({ valueGet: _value }))
      this._addToLog("SimpleStorage.methods.get(console.log)");
    } else {
      SimpleStorage.get()
        .then(_value => this.setState({ valueGet: _value }));
      this._addToLog("SimpleStorage.get()");
    }
  }


  getContractBalance(e) {
    e.preventDefault();

    SimpleStorage.methods.getContractBalance().call()
      .then(_value => this.setState({ getContractBalance: _value }));
    this._addToLog("SimpleStorage.methods.getBalance()");
    console.log(this.state.getContractBalance);
  }

  logBalance(e) {
    e.preventDefault();

    SimpleStorage.methods.getBalance().call()
      .then(_value => this.setState({ balance: _value }));
    this._addToLog("SimpleStorage.methods.getBalance()");
  }

  _addToLog(txt) {
    this.state.logs.push(txt);
    this.setState({ logs: this.state.logs });
  }

  render() {
    return (<React.Fragment>
      <center>
        <h3> Coinflip game  </h3>
        <Form inline>
          <FormGroup>
            <div id="betAmount">
              Bet amount
              <br></br>
              <FormControl
                type="text"
                defaultValue={this.state.valueSet}
                onChange={(e) => this.handleChange(e)} />
            </div>
            <div id="game">
              <div id="coinflip">
              </div>
              <div id="button">
                <Button bsStyle="primary" onClick={(e) => this.createTransaction(e)}>play</Button>
              </div>
              <div id="result"></div>
              <div id="status">Status: </div>
            </div>
            <HelpBlock>Please use the MetaMask plugin for chrome</HelpBlock>
          </FormGroup>
        </Form>
      </center>
    </React.Fragment>
    );
  }
}

export default Blockchain;