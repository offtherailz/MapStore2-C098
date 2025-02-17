/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const MapInfoUtils = require('../../../utils/MapInfoUtils');
const HTML = require('../../../../MapStore2/web/client/components/I18N/HTML');
const Message = require('../../../../MapStore2/web/client/components/I18N/Message');
const {Alert, Panel, Accordion} = require('react-bootstrap');
const ViewerPage = require('./viewers/ViewerPage');
const {isNil, isEmpty} = require('lodash');
const {getFormatForResponse} = require('../../../../MapStore2/web/client/utils/IdentifyUtils');

class DefaultViewer extends React.Component {
    static propTypes = {
        format: PropTypes.string,
        gfiType: PropTypes.string,
        collapsible: PropTypes.bool,
        requests: PropTypes.array,
        responses: PropTypes.array,
        missingResponses: PropTypes.number,
        container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        header: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        headerOptions: PropTypes.object,
        validator: PropTypes.func,
        viewers: PropTypes.object,
        style: PropTypes.object,
        containerProps: PropTypes.object,
        index: PropTypes.number,
        onNext: PropTypes.func,
        onPrevious: PropTypes.func,
        onUpdateIndex: PropTypes.func,
        setIndex: PropTypes.func,
        showEmptyMessageGFI: PropTypes.bool,
        renderEmpty: PropTypes.bool,
        loaded: PropTypes.bool,
        noQueryableLayers: PropTypes.bool
    };

    static defaultProps = {
        format: MapInfoUtils.getDefaultInfoFormatValue(),
        responses: [],
        requests: [],
        missingResponses: 0,
        collapsible: false,
        headerOptions: {},
        container: Accordion,
        validator: MapInfoUtils.getValidator,
        viewers: MapInfoUtils.getViewers(),
        style: {
            position: "relative",
            marginBottom: 0
        },
        gfiType: 'featureInfo',
        containerProps: {},
        showEmptyMessageGFI: true,
        renderEmpty: false,
        onNext: () => {},
        onPrevious: () => {},
        setIndex: () => {},
        noQueryableLayers: false
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.responses !== this.props.responses || nextProps.missingResponses !== this.props.missingResponses || nextProps.index !== this.props.index;
    }

    /**
     * Get validation properties of the responses
     */
    getResponseProperties = () => {
        const validator = this.props.validator(this.props.format);
        const responses = this.props.responses.map(res => res === undefined ? {} : res); // Replace any undefined responses
        const validResponses = (this.props.renderEmpty ? validator.getValidResponses(responses, this.props.renderEmpty) : responses).filter(res => !isNil(res.response)); // empty response is invalid
        const invalidResponses = validator.getNoValidResponses(this.props.responses);
        const emptyResponses = this.props.requests.length === invalidResponses.length;
        const currResponse = this.getCurrentResponse(validResponses[this.props.index]);
        return {
            validResponses,
            currResponse,
            emptyResponses,
            invalidResponses
        };
    }

    /**
     * Identify current response is valid
     */
    getCurrentResponse = (response) => {
        const validator = this.props.validator(this.props.format);
        return validator.getValidResponses([response], true);
    }

    renderEmptyLayers = () => {
        const {invalidResponses, emptyResponses} = this.getResponseProperties();
        if (this.props.missingResponses === 0 && emptyResponses) {
            return null;
        }
        let allowRender = invalidResponses.length !== 0;
        if (!this.props.renderEmpty) {
            allowRender =  allowRender && this.props.missingResponses === 0;
        }
        if (allowRender) {
            const titles = invalidResponses.map((res) => {
                const {layerMetadata} = res;
                return layerMetadata.title;
            });
            return this.props.showEmptyMessageGFI ? (
                <Alert bsStyle={"info"}>
                    <Message msgId={"noInfoForLayers"} />
                    <b>{titles.join(', ')}</b>
                </Alert>
            ) : null;
        }
        return null;
    };

    renderPage = (response) => {
        const Viewer = this.props.viewers[this.props.format];
        if (Viewer) {
            return <Viewer response={response} />;
        }
        return null;
    };

    renderEmptyPages = () => {
        const {emptyResponses} = this.getResponseProperties();
        if (this.props.noQueryableLayers || this.props.missingResponses === 0 && emptyResponses) {
            return (
                <Alert bsStyle={"danger"}>
                    <h4><HTML msgId="noFeatureInfo"/></h4>
                </Alert>
            );
        }
        return null;
    }

    renderPages = () => {
        const {validResponses: responses} = this.getResponseProperties();
        return responses.map((res, i) => {
            const {response, layerMetadata} = res;
            const format = getFormatForResponse(res, this.props);
            const PageHeader = this.props.header;
            let customViewer;
            if (layerMetadata?.viewer?.type) {
                customViewer = MapInfoUtils.getViewer(layerMetadata.viewer.type);
            }
            return (<Panel
                eventKey={i}
                key={i}
                collapsible={this.props.collapsible}
                header={PageHeader ? <span><PageHeader
                    size={responses.length}
                    {...this.props.headerOptions}
                    {...layerMetadata}
                    index={this.props.index}
                    onNext={() => this.props.onNext()}
                    onPrevious={() => this.props.onPrevious()}/></span> : null
                }
                style={this.props.style}>
                <ViewerPage
                    response={response}
                    gfiType={this.props.gfiType}
                    format={format}
                    viewers={customViewer || this.props.viewers}
                    layer={layerMetadata}/>
            </Panel>);
        });
    };

    render() {
        const Container = this.props.container;
        const {currResponse, emptyResponses} = this.getResponseProperties();
        return (
            <div className="mapstore-identify-viewer">
                {!this.props.noQueryableLayers && !emptyResponses ?
                    <>
                        <Container {...this.props.containerProps}
                            onChangeIndex={(index) => {
                                this.props.setIndex(index);
                            }}
                            ref="container"
                            index={this.props.index || 0}
                            key={"swiper"}
                            style={{display: isEmpty(currResponse) ? "none" : "block"}}
                            className="swipeable-view">
                            {this.renderPages()}
                        </Container>
                        {this.renderEmptyLayers()}
                    </>
                    : this.renderEmptyPages()
                }
            </div>
        );
    }
}

module.exports = DefaultViewer;
