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
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';
import Products from './components/site/Products/Products';
import Solutions from './components/site/Solutions/Solutions';
import Support from './components/site/Events/Support';
import Resources from './components/site/Resources/Resources';
import PrivateRoute from './PrivateRouter/PrivateRoute';
import PublicRoute from './PublicRouter/PublicRoute';
import Unauthorised from './components/webapp/Error/Unauthorised';

function App() {
	// const [isAuthenticated, setIsAuthenticated] = useState(false);

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
												<Route exact path='/resources' component={Resources} />
												<Route path='/login' component={Auth} />
												<PublicRoute
													exact
													path='/sales-pitch'
													component={Salespitch}
												/>

												<PublicRoute
													exact
													path='/inbound'
													component={Inbound}
												/>
												{/* <Route exact path='/inbound' component={Inbound} /> */}
												<PublicRoute
													exact
													path='/inbound/add-qty/:id'
													component={AddQty}
												/>
												<PublicRoute
													exact
													path='/inbound/history'
													component={InboundHistory}
												/>
												<PrivateRoute
													exact
													path='/report'
													component={ReportSales}
												/>
												<PrivateRoute
													exact
													path='/report/inbound'
													component={ReportInbound}
												/>
												<PrivateRoute
													exact
													path='/storage/admin'
													component={StorageAdmin}
												/>
												<PrivateRoute
													exact
													path='/storage/admin/new-product'
													component={NewProduct}
												/>
												<PrivateRoute
													exact
													path='/storage/search/:value'
													component={SearchProd}
												/>
												<PrivateRoute
													exact
													path='/access'
													component={AccessControl}
												/>
												<PrivateRoute
													exact
													path='/access/staff/add'
													component={AddNewStaff}
												/>
												<PrivateRoute
													exact
													path='/access/dept/add'
													component={AddNewDept}
												/>

												<PublicRoute path='/401' component={Unauthorised} />
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
