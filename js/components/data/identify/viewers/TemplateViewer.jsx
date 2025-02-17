/*
 * Copyright 2018, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {template} = require('lodash');
const TemplateUtils = require('../../../../../MapStore2/web/client/utils/TemplateUtils');
const HtmlRenderer = require('../../../../../MapStore2/web/client/components/misc/HtmlRenderer');

module.exports = ({layer = {}, gfiType, response}) => (
    <div className="ms-template-viewer">
        {response.features.map((feature, i) =>
            <div key={i}>
                <HtmlRenderer html={template(TemplateUtils.getCleanTemplate(layer[gfiType]?.template || '', feature, /\$\{.*?\}/g, 2, 1))(feature)}/>
            </div>
        )}
    </div>
);
