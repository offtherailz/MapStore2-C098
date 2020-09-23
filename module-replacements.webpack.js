const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');

module.exports = [
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]actions[\\\/]mapInfo\.js/, '../../../../js/actions/mapInfo.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]data[\\\/]identify[\\\/]DefaultViewer\.jsx/, '../../../../../../js/components/data/identify/DefaultViewer.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]data[\\\/]identify[\\\/]IdentifyContainer\.jsx/, '../../../../../../js/components/data/identify/IdentifyContainer.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]data[\\\/]identify[\\\/]PopupViewer\.jsx/, '../../../../../../js/components/data/identify/PopupViewer.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]data[\\\/]identify[\\\/]viewers[\\\/]JSONViewer\.jsx/, '../../../../../../../js/components/data/identify/viewers/JSONViewer.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]data[\\\/]identify[\\\/]viewers[\\\/]TemplateViewer\.jsx/, '../../../../../../../js/components/data/identify/viewers/TemplateViewer.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]data[\\\/]identify[\\\/]viewers[\\\/]ViewerPage\.jsx/, '../../../../../../../js/components/data/identify/viewers/ViewerPage.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]data[\\\/]identify[\\\/]enhancers[\\\/]identify\.js/, '../../../../../../../js/components/data/identify/enhancers/identify.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]TOC[\\\/]DefaultViewer\.jsx/, '../../../../../js/components/TOC/DefaultLayer.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]TOC[\\\/]fragments[\\\/]settings[\\\/]FeatureInfoEditor\.jsx/, '../../../../../../../js/components/TOC/fragments/settings/FeatureInfoEditor.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]components[\\\/]TOC[\\\/]fragments[\\\/]settings[\\\/]FeatureInfo\.jsx/, '../../../../../../../js/components/TOC/fragments/settings/GFI.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]epics[\\\/]identify\.js/, '../../../../js/epics/identify.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]plugins[\\\/]Identify\.jsx/, '../../../../js/plugins/Identify.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]plugins[\\\/]TOC\.jsx/, '../../../../js/plugins/TOC.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]plugins[\\\/]TOCItemsSettings\.jsx/, '../../../../js/plugins/TOCItemsSettings.jsx'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]plugins[\\\/]tocitemssettings[\\\/]defaultSettingsTabs\.js/, '../../../../js/plugins/tocitemssettings/defaultSettingsTabs.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]reducers[\\\/]mapInfo\.js/, '../../../../js/reducers/mapInfo.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]selectors[\\\/]mapInfo\.js/, '../../../../js/selectors/mapInfo.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]utils[\\\/]LayersUtils\.js/, '../../../../js/utils/LayersUtils.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]utils[\\\/]MapInfoUtils\.js/, '../../../../js/utils/MapInfoUtils.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]utils[\\\/]mapinfo[\\\/]wfs\.js/, '../../../../js/utils/mapinfo/wfs.js'),
    new NormalModuleReplacementPlugin(/MapStore2[\\\/]web[\\\/]client[\\\/]utils[\\\/]mapinfo[\\\/]wms\.js/, '../../../../js/utils/mapinfo/wms.js')
];
