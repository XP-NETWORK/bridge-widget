import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav,Link,Image, Modal, Button, Header, Title, Body, Container, Dropdown, Toggle, Menu, Item  } from "react-bootstrap";

import "./Global.css";
import Aboutus_img from './assets/img/icon/about-icon.svg';
import Arrowdown from './assets/img/icon/arrow_down_small.svg';
import Arrowlight from './assets/img/icon/arrow_right_w.svg';
import Connectchain from './assets/img/icon/connect_chain.svg';
import Departure from './assets/img/icon/departure.svg';
import Desincation from './assets/img/icon/destination.svg';
import Video from './assets/img/icon/video.svg';

function App() {
    
return (
<div className="bodyWrap">
	<div className="bridge_select_contain">
		<div className="nft_title">
		<h1>Transfer NFTs <br/> between blockchains</h1>
		</div>
		<div className="bridge_select_box">
			<div className="bridge_connect_box">
				<div class="bridge_connect">
					<div class="bridge_select selectDepar">
						<Image src={Departure} className="chain"/> <span> Select departure chain</span> <Image src={Arrowdown} className="arrow_down"/>
					</div>
					<span className="connec_chain"><img src={Connectchain}/></span>
					<div className="bridge_select selectDestina">
						<Image src={Departure} class="chain"/> <span>Select departure chain</span> <Image src={Arrowdown} className="arrow_down"/>
					</div>
				</div>
				<a href="#" className="connect_bridge">Continue bridging <img src={Arrowlight}/></a>
			</div>
			<div className="connect_bridge_tutorial">
					<a href="#" className="tutorial_links col-g"><Image src={Video}/> Learn how to use NFT bridge</a>
					<a href="#" className="tutorial_links col-g"><Image src={Aboutus_img}/> What is NFT</a>
			</div>
		</div>
	</div>
</div>
  
  );
}

export default App;
