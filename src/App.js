import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyPicker from './components/CurrencyPicker';
import CurrencyExchange from './components/CurrencyExchange';
import CurrentRate from './components/CurrentRate';

export default class App extends Component {
	intervalID;

	constructor(props) {
		super(props);
		this.state = {
			result: '',
			fromCurrency: 'GBP',
			toCurrency: 'EUR',
			amount: '0',
			currencies: ['USD', 'EUR', 'GBP'],
			exchange: ''
		};
	}

	componentDidMount() {
		this.calculate();
	}

	componentWillUnmount() {
		clearTimeout(this.intervalID);
	}

	calculate = () => {
		const amount = this.state.amount;
		if (amount === isNaN) {
			return;
		} else {
			fetch(
				`https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency}`
			)
				.then((res) => res.json())
				.then((data) => {
					const result = (data.rates[this.state.toCurrency] * amount).toFixed(
						2
					);
					const exchange = data.rates;
					this.setState({
						result,
						exchange
					});

					// call calculate() again in 10 seconds
					this.intervalID = setTimeout(this.calculate.bind(this), 10000);
				})
				.catch((err) => console.log(err));
		}
	};

	handleSelect = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
				result: null
			},
			this.calculate
		);
	};

	handleInput = (e) => {
		this.setState(
			{
				amount: e.target.value,
				result: null
			},
			this.calculate
		);
	};

	render() {
		const {
			currencies,
			fromCurrency,
			amount,
			toCurrency,
			result,
			exchange
		} = this.state;
		const currencyMap = currencies.map((currency) => (
			<option key={currency} value={currency}>
				{currency}
			</option>
		));

		return (
			<React.Fragment>
				<div className='App'>
					<div className='App-header'>
						<CurrentRate
							from={fromCurrency}
							to={toCurrency}
							amount='1'
							rate={exchange}
						/>
						<div className='itemWrapper'>
							<div className='col-xs-6 col-sm-3'>
								<CurrencyPicker
									currencyValue={fromCurrency}
									selectCurrency={this.handleSelect}
									currenyOptions={currencyMap}
									name='fromCurrency'
								/>
							</div>

							<div className='col-xs-12 col-sm-12'>
								<div className='form-group'>
									<span className='font-weight-bold fsizes'>Amount</span>
									<CurrencyExchange
										base={amount}
										handleInput={this.handleInput}
										convertTo={fromCurrency}
										disable={false}
									/>
								</div>
							</div>
						</div>

						<div className='itemWrapper'>
							<div className='col-xs-6 col-sm-3'>
								<CurrencyPicker
									currencyValue={toCurrency}
									selectCurrency={this.handleSelect}
									currenyOptions={currencyMap}
									name='toCurrency'
								/>
							</div>

							<div className='col-xs-12 col-sm-12'>
								<div className='form-group'>
									<span className='font-weight-bold fsizes'>Converted to</span>
									<CurrencyExchange
										base={amount === '' ? '0' : result === null ? '0' : result}
										convertTo={toCurrency}
										disable={false}
										handleInput={this.handleInput}
									/>
								</div>
							</div>
						</div>

						<span className='font-weight-light fsizes my-3'>
							Data provided by: Exchangeratesapi.io
						</span>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
