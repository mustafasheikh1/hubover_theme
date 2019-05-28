import React, { Component } from 'react';
import { Home, Feature, NotFound } from './subPages/index';
import { Header, Footer, Contact, Partners } from '../components/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class MultiPage extends Component {
	state = {}

	render() {
		return (
			<React.Fragment>
				<Router>
					<Header type="multiPage" change={this.props.change} />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/Features" component={Feature} />
						<Route path="/Partners" component={Partners} />
						<Route path="/Contact" component={Contact} />
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</Router>
			</React.Fragment>
		);
	}
}

export default MultiPage;