import "./App.css";
import RefPrac from "./week-02/RefPrac";
import UseStatePrac from "./week-01/UseStatePrac";
import UseEffectPrac from "./week-02/UseEffectPrac";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Week02 from "./week-02/Week02";
import Notyet from "./components/Notyet";
import Week03 from "./week-03/Week03";
import Week04 from "./week-04/Week04";
import Week05 from "./week-05/Week05";
import RoutingLink from "./week-03/RoutingLink";
import BtnAnimation from "./week-05/BtnAnimation";
import LoadingAnimation from "./week-05/LoadingAnimation";
import TextAnimation from "./week-05/TextAnimation";
import Week07 from "./week-07/Week07";
import Week06 from "./week-06/Week06"
import {KakaoShareButton} from "./components/KaKaoShareButton";

function App() {
	return (
		<>
			<Logo />
			<Navbar />
			<Routes>
				<Route path="/usestate" element={<UseStatePrac />}></Route>
				<Route path="/week02" element={<Week02 />}></Route>
				<Route path="/useeffect" element={<UseEffectPrac />}></Route>
				<Route path="/useref" element={<RefPrac />}></Route>
				<Route path="/notyet" element={<Notyet />}></Route>
				<Route path="/week03" element={<Week03 />}></Route>
				<Route path="/week04" element={<Week04 />}></Route>
				<Route path="/week05" element={<Week05 />}></Route>
                <Route path="/week06" element={<Week06 />}></Route>
                <Route path="/week07" element={<Week07 />}></Route>
                <Route path="/routinglink" element={<RoutingLink />}></Route>
                <Route path="/BtnAnimation" element={<BtnAnimation/>}></Route>
                <Route path="/loadinganimation" element={<LoadingAnimation/>}></Route>
                <Route path="/textanimation" element={<TextAnimation/>}></Route>
                <Route path="/kakaosharebutton" element={<KakaoShareButton/>}></Route>
			</Routes>
		</>
	);
}

export default App;
