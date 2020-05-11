import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/site/Home/Home';
import Auth from './components/site/Auth/Auth';
import Salespitch from './components/webapp/Salespitch/SalesPitch';
import Inbound from './components/webapp/Inbound/Inbound';

import AddQty from './components/webapp/Inbound/AddQty';
import ReportInbound from './components/webapp/Report/ReportInbound';
import ReportSales from './components/webapp/Report/ReportSales';
import StorageAdmin from './components/webapp/StorageAdmin/StorageAdmin';

import NewProduct from './components/webapp/StorageAdmin/NewProduct';
import StyleContextProvider from './contexts/StyleContext';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<StyleContextProvider>
						<Route exact path='/' component={Home} />
						<Route path='/login' component={Auth} />
						<Route path='/sales-pitch' component={Salespitch} />
						<Route exact path='/inbound' component={Inbound} />
						<Route exact path='/inbound/add-qty' component={AddQty} />
						<Route exact path='/report' component={ReportSales} />
						<Route exact path='/report/inbound' component={ReportInbound} />
						<Route exact path='/storage/admin' component={StorageAdmin} />
						<Route
							exact
							path='/storage/admin/new-product'
							component={NewProduct}
						/>
					</StyleContextProvider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
