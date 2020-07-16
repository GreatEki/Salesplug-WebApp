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
import AccessControl from './components/webapp/AccessControl/AccessControl';
import AddNewStaff from './components/webapp/AccessControl/AddNewStaff';
import StyleContextProvider from './contexts/StyleContext';
import AddNewDept from './components/webapp/AccessControl/AddNewDept';
import AccessContextProvider from './contexts/AccessContext';
import InboundHistory from './components/webapp/Inbound/InboundHistory';
import InboundContextProvider from './contexts/InboundContext';
import SalesPitchContextProvider from './contexts/SalesPitchContext';
import StorageAdminContextProvider from './contexts/StorageAdminContext';
import SearchProd from './components/webapp/StorageAdmin/SearchProd';
import ReportContextProvider from './contexts/ReportContext';
import AuthContextProvider from './contexts/AuthContext';
import Products from './components/site/Products/Products';
import Solutions from './components/site/Solutions/Solutions';
import Support from './components/site/Events/Support';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<ReportContextProvider>
						<StorageAdminContextProvider>
							<SalesPitchContextProvider>
								<InboundContextProvider>
									<AccessContextProvider>
										<StyleContextProvider>
											<AuthContextProvider>
												<Route exact path='/' component={Home} />
												<Route exact path='/products' component={Products} />
												<Route exact path='/solutions' component={Solutions} />
												<Route exact path='/support' component={Support} />
												<Route path='/login' component={Auth} />
												<Route path='/sales-pitch' component={Salespitch} />
												<Route exact path='/inbound' component={Inbound} />
												<Route
													exact
													path='/inbound/add-qty/:id'
													component={AddQty}
												/>
												<Route
													exact
													path='/inbound/history'
													component={InboundHistory}
												/>
												<Route exact path='/report' component={ReportSales} />
												<Route
													exact
													path='/report/inbound'
													component={ReportInbound}
												/>
												<Route
													exact
													path='/storage/admin'
													component={StorageAdmin}
												/>
												<Route
													exact
													path='/storage/admin/new-product'
													component={NewProduct}
												/>
												<Route
													exact
													path='/storage/search/:value'
													component={SearchProd}
												/>
												<Route exact path='/access' component={AccessControl} />
												<Route
													exact
													path='/access/staff/add'
													component={AddNewStaff}
												/>
												<Route
													exact
													path='/access/dept/add'
													component={AddNewDept}
												/>
											</AuthContextProvider>
										</StyleContextProvider>
									</AccessContextProvider>
								</InboundContextProvider>
							</SalesPitchContextProvider>
						</StorageAdminContextProvider>
					</ReportContextProvider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
