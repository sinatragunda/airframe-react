import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withPageConfig } from './withPageConfig'
import { useLocation } from 'react-router-dom';

export const withRouter = Component => props => {
    const location = useLocation();
    return <Component {...props} location={location} />;
};

export const setupPage = (startupConfig) => 
    (Component) => {
        class PageSetupWrap extends React.Component {
            static propTypes = {
                pageConfig: PropTypes.object
            }
            componentDidMount() {
                this.prevConfig = _.pick(this.props.pageConfig,
                    ['pageTitle', 'pageDescription', 'pageKeywords']);
                this.props.pageConfig.changeMeta(startupConfig);
            }

            componentWillUnmount() {
                this.props.pageConfig.changeMeta(this.prevConfig);
            }

            render() {
                return (
                    <Component { ...this.props } />
                )
            }
        }

        return withPageConfig(PageSetupWrap);
    };