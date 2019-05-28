import React, { Component } from 'react';

class Footer extends Component {
	state = {  }
	render() { 
		return (  
			<div className="footer-background mt-5">
				<div className="container pt-5">
					<div className="row">
						<div className="col-lg-2 col-sm-12">
							<p>CALL US</p>
							<ul className="list p-0" style={{fontSize: '14px'}}>
								<li className="w-100 list-item">+92 321 4441444</li>
								<li className="w-100 list-item">+92 336 4256811</li>
							</ul>
						</div>
						<div className="col-lg-2 col-sm-12">
								<p>FOLLOW US</p>
								<ul className="list p-0" style={{fontSize: '14px'}}>
									<li className="w-100 list-item"><a href="." className="list-item">Follow on Twitter</a></li>
									<li className="w-100 list-item"><a href="https://www.facebook.com/hubover/" className="list-item">Like us on Facebook</a></li>
									<li className="w-100 list-item"><a href="." className="list-item">Join on Linkedin</a></li>
								</ul>
						</div>
						<div className="col-lg-2 col-sm-12">
								<p>COMPANY</p>
								<ul className="list p-0" style={{fontSize: '14px'}}>
									<li className="w-100 list-item"><a href="." className="list-item">About us</a></li>
									<li className="w-100 list-item"><a href="." className="list-item">Latest from Blog</a></li>
									<li className="w-100 list-item"><a href="." className="list-item">Our Team</a></li>
								</ul>
						</div>
						<div className="col-lg-2 col-sm-12">
								<p>EMAIL US</p>
								<ul className="list p-0" style={{fontSize: '14px'}}>
									<li className="w-100 list-item"><a href="." className="list-item">support@hubover.com</a></li>
								</ul>
						</div>
						<div className="col-lg-2 col-sm-12">
								<p>LEGAL TERMS</p>
								<ul className="list p-0" style={{fontSize: '14px'}}>
									<li className="list-item w-100"><a href="." className="list-item">Terms of use</a></li>
									<li className="list-item w-100"><a href="." className="list-item">Privicy Policy</a></li>
								</ul>
						</div>
						<div className="col-lg-2 col-sm-12">
								<p>LIVE CHAT</p>
								<ul className="list p-0" style={{fontSize: '14px'}}>
									<li className="list-item"><input type="button" value="CHAT WITH US" className="live-chat-btn"/></li>
								</ul>
						</div>
					</div>
					<div className="row h-auto">
						<div className="col-6 footer-copyright-label h-auto">
							<p>Copyright © 2018. Hubover Inc</p>
						</div>
						<div className="col-6 footer-copyright-img h-auto">
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Footer;