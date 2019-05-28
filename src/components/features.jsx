import React, { Component } from "react";



class Features extends Component {
  state = {};
  render() {
    return (
      <div className="container mb-5" id="features">
        <div className="row text-center mb-2">
          <h1 className="display-5 w-100 mt-5 heading-row">More Features</h1>
          <p className="lead w-100 heading-row-sub">
            You will get lot of features with flathost
          </p>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="card card-border">
              <div className="card-body px-0">
                <img
                  src={require('../assets/images/setup_icon.png')}
                  alt="setup_icon"
                  className="float-left"
                />
                <h5 className="card-title font-weight-bold card-body-padding mb-2">
                  Instant Setup
                </h5>
                <p className="card-text card-body-padding">
                  As soon as you make a successful payment via PayPal or Google
                  Checkout, your web hosting and domain names will be activated
                  immediately. No waiting time whatsoever.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card card-border">
              <div className="card-body px-0">
                <img
                  src={require('../assets/images/backup_icon.png')}
                  alt="backup_icon"
                  className="float-left"
                />
                <h5 className="card-title font-weight-bold card-body-padding mb-2">
                  Constant Backups
                </h5>
                <p className="card-text card-body-padding">
                  Your hosting account is backed up 4 times a day as standard,
                  with our backup integration. We use dedicated backup servers,
                  providing fast & easy individual file rollback abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="card card-border">
              <div className="card-body px-0">
                <img
                  src={require('../assets/images/git_icon.png')}
                  alt="git_icon"
                  className="float-left"
                />
                <h5 className="card-title font-weight-bold card-body-padding mb-2">
                  GIT/SVN Support
                </h5>
                <p className="card-text card-body-padding">
                  Web Developers love using version control systems. All of our
                  hosting accounts can use GIT & SVN command line tools on our
                  servers. Simply request SSH access to get started.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card card-border">
              <div className="card-body px-0">
                <img
                  src={require('../assets/images/script_icon.png')}
                  alt="script_icon"
                  className="float-left"
                />
                <h5 className="card-title font-weight-bold card-body-padding mb-2">
                  280+ Install Scripts
                </h5>
                <p className="card-text card-body-padding">
                  All our hosting accounts allow you to install popular software
                  such as Wordpress, Drupal, Joolma and Magento in one easy
                  step. Upgrading your software is just as easy!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="card card-border">
              <div className="card-body px-0">
                <img
                  src={require('../assets/images/cpanel_icon.png')}
                  alt="cpanel_icon"
                  className="float-left"
                />
                <h5 className="card-title font-weight-bold card-body-padding mb-2">
                  cPanel Included
                </h5>
                <p className="card-text card-body-padding">
                  All hosting accounts come with the latest version of cPanel.
                  This makes life easy for you to do routine tasks such as
                  setting up email addresses and managing MySQL databases.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card card-border">
              <div className="card-body px-0">
                <img
                  src={require('../assets/images/php_icon.png')}
                  alt="php_icon"
                  className="float-left"
                />
                <h5 className="card-title font-weight-bold card-body-padding mb-2">
                  Latest PHP & MySQL
                </h5>
                <p className="card-text card-body-padding">
                  Our network runs the latest stable and secure versions of PHP
                  & MySQL. We also implement strict security and firewall rules
                  protecting your website from unwanted visitors 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
