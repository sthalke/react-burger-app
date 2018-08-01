import React, { Component } from 'react'; 

import Aux from '../Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerHendler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHendler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer}
        })
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHendler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerHendler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;